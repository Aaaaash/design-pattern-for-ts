import Memento from './Memento';

class Originator {
  private state: string;

  constructor() {}

  public createMemento(): Memento {
    return new Memento(this);
  }

  public restoreMemento(memento: Memento): void {
    this.state = memento.state;
  }

  public setState(state: string): void {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }
}

export default Originator;
