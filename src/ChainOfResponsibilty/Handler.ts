abstract class Handler {
  protected successor: Handler;
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public setSuccessor(successor: Handler): void {
    this.successor = successor;
  }

  public abstract handleRequest(request: any): void;
}

export default Handler;
