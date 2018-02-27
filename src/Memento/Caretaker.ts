import Memento from "./Memento";

class Caretaker {
  private memento: Memento;

  public getMemento(): Memento {
    return this.memento;
  }

  public setMemento(memento: Memento) {
    this.memento = memento;
  }
}

export default Caretaker;
