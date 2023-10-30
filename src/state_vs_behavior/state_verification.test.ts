import { expect, test } from 'bun:test';
import MyModel from './myModel';
import MyDependency from './myDependency';

test('state verification)', () => {
  const dependency = new MyDependency();
  const myModel = new MyModel(dependency);

  myModel.tick();

  expect(dependency.getCount()).toBe(1);

  myModel.tick();

  expect(dependency.getCount()).toBe(2);
});
