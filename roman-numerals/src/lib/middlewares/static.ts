import express, { Application } from 'express';
import path from 'node:path'

const staticFolderPath = path.join(__dirname, '..', '..', 'static');
const buildFolderPath = path.join(__dirname, '..', '..', '..', 'client-build');

export default function staticMiddleware(app: Application) {
  app.use(express.static(staticFolderPath))
  app.use(express.static(buildFolderPath))
}