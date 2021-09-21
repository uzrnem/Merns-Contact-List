<?php
/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class Contact extends BaseModel
{
    use SoftDeletes;
    protected $primaryKey = 'c_id';

    protected $dates = [ 'created_at', 'updated_at', 'deleted_at' ];

    protected $hidden = [
        'created_at', 'updated_at', 'deleted_at'
    ];

    public $validateRules = [
      'email' => 'required|string|email|max:255|unique:contacts',
      'first_name' => 'required|min:1|max:20',
      'last_name' => 'required|min:1|max:20',
      'mobile' => 'required|digits:10',
      'created_at' => 'nullable|date',
      'updated_at' => 'nullable|date'
    ];

    public function module()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

    public function getListQueryObject()
    {
      $sql = DB::table( $this->getTable() )
            ->leftJoin('users', 'user_id', '=', 'users.id')
            ->select("{$this->getTable()}.*", 'users.name as user_name')->toSql();
      return DB::table(DB::raw("($sql) AS {$this->getTable()}"));
    }
}
