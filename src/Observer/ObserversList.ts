import { Observer } from './index';

export default class ObserversList {
  observers: Observer[];

  constructor() {
    this.observers = [];
  }

  public add = (obj: Observer) => this.observers.push(obj);

  public count = (): number => this.observers.length;

  public get = (index: number) => {
    if (index > -1 && index < this.observers.length) {
      return this.observers[index];
    }
    return new Observer();
  }

  public indexOf = (obj: Observer, startIndex: number) => {
    let i = startIndex;
    while(i < this.observers.length) {
      if (this.observers[i] === obj) {
        return i;
      }
      i += 1;
    }
    return -1;
  }

  public removeAt = (index: number) => this.observers.splice(index, 1);

}