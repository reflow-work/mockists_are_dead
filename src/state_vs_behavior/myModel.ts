import MyDependency from './myDependency';

export default class MyModel {
  constructor(private dependency: MyDependency) {}

  tick() {
    this.dependency.increaseCount();
  }
}
