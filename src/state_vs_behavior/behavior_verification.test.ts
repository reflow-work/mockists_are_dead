import { expect, test, spyOn } from 'bun:test';
import MyModel from './myModel';
import MyDependency from './myDependency';

test('behavior verification)', () => {
  const dependency = new MyDependency();

  const spy = spyOn(dependency, 'increaseCount');

  const myModel = new MyModel(dependency);

  myModel.tick();
  myModel.tick();

  expect(spy).toHaveBeenCalledTimes(2);
});
