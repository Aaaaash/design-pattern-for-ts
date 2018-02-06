import { Singleton } from '../../src/main';

/**
 * don't do this
 * const instance = new Singleton();
 * */

const instance = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance === instance2); // true
