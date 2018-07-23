import { Order, Menu, AvailableItem, Restaurant } from './mutation-types';

export default class State {
  public orders: Order[] = [];
  public currentRestaurant?: Restaurant;
  public restaurants: Restaurant[] = [];
}
