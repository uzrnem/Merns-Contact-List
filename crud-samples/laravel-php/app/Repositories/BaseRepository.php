<?php
/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
namespace App\Repositories;

use Illuminate\Support\Facades\DB;

class BaseRepository implements RepositoryInterface
{
	public $model;
	protected $query;
	const DEFAULT_LIST_LIMIT = 10;

	public function payload($success, $status, $message, $dataKey, $data, $total = 0) {
		return [
			'success' => $success,
			'status' => $status,
			'message' => $message,
			$dataKey => $data,
			'total' => $total
		];
	}

	public function beginTransaction()
	{
		DB::beginTransaction();
	}

	public function commitTransaction()
	{
		DB::commit();
	}

	public function rollBackTransaction()
	{
		DB::rollBack();
	}

	public function createFilter(array $data)
	{
		return $data;
	}

	public function create(array $data)
	{
		unset($data['id']);
		$data = $this->createFilter($data);
		$this->model = $this->model->saveRecord($data);
		if ($this->model) {
			if ($this->model->isValidationFails()) {
				return $this->payload(false, 'warning', 'Error while save data', 'errors', $this->model->getErrors());
			}
			return $this->payload(true, 'success', 'Record created!', 'data', $this->model);
		} else {
			return $this->payload(false, 'danger', 'Record not created!', 'data', []);
		}
	}

	public function getValidate($user)
	{
		return true;
	}

	public function get($id)
	{
		$this->model = ($this->model)::find($id);
		if (!$this->model) {
			return $this->payload(false, 'warning', 'No record found!', 'errors', []);
		}
		if (!$this->getValidate($this->model)) {
			return $this->payload(false, 'warning', 'No record found !', 'errors', []);
		}
		return $this->payload(true, 'success', 'Record found!', 'data', $this->model);
	}

	public function updateValidate($model)
	{
		return true;
	}

	public function updateFilter(array $data)
	{
		return $data;
	}

	public function update(array $data, $id)
	{
		$data = $this->updateFilter($data);
		$obj = $this->get($id);
		if (!$obj['success']) {
			return $obj;
		}
		if (!$this->updateValidate($this->model)) {
			return $this->payload(false, 'warning', 'No record found !', 'errors', []);
		}
		$this->model = $this->model->saveRecord($data);
		if ($this->model) {
			if ($this->model->isValidationFails()) {
				return $this->payload(false, 'warning', 'Error while update data', 'errors', $this->model->getErrors());
			}
			return $this->payload(true, 'success', 'Record updated!', 'data', $this->model);
		} else {
			return $this->payload(false, 'danger', 'Record not updated!', 'data', []);
		}
	}

	public function deleteValidate($user)
	{
		return true;
	}

	public function destroy($id)
	{
		$obj = $this->get($id);
		if (!$obj['success']) {
			return $obj;
		}
		if (!$this->deleteValidate($this->model)) {
			return $this->payload(false, 'warning', 'No record found !', 'errors', []);
		}
		if ($this->model->delete()) {
			return $this->payload(true, 'danger', 'Record deleted!', 'data', []);
		}
		return $this->payload(false, 'danger', 'Something went wrong!', 'data', []);
	}

	public function setSelect($select = null)
	{
		$this->query->select(...$select);
	}

	public function setFilter($filter = [])
	{
		$this->query->whereNull('deleted_at');
		if (empty($filter)) {
			return;
		}
		foreach ($filter as $key => $value) {
			$this->query->where($key, 'like', "%$value%");
		}
	}

	public function setCondition($condition = [])
	{
		if (empty($condition)) {
			return;
		}
		foreach ($condition as $key => $value) {
			$this->query->where($key, '=', $value);
		}
	}

	public function setSort($sort = [])
	{
		if ( empty( $sort ) ) {
			$sort = [$this->model->getKeyName(), 'desc'];
		}
		$this->query->orderBy(...$sort);
	}

	public function setPagination($pagination = null)
	{
		if ( !empty( $pagination['offset'] ) ) {
			$this->query->skip($pagination['offset']);
		}
		if ( empty( $pagination['limit'] ) ) {
			$this->query->take( self::DEFAULT_LIST_LIMIT );
		} else {
			$this->query->take($pagination['limit']);
		}
	}

	public function setAggregates($aggregates = null)
	{
		if ( empty( $aggregates['flag'] ) &&
		  !in_array(
				$aggregates['flag'],
				[
					'max', 'min', 'avg', 'sum', 'count', 'exists', 'doesntExist'
				]
			)
		) {
			return $this->query->get();
		}
		if ( $aggregates['flag'] == 'count' ) {
			return $this->query->count();
		}
		if ( $aggregates['flag'] == 'exists' ) {
			return $this->query->exists();
		}
		if ( $aggregates['flag'] == 'doesntExist' ) {
			return $this->query->doesntExist();
		}
		if ( in_array($aggregates['flag'], ['max', 'min', 'avg', 'sum']) && empty($aggregates['key'])) {
			return $this->query->get();
		}
		if ( $aggregates['flag'] == 'max' ) {
			return $this->query->max($aggregates['key']);
		}
		if ( $aggregates['flag'] == 'min' ) {
			return $this->query->min($aggregates['key']);
		}
		if ( $aggregates['flag'] == 'avg' ) {
			return $this->query->avg($aggregates['key']);
		}
		if ( $aggregates['flag'] == 'sum' ) {
			return $this->query->sum($aggregates['key']);
		}
	}

	public function list(
		$filter = null, $pagination = [], $sort = [],
		$select = null, $aggregates = null, $condition = null
	) {
		$list = null;
		$this->query = $this->model->getListQueryObject();
		if ( !empty( $select ) ){
			$this->setSelect( $select );
		}
		$this->setFilter( $filter );
		$this->setCondition( $condition );
		$count = $this->query->count();
		$this->setSort( $sort );
		if ( empty( $pagination ) ){
			$this->query->take( self::DEFAULT_LIST_LIMIT );
		} else {
			$this->setPagination( $pagination );
		}
		if ( empty ( $aggregates) ) {
			$list = $this->query->get();
		} else {
			$list = $this->setAggregates( $aggregates );
		}
		if (!$list) {
			return $this->payload(false, 'warning', 'No record found!', 'data', [], 0);
		}
		return $this->payload(true, 'success', 'Listed records!', 'data', $list, $count);
	}
}
