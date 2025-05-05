import * as express from "express";
import { Request, Response, Router, RequestHandler } from "express";
import "reflect-metadata";
import { ContainerFactory } from "./container/ContainerFactory";
import { DependencyKeys } from "./container/DependencyKeys";
import { IRouteProvider } from "./routes/IRouteProvider";
import { AppBuilder } from "./core/AppBuilder";
import { LibraryCustomizations } from "./utils/LibraryCustomization";

export class App {
  public readonly app: express.Express;

  constructor() {
    const container = ContainerFactory.getContainer();

    const router: Router = express.Router();
    const handler: RequestHandler = (req: Request, res: Response): void => {
      res.send("APIs Started!");
    };
    router.get("/", handler);

    const routeProviders = container.getAll<IRouteProvider>(
      DependencyKeys.Routes
    );
    routeProviders.forEach((provider) => provider.configureRoutes(router));

    this.app = new AppBuilder()
      .withJsonContent()
      .withRoute("/", router)
      .build();

    LibraryCustomizations.init();
  }

  public static init(): express.Express {
    return new App().app;
  }
}
