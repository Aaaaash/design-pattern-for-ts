import Product from './Product';

abstract class Builder {
  protected product = new Product();
  public abstract buildPartA(): void;
  public abstract buildPartB(): void;
  public abstract buildPartC(): void;

  public getResult(): Product {
    return this.product;
  }
}

export default Builder;
