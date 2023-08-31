import { Application } from 'express';
import SSEClient from '../utils/sse-client';
import SSEManager from '../utils/sse-manager';

export default function createEventStreamMiddleware(manager: SSEManager) {
  return function eventStreamMiddleware(app: Application) {
    app.get('/event-stream', (req, res) => {
      const client = new SSEClient(res);
      manager.add(client);
      client.emit(JSON.stringify({
        status: 'OK',
        payload: 'Welcome'
      }))
    })
  }
}