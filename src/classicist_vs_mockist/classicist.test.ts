import { test, expect, beforeEach } from 'bun:test';
import { Warehouse } from './warehouse';
import { Order } from './order';

let warehouse: Warehouse;

beforeEach(() => {
  warehouse = new Warehouse();
  warehouse.add('Talisker', 50);
  warehouse.add('Lagavulin', 25);
});

test('Order is filled if inventory is available', () => {
  const order = new Order('Talisker', 50);

  order.fill(warehouse);

  expect(order.isFilled()).toBe(true);
  expect(warehouse.getInventory('Talisker')).toBe(0);
});

test('Order is not filled if inventory is unavailable', () => {
  const order = new Order('Talisker', 51);

  order.fill(warehouse);

  expect(order.isFilled()).toBe(false);
  expect(warehouse.getInventory('Talisker')).toBe(50);
});
