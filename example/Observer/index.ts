import { Observable } from '../../src/Observer';

// 实现具体目标类
class ControlSubject extends Observable {
  observable: HTMLElement;

  constructor(domElement: HTMLElement) {
    super();
    this.observable = domElement;
  }

  getSome() {
    console.log('?');
  }
}

// 实现具体观察者类
// class ConcreteObserver extends Observer {

// }

class Main {
  constructor() {}

  public main() {
    const divSubject = new ControlSubject(
      (document.querySelector('.card') as HTMLElement)
    );
    console.log(divSubject);
  }
}

const app = new Main();
app.main();
