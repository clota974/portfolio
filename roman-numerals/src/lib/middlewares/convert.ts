import { Application } from 'express';
import numberToRoman from '../utils/number-to-roman';
import SSEManager from '../utils/sse-manager';

export default function createConvertMiddleware(manager: SSEManager) {
  return function convertMiddleware(app: Application) {
    app.post('/convert', (req, res) => {
      try {
        const romanNumeral = numberToRoman(req.body.value);
        res.sendStatus(200);

        manager.emit({
          status: 'OK',
          payload: romanNumeral
        })
      } catch (err) {
        const message = err instanceof Error ? err.message : err;
        res.sendStatus(400);

        manager.emit({
          status: 'ERROR',
          payload: message
        })
      }
    });
  }
}