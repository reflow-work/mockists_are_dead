export class Warehouse {
  private items: { [key: string]: number } = {};

  add(item: string, quantity: number) {
    this.items[item] = quantity;
  }

  remove(item: string, quantity: number) {
    if (!this.hasInventory(item, quantity)) {
      return false;
    }

    this.items[item] -= quantity;
    return true;
  }

  private hasInventory(item: string, quantity: number) {
    return this.items[item] >= quantity;
  }

  getInventory(item: string) {
    return this.items[item];
  }
}
