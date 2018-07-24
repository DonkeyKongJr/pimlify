import { Order, AvailableItem, Restaurant } from './mutation-types';

export default class State {
  public orders: Order[] = [];
  public restaurants: Restaurant[] = [];
}
