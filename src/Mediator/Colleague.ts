import Mediator from './Mediator';

abstract class Colleague {
  protected name: string;
  protected mediator: Mediator;

  public constructor(mediator: Mediator, name: string) {
    this.mediator = mediator;
    this.name = name;
  }

  abstract getMessage(message: string): void

  abstract contact(message: string): void
}

export default Colleague;
