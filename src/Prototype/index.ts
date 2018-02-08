interface Prototype {
  prototype?: any
}

function getNewInstance(prototype: Prototype, ...args: any[]): any {
  const proto = Object.create(prototype);
  const Kls = class {};
  Kls.prototype = proto;
  return new Kls(...args);
}
