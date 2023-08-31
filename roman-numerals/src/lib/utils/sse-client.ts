import { Response } from "express";

export default class SSEClient {
  private context: Response;
  
  constructor(res: Response) {
    this.context = res;
    SSEClient.writeHeaders(res);
  }

  static writeHeaders(context: Response) {
    context.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache',
    })
  }

  writeLine(key: string, data: string) {
    this.context.write(`${key}: ${data}\n`);
  }

  emit(message: string) {
    this.writeLine('id', Date.now().toString());
    this.writeLine('event', 'message');
    this.writeLine('data', message);
    this.context.write('\n')
  }
}