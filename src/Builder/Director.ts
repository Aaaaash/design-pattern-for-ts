import Builder from './Builder';
import Product from './Product';

class Director {
  private builder: Builder;

  public Director(builder: Builder) {
    this.builder = builder;
  }

  public setBuilder(builder: Builder) {
    this.builder = builder;
  }

  public construct(): Product {
    this.builder.buildPartA();
    this.builder.buildPartB();
    this.builder.buildPartC();
    return this.builder.getResult();
  }
}

export default Director;
