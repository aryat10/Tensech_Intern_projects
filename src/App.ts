import express from "express";
import { RequestHandler } from "express";
import { ContainerFactory } from "../src/container/ContainerFactory";
import { DependencyKeys } from "../src/container/DependencyKeys";
import { IRouteProvider } from "../src/interfaces/IRouteProvider";

export class App {
  private app: express.Express;

  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.configureRoutes();
  }

  private configureMiddleware() {
    this.app.use(express.json());
  }

  private configureRoutes() {
    const router = express.Router();

    router.get("/", ((req, res) => {
      res.send("API Started");
    }) as RequestHandler);

    const container = ContainerFactory.getContainer();
    const routeProviders = container.getAll<IRouteProvider>(DependencyKeys.Routes);

    for (const provider of routeProviders) {
      provider.configureRoutes(router);
    }

    this.app.use("/api", router);
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  }
}
