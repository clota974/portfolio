import { Application } from "express";
import createConvertMiddleware from "./convert";
import createEventStreamMiddleware from "./event-stream";
import staticMiddleware from "./static";
import { globalSSEManager } from "../utils/sse-manager";

const middlewares = [
  createConvertMiddleware(globalSSEManager),
  createEventStreamMiddleware(globalSSEManager),
  staticMiddleware];

export default function chainMiddlewares(app: Application) {
  middlewares.forEach(middleware => middleware(app));
}