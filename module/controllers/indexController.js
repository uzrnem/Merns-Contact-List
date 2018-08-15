var fs = require('fs');

class IndexController {
  constructor() {
  	this.path = "/../../pages/"
  }
  
  loadPage(req, res, page) {
    fs.readFile(__dirname + this.path + page, function(err, data) {
      if (err) {
        throw err;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
    //res.redirect('public/index.html');
  }
}
module.exports = new IndexController()
