import SSEClient from "./sse-client";

export interface SSEEvent {
  status: 'OK' | 'ERROR';
  payload: any;
}

export default class SSEManager {
  private clients: SSEClient[] = [];

  add(client: SSEClient) {
    this.clients.push(client);
  } 
  
  emit(message: SSEEvent) {
    const json = JSON.stringify(message)
    this.clients.forEach(client => client.emit(json));
  }
}

export const globalSSEManager = new SSEManager(); // Singleton