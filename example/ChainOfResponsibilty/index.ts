import { Handler } from '../../src/ChainOfResponsibilty';

class Request {
  private expectValue: number;
  private name: string;

  constructor(expectValue: number, name: string) {
    this.expectValue = expectValue;
    this.name = name;
  }

  public getExpectValue(): number {
    return this.expectValue;
  }

  public getName(): string {
    return this.name;
  }
}

/**
 * 创建职责链
 */

class Leader extends Handler {
  private max: number = 1000;
  constructor(name: string) {
    super(name);
  }

  public handleRequest(request: Request): void {
    console.log(`组长 ${this.name}收到${request.getName()}调薪请求`);
    if (request.getExpectValue() < this.max) {
      console.log('组长审批通过!');
    } else {
      console.log(`组长 ${this.name}无权限审批, 转发至上级${this.successor.name}处理!`);
      this.successor.handleRequest(request);
    }
  }
}

class Supervisor extends Handler {
  private max: number = 5000;
  constructor(name: string) {
    super(name);
  }

  public handleRequest(request: Request): void {
    console.log(`部门主管 ${this.name}收到${request.getName()}调薪请求`);
    if (request.getExpectValue() < this.max) {
      console.log('部门主管审批通过!');
    } else {
      console.log(`部门主管 ${this.name}无权限审批, 转发至上级${this.successor.name}处理!`);
      this.successor.handleRequest(request);
    }
  }
}


class CEO extends Handler {
  private max: number = 10000;
  constructor(name: string) {
    super(name);
  }

  public handleRequest(request: Request): void {
    console.log(`总裁 ${this.name}收到${request.getName()}调薪请求`);
    if (request.getExpectValue() < this.max) {
      console.log('总裁审批通过!');
    } else {
      console.log(`总裁 ${this.name}不予审批!`);
    }
  }
}


class Client {
  public main(): void{
    const leader = new Leader('czc');
    const supervisor = new Supervisor('lzk');
    const ceo = new CEO('ck');
    
    leader.setSuccessor(supervisor);
    supervisor.setSuccessor(ceo);

    const request1 = new Request(2000, 'zzl');
    leader.handleRequest(request1);
    const request2 = new Request(8000, 'zzl');
    leader.handleRequest(request2);
    const request3 = new Request(20000, 'zzl');
    leader.handleRequest(request3);
  }
}

export default new Client();
