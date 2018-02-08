# design-pattern-for-ts
design patterns typescript implementation

## run
```bash
yarn install
yarn start
```
## 单例模式 -- 创建型模式

> TODO

## 观察者模式(发布/订阅模式) -- 行为型模式

> TODO

## 中介者模式 -- 行为型模式

> 中介者模式(Mediator Pattern)：用一个中介对象（中介者）来封装一系列的对象交互，中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。中介者模式又称为调停者模式，它是一种对象行为型模式。

在以下情况下可以考虑使用中介者模式：
* 系统中对象之间存在复杂的引用关系，系统结构混乱且难以理解。
* 一个对象由于引用了其他很多对象并且直接和这些对象通信，导致难以复用该对象。
* 想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类。可以通过引入中介者类来实现，在中介者中定义对象交互的公共行为，如果需要改变行为则可以增加新的具体中介者类。

## 原型模式 -- 创建型模式

> 为通过克隆的方式基于一个现有对象的模板创建对象的模式

在原型模式结构图中包含如下几个角色：
* Prototype（抽象原型类）：它是声明克隆方法的接口，是所有具体原型类的公共父类，可以是抽象类也可以是接口，甚至还可以是具体实现类。
* ConcretePrototype（具体原型类）：它实现在抽象原型类中声明的克隆方法，在克隆方法中返回自己的一个克隆对象。
* Client（客户类）：让一个原型对象克隆自身从而创建一个新的对象，在客户类中只需要直接实例化或通过工厂方法等方式创建一个原型对象，再通过调用该对象的克隆方法即可得到多个相同的对象。由于客户类针对抽象原型类Prototype编程，因此用户可以根据需要选择具体原型类，系统具有较好的可扩展性，增加或更换具体原型类都很方便。

Typescript(javascript)原生支持prototype,所以原型模式实现非常简单
```typescript

interface Prototype {
  prototype?: any
}

function getNewInstance(prototype: Prototype, ...args: any[]): any {
  const proto = Object.create(prototype);
  const Kls = class {};
  Kls.prototype = proto;
  return new Kls(...args);
}
```