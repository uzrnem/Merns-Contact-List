<?php
/*
 * @author Bhagyesh Sunil Patel
 * @company gisue inc
 * @email gisueinc@gmail.com
 */
namespace App\Repositories;

use App\Models\Contact;

class ContactRepository extends BaseRepository
{
    public function __construct()
    {
        $this->model = new Contact();
        $this->userId = null;
    }

    public function setUserId($uid)
    {
      $this->userId = $uid;
    }

    public function createFilter(array $data)
    {
      $data['user_id'] = $this->userId;
    	return $data;
    }

    public function getValidate($contact)
    {
      return $contact->user_id == $this->userId;
    }

    public function updateFilter(array $data)
    {
    	return createFilter($data);
    }

    public function setCondition($condition = [])
    {
      $condition['user_id'] = $this->userId;
      return parent::setCondition($condition);
  	}
}
