import { Container } from "inversify";
import { IRouteProvider } from "../routes/IRouteProvider";
import { AuthRoutes } from "../routes/AuthRoutes";
import { DependencyKeys } from "./DependencyKeys";

export class ContainerFactory {
  static getContainer(): Container {
    const container = new Container();
    container.bind<IRouteProvider>(DependencyKeys.Routes).to(AuthRoutes);     // Here the Bind function is used to tell the container when there is a request made for Route key 
    return container;
  }
}
