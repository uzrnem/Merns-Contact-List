<?php
/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    public $repository;

    public function sendSaveResponse($data)
    {
        return response()->json($data, 201);
    }

    public function sendSuccessResponse($data)
    {
        return response()->json($data, 200);
    }

    public function sendErrorResponse($data)
    {
        return response()->json($data, 400);
    }

    public function sendNotFoundResponse($data)
    {
        return response()->json($data, 404);
    }

    public function store(Request $request)
    {
        $response = $this->repository->create($request->all());
        if ($response['success']) {
            return $this->sendSaveResponse($response);
        }
        return $this->sendErrorResponse($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function get($id)
    {
        $response = $this->repository->get($id);
        if ($response['success']) {
            return $this->sendSuccessResponse($response);
        }
        return $this->sendErrorResponse($response);
    }

    public function getPagination($pageParam)
    {
      $param = json_decode($pageParam, true);
      $page = $param['current'] ?? 1;
      $weight = $param['pageWeight'] ?? null;
      if (empty($page)) {
        $page = 1;
      }
      if (empty($weight)) {
        $weight = 10;
      }
      $skip = ($page - 1) * $weight;
      return [
        "offset" => $skip,
        "limit" => $weight
      ];
    }

    public function getSorting($sortParam)
    {
      $param = json_decode($sortParam);
      if (empty($param)) {
        return null;
      }
      if ($param->key && $param->value && in_array($param->value, ['asc', 'desc'])) {
        return [$param->key, $param->value];
      }
      return null;
    }

    public function getFilter($filterParam)
    {
      $param = json_decode($filterParam, true);
      if (empty($param)) {
        return null;
      }
      $filter = [];
      foreach ($param as $key => $value) {
        if (!empty($value)) {
          $filter[$key] = $value;
        }
      }
      return $filter;
    }

    public function list(Request $request)
    {
        $pageParam = $request->input('pageParam');
        $pagination = $this->getPagination($pageParam);
        $sortParam = $request->input('sortParam');
        $sorting = $this->getSorting($sortParam);
        $filterParam = $request->input('filterParam');
        $filters = $this->getFilter($filterParam);
        $conditionParam = $request->input('conditionParam');
        $condition = $this->getFilter($conditionParam);
        $response = $this->repository->list($filters, $pagination, $sorting, null, null, $condition);
        if ($response['success']) {
            return $this->sendSuccessResponse($response);
        }
        return $this->sendErrorResponse($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $response = $this->repository->update($request->all(), $id);
        if ($response['success']) {
            return $this->sendSuccessResponse($response);
        }
        return $this->sendErrorResponse($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $response = $this->repository->destroy($id);
        if ($response['success']) {
            return $this->sendSuccessResponse($response);
        }
        return $this->sendErrorResponse($response);
    }
}
