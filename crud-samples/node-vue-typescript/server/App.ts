import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import tags from './routes/tags'
import * as mongoose from 'mongoose'
import mongoURI from './config/mongo'
import * as cors from 'cors'


class App {
  public express

  constructor () {
    this.express = express()
    this.mongoConnect()
    this.addBodyParser()
    this.mountRoutes()
  }

  private mongoConnect() : void {
    mongoose
      .connect(mongoURI, { useNewUrlParser: true })
      .then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err));
  }
  private mountRoutes (): void {
    this.express.use(cors());
    this.express.options('*', cors());
    
    this.express.use(express.static(__dirname + '/../client-complied'));
    this.express.use('/api/tags', tags);
    this.express.get('/', (req,res) => {
      res.sendFile(__dirname + "/../client-complied/index.html");
    });
    this.express.use("*", (req,res) => {
      res.sendFile(__dirname + "/../pages/404.html");
    });
    this.express.use( (err, req, res, next) => {
      res.status(500).send('Something broke!')
    })
  }

  private addBodyParser(): void {
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(bodyParser.json());
    this.express.use(cookieParser())
  }
}

export default new App().express
