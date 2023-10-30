export default class MyDependency {
  private count = 0;

  increaseCount() {
    this.count++;
  }
  getCount(): number {
    return this.count;
  }
}
