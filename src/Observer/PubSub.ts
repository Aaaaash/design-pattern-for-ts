interface Listener {
  name: string;
  callback: Function;
}

export default class PubSub {
  listeners: Listener[]

  constructor() {}

  public subscribe(name: string, callback: Function) {
    this.listeners.push({
      name,
      callback,
    });
  }

  public dispatch(name: string, ...args: any[]): boolean {
    const listener = this.listeners.find((v) => v.name === name);
    if (!listener) {
      return false;
    }
    return listener.callback(...args);
  }

  public unsubscribe(name: string): boolean {
    const listenerIndex = this.listeners.findIndex((v) => v.name === name);
    if (listenerIndex === -1) {
      return false;
    }
    this.listeners.splice(listenerIndex, 1);
    return true;
  }
}
