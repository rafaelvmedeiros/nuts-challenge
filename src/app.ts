import express, { Request, ErrorRequestHandler, Response, NextFunction } from "express";
import routes from "./routes";
import Youch from "youch";

class App {
    server: any;

    constructor() {
     this.server = express()
     this.routes()
     this.exceptionHandler()
    }
    
    routes() {
      this.server.use(routes)
    }

    exceptionHandler() {
        this.server.use(async (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
            if (process.env.NODE_ENV === 'development') {
              const errors = await new Youch(err, req).toJSON();
              return res.status(500).json(errors);
            }
      
            return res.status(500).json({ error: 'Internal server error' });
          });
    }
}

export default new App().server