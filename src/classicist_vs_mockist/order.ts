import { Warehouse } from './warehouse';
import { Mailer } from './mailer';

export class Order {
  private mailer: any;

  constructor(
    private item: string,
    private quantity: number,
    private status: string = 'pending'
  ) {}

  fill(warehouse: Warehouse) {
    const removed = warehouse.remove(this.item, this.quantity);

    if (removed) {
      this.status = 'filled';

      if (this.mailer) {
        this.mailer.send(
          `Your order has been filled: ${this.quantity} ${this.item}`
        );
      }
    }
  }

  isFilled() {
    return this.status === 'filled';
  }

  setMailer(mailer: Mailer) {
    this.mailer = mailer;
  }
}
