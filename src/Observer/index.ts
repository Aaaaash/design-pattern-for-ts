import ObserversList from './ObserversList';

/**
 * Subject 目标 被观察对象
 * ConcreteSubject 具体目标 是目标类的子类
 * Observer 观察者
 * ConcreteObserver 具体观察者 是观察者类的子类
 */


 /**
  * Observer类
  */
class Observer {
  update(data: any): void {};
}


/**
 * Subject类
 */

class Subject {
  observers: ObserversList;

  constructor() {
    this.observers = new ObserversList();  
  }

  public addObserver = (observer: Observer) => this.observers.add(observer);

  public removeObserver = (observer: Observer) => this.observers.removeAt(this.observers.indexOf(observer, 0));

  public notify = (context: any) => {
    const observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i += 1) {
      this.observers.get(i).update(context);
    }
  }
}

export {
  Observer,
  Subject,
};
