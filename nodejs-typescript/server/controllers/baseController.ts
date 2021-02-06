class BaseController {
  public request
  public response
  public model
  public id

  constructor() {
    this.request = null
    this.response = null
    this.model = null
  }

  init(req, res, next) { //Act as middleware
    this.request = req
    this.response = res
    next()
  }

  setModel(model) {
    this.model = model
  }

  sendSaveResponse(data) {
    return this.response.status(201).json(data)
  }

  sendSuccessResponse(data) {
    return this.response.status(200).json(data)
  }

  sendErrorResponse(data) {
    return this.response.status(400).json(data)
  }

  sendNotFoundResponse(data) {
    return this.response.status(404).json(data)
  }

  payload(
    success = true, //true or false
    status = 'success', // ['success', 'danger', 'warning']
    message = 'success',
    data = {},
    errors = {message: <string> null,id: <number> null},
    total = 0
  ) {
    return {success, status, message, data, errors, total}
  }

  route(body){
    if (body.action == 'add') {
      return this.store(body.data);
    } else if (body.action == 'edit') {
      return this.update(body.id, body.data);
    } else if (body.action == 'get') {
      return this.get(body.id);
    } else if (body.action == 'delete') {
      return this.destroy(body.id);
    } else { return null; }
  }

  store(data) {
    let model = new this.model(data);
    model.save((err, model) => {
      if (err) {
        return this.sendErrorResponse(
          this.payload(false, 'error', 'save error', null, err)
        );
      }
      return this.sendSaveResponse(
        this.payload(true, 'success', 'save success', model, null)
      )
    });
  }

  update(id, data) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      this.sendErrorResponse(
        this.payload(false, 'warning', 'invalid id', null, {
          id: id,
          message: 'invalid id'
        })
      )
    }
    this.model.updateOne({_id : id}, data, error => {
      if (error) {
        return this.sendNotFoundResponse(
          this.payload(false, 'warning', 'model not found', null, {
            id: id,
            message: 'invalid id'
          })
        )
      }
      return this.sendSuccessResponse(
        this.payload(true, 'success', 'update success', data, null)
      )
    })
  }

  destroy(id) {
    this.model.deleteOne({_id : id}, error => {
      if (error) {
        return this.sendNotFoundResponse(
          this.payload(false, 'warning', 'model not found', null, {
            id: id,
            message: 'invalid id'
          })
        )
      }
      return this.sendSuccessResponse(
        this.payload(true, 'success', 'delete success', null, null)
      )
    });
  }

  get(id) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      this.sendErrorResponse(
        this.payload(false, 'warning', 'invalid id', null, {
          id: id,
          message: 'invalid id'
        })
      )
    }
    this.model.findById(id).then(model => {
      if (!model) {
        return this.sendNotFoundResponse(
          this.payload(false, 'warning', 'model not found', null, {
            id: id,
            message: 'invalid id'
          })
        )
      }
      return this.sendSuccessResponse(
        this.payload(true, 'success', 'read success', model, null)
      )
    })
  }
}

export default BaseController
