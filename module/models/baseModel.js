<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    protected $isValidationError = false;
    protected $validationErrors = [];

    public $validateRules = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */

    public function isValidationFails()
    {
        return $this->isValidationError;
    }

    public function getErrors()
    {
        return $this->validationErrors;
    }

    public function setErrors($data)
    {
        $this->validationErrors = $data;
        $this->isValidationError = true;
    }

    public function getValidationRules($updateFlag = false)
    {
        if ($updateFlag) {
            return $this->getValidationRulesPlus(true);
        }
        return $this->validateRules;
    }

    public function getValidationRulesPlus($flag = false)
    {
        return $this->validateRules;
    }

    public function saveRecord($rawData)
    {
        $columns = \Schema::getColumnListing( $this->getTable() ); //self::getTable() );

        $flipColumns = array_flip( $columns );

        $data = array_intersect_key( $rawData, $flipColumns );

        $validator = \Validator::make($data, $this->getValidationRules(isset($this->id)));

        if ($validator->fails()) {
            $this->setErrors($validator->errors());
            return $this;
        }

        foreach ($data as $key => $value) {
            $this->{$key} = $value;
        }
        if ($this->save()) {
            return $this;
        }
        return null;
    }

    public function getListQueryObject()
    {
      return DB::table( $this->getTable() );
    }
    /*
    public $validateRules = [
      'exists:table,column,deleted_at,NULL'
    ];
    */
}
