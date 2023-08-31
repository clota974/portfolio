type Callback = (romanNumeral: string) => void;

export default class Stream {
  private source: EventSource;
  private callbacks: Callback[]= [];

  constructor() {
    this.source = new EventSource('/event-stream');
    this.source.addEventListener('open', () => this.onOpen());
    this.source.addEventListener('error', () => this.onError());
    this.source.addEventListener('message', (ev) => this.onMessage(ev));
  }

  private onOpen() {
    this.emit('Event source is connected');
  }

  private onError() {
    if (this.source.readyState === EventSource.CLOSED) {
      this.emit('Stream has been closed. Please reload!');
    }
    if (this.source.readyState === EventSource.CONNECTING) {
      this.emit('Trying to connect to source...');
    }
  }

  private onMessage(ev: MessageEvent) {
    const message = JSON.parse(ev.data);
    this.emit(`Received ${message.status} message  : ${message.payload}`);
  }

  pipe(cb: Callback) {
    this.callbacks.push(cb);
  }

  emit(message: string) {
    this.callbacks.forEach(cb => cb(message));
  }
}