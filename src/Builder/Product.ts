class Product {
  private _partA: string;
  private _partB: string;
  private _partC: string;
  get partA(): string {
    return this._partA;
  }
  set partA(type: string) {
    this._partA = type;
  }
  /** 省略get/set */
}

export default Product;
