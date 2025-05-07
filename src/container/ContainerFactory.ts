// container/ContainerFactory.ts
import { Container } from "inversify";
import { IRouteProvider } from "../interfaces/IRouteProvider";
import { IAuthService } from "../interfaces/IAuthService";
import { AuthRoutes } from "../routes/AuthRoutes";
import { AuthService } from "../implementation/AuthService";
import { DependencyKeys } from "./DependencyKeys";

export class ContainerFactory {
  static getContainer(): Container {
    const container = new Container();
    container.bind<IRouteProvider>(DependencyKeys.Routes).to(AuthRoutes);
    container.bind<IAuthService>(DependencyKeys.AuthService).to(AuthService);
    return container;
  }
}
