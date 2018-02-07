import { Observable, Observer } from '../../src/Observer';

// 实现具体目标类
class ControlSubject extends Observable {

  constructor() {
    super();
  }

  notifyObserver(msg: string) {
    const arr = this.observers.observers;
    arr.forEach((element: any) => {
      if (element.name !== msg) {
        element.sayHello();
      }
    });
  }
}

// 实现具体观察者类
class ConcreteObserver extends Observer {
  obname: string;
  element: HTMLElement;
  constructor(name: string, dom: HTMLElement) {
    super();
    this.element = dom;
    this.obname = name;
  }

  set name(name: string) {
    this.obname = name;
  }

  get name() {
    return this.obname;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.obname}, i'm come in!`);
  }

  beClicked(observable: ControlSubject) {
    console.log(`${this.obname} has be clicked!`);
    observable.notifyObserver(this.obname);
  }
}

class Main {
  constructor() {}

  public main() {
    const controlMain = new ControlSubject();
    const btn1 = new ConcreteObserver('btn1', (document.querySelector('#btn1') as HTMLElement));
    const btn2 = new ConcreteObserver('btn2', (document.querySelector('#btn2') as HTMLElement));
    const btn3 = new ConcreteObserver('btn3', (document.querySelector('#btn3') as HTMLElement));
    const btn4 = new ConcreteObserver('btn4', (document.querySelector('#btn4') as HTMLElement));
    controlMain.add(btn1);
    controlMain.add(btn2);
    controlMain.add(btn3);
    controlMain.add(btn4);
    btn1.element.addEventListener('click', () => {
      btn1.beClicked(controlMain);
    });
    btn2.element.addEventListener('click', () => {
      btn2.beClicked(controlMain);
    });
    btn3.element.addEventListener('click', () => {
      btn3.beClicked(controlMain);
    });
    btn4.element.addEventListener('click', () => {
      btn4.beClicked(controlMain);
    });
  }
}

const app = new Main();
app.main();
