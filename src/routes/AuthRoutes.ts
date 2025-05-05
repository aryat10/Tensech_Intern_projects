import * as express from "express";
import { IRouteProvider } from "./IRouteProvider";
import { injectable } from "inversify";

@injectable()       // This is used to inject services 

export class AuthRoutes implements IRouteProvider {
  configureRoutes(router: express.Router): void {
    router.post("/login", (req, res) => {
      res.send("Login is successful 🎊");
    });                             // This will bind routes path to interna methods 

    router.post("/register", (req, res) => {
      res.send("Registration is Successful 🎉");
    });
  }
}
