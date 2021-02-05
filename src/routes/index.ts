import * as express from "express";
import { versions } from "process";
import {v1Routes} from "./v1";
import {v2Routes} from "./v2";
let v1RouteInstance = v1Routes.getInstance();
let v2RouteInstance = v2Routes.getInstance();

export const apiRoutes = (app: express.Application) =>{
    
    app.use('/api/v1', v1RouteInstance.router);
    app.use('/api/v2', v2RouteInstance.router);
};