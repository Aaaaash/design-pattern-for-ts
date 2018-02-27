import Originator from './Originator';

class Memento {
  state: string;
  constructor(originator: Originator) {
    this.state = originator.getState();
  }

  public setState(state: string): void {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }
}

export default Memento;
