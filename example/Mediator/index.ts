import { Mediator, Colleague } from '../../src/Mediator';

// 具体同事类
class ConcreteColleague extends Colleague {
  public constructor(mediator: Mediator, name: string) {
    super(mediator, name);
  }

  public getMessage(message: string): void {
    console.log(`我是租客,我收到了消息:${message}`);
  }

  public contact(message: string): void {
    console.log(`租客发送了消息:${message}`);
    this.mediator.contact(message, this);
  }
}

class OtherColleague extends Colleague {
  public constructor(mediator: Mediator, name: string) {
    super(mediator, name);
  }

  public getMessage(message: string): void {
    console.log(`我是房东,我收到了消息:${message}`);
  }

  public contact(message: string): void {
    console.log(`我是房东,我发送了消息:${message}`);
    this.mediator.contact(message, this);
  }
}

class ConcreteMediator extends Mediator {
  private concreteColleague: ConcreteColleague;
  private otherColleague: OtherColleague;

  public setConcrete(concreteColleague: ConcreteColleague) {
    this.concreteColleague = concreteColleague;
  }

  public setOther(otherColleague: OtherColleague) {
    this.otherColleague = otherColleague;
  }

  public contact(message: string, person: Colleague): void {
    console.log('中介者传递消息');
    if (person === this.concreteColleague) {
      this.otherColleague.getMessage(message);
    } else {
      this.concreteColleague.getMessage(message);
    }
  }
}

class Client {
  public main(): void {
    const mediator = new ConcreteMediator();
    const concreteColleague = new ConcreteColleague(mediator, '租客');
    const otherColleague = new OtherColleague(mediator, '房东');
    mediator.setConcrete(concreteColleague);
    mediator.setOther(otherColleague);

    concreteColleague.contact('找房子!');
    otherColleague.contact('我有!');
  }
}

export default new Client();
