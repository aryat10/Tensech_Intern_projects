import * as express from "express";
export interface IRouteProvider {
  configureRoutes(router: express.Router): void;
}   

// This file will basically help us to force all the routes to implement method configureRoutes
// This class will handle the routes 