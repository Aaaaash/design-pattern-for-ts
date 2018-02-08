import Colleague from './Colleague';

abstract class Mediator {
  abstract contact(message: string, person: Colleague): void
}


export default Mediator;
