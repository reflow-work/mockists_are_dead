import { beforeEach, describe, expect, jest, test } from 'bun:test';
import { Warehouse } from './warehouse';
import { Order } from './order';
import { Mailer } from './mailer';

class MailerStub implements Mailer {
  private messages: string[] = [];

  send(message: string) {
    this.messages.push(message);
  }

  sentCount() {
    return this.messages.length;
  }
}

const warehouse = new Warehouse();

beforeEach(() => {
  warehouse.add('Talisker', 50);
  warehouse.add('Lagavulin', 25);
});

describe('Send a message if inventory is avilable', () => {
  test('stub (state)', () => {
    const mailerStub = new MailerStub();
    const order = new Order('Talisker', 50);
    order.setMailer(mailerStub);

    order.fill(warehouse);

    expect(mailerStub.sentCount()).toBe(1);
  });

  test('mock (behavior)', () => {
    const mailerMock = {
      send: jest.fn(),
    } as any;
    const order = new Order('Talisker', 50);
    order.setMailer(mailerMock);

    order.fill(warehouse);

    expect(mailerMock.send).toHaveBeenCalledTimes(1);
  });
});
