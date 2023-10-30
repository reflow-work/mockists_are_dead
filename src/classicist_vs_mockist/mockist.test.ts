import { test, expect, beforeEach, jest, spyOn } from 'bun:test';
import { Order } from './order';

beforeEach(() => {
  jest.restoreAllMocks();
});

test('Order is filled if inventory is available', () => {
  const warehouseMock = {
    add: jest.fn(),
    remove: jest.fn(() => true),
    hasInventory: jest.fn(),
    getInventory: jest.fn(),
  } as any;

  const spy = spyOn(warehouseMock, 'remove');

  const order = new Order('Talisker', 50);
  order.fill(warehouseMock);

  expect(order.isFilled()).toBe(true);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy.mock.calls).toEqual([['Talisker', 50]]);
});

test('Order is not filled if inventory is unavailable', () => {
  const warehouseMock = {
    add: jest.fn(),
    remove: jest.fn(() => false),
    hasInventory: jest.fn(),
    getInventory: jest.fn(),
  } as any;

  const spy = spyOn(warehouseMock, 'remove');

  const order = new Order('Talisker', 51);
  order.fill(warehouseMock);

  expect(order.isFilled()).toBe(false);
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy.mock.calls).toEqual([['Talisker', 51]]);
});
