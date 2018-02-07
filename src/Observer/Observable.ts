import { ObserversList } from './ObserversList';
/**
 * Subject类
 */

class Observable {
  
  constructor() {
    this.observers = new ObserversList();
  }
  
  observers: ObserversList;

  add (obj: any) {
    this.observers.add(obj);
  };

  indexOf (obj: any, startIndex: number) {
    let i = startIndex;
    while(i < this.observers.count()) {
      if (this.observers[i] === obj) {
        return i;
      }
      i += 1;
    }
    return -1;
  }

  public remove (observer: any): void {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  };

  public notify (context: any) {
    const observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i += 1) {
      this.observers[i].update(context);
    }
  }
}

export default Observable;
