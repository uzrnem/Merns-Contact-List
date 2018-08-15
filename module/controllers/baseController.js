class BaseController {
  constructor() {
    this.request = null
    this.response = null
    this.model = null
  }

  init (req, res) {
    this.request = req
    this.response = res
  }

  setModel (model) {
    this.model = model
  }

  sendSaveResponse (data) {
    return this.response.status(201).json(data)
  }

  sendSuccessResponse (data) {
    return this.response.status(200).json(data)
  }

  sendErrorResponse (data) {
    return this.response.status(400).json(data)
  }

  sendNotFoundResponse (data) {
    return this.response.status(404).json(data)
  }

	payload (
    success = true, //true or false
    status = 'success', // ['success', 'danger', 'warning']
    message = 'success',
    data = [],
    errors = [],
    total = 0
  ) {
		return { success, status, message, data, errors, total }
	}

  store (data) {
    return this.sendSaveResponse(
      this.payload(true, 'success', 'save success', data, [])
    )
  }

  update (id) {

  }
  destroy(id) {

  }

  get (id) {
    this.model.findById(id).then(user => {
      if (!user) {
        return this.sendNotFoundResponse(
          this.payload(false, 'warning', 'User not found', [], {
            id : id,
            message : 'invalid id'
          })
        )
      }
      return this.sendSuccessResponse(
        this.payload(true, 'success', 'read success', user, [])
      )
    })
  }
}
/*


*/
module.exports = BaseController

/*
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
  }*/
