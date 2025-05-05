import express from "express";

export class AppBuilder {
  private app: express.Express;

  constructor() {
    this.app = express();
  }

  public withJsonContent(): this {
    this.app.use(express.json());
    return this;
  }

  public withRoute(path: string, router: express.Router): this {
    this.app.use(path, router);
    return this;
  }

  public build(): express.Express {
    return this.app;
  }
}


// This is a cleaner way of adding middlewares and routes path which will help to make the app more reliable and clean 
