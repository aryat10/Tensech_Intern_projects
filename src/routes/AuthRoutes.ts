// routes/AuthRoutes.ts
import { inject, injectable } from "inversify";
import * as express from "express";
import { Request, Response, RequestHandler } from "express";
import { IRouteProvider } from "../interfaces/IRouteProvider";
import { IAuthService } from "../interfaces/IAuthService";
import { DependencyKeys } from "../container/DependencyKeys";
import { loginValidator } from "../validators/AuthValidator";


@injectable()
export class AuthRoutes implements IRouteProvider {
  private authService: IAuthService;

  constructor(@inject(DependencyKeys.AuthService) authService: IAuthService) {
    this.authService = authService;
  }

  configureRoutes(router: express.Router): void {
    router.post("/login", (async (req, res) => {
      const { error } = loginValidator.validate(req.body);
      if (error) return res.status(400).send(error.message);

      const { email, password } = req.body;
      const result = this.authService.login(email, password);
      res.send(result);
    }) as RequestHandler);

    router.post("/register", (req, res) => {
      const { email, password } = req.body;
      const result = this.authService.register(email, password);
      res.send(result);
    });
  }
}

