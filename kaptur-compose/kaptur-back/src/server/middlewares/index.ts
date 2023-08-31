import { Application } from "express";
import uploadFileMiddleware from "./upload-file";

const middlewares = [
  uploadFileMiddleware
];

export default function injectMiddlewares(app: Application) {
  middlewares.forEach(middleware => middleware(app));
  return app;
}