<?php
/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
namespace App\Repositories;

interface RepositoryInterface {

    //public function all($columns = array('*'));

    //public function paginate($perPage = 15, $columns = array('*'));

    public function create(array $data);

    public function update(array $data, $id);

    public function get($id);

    public function destroy($id);

    //public function find($id, $columns = array('*'));

    //public function findBy($field, $value, $columns = array('*'));

    public function list($weight, $skip);
}
