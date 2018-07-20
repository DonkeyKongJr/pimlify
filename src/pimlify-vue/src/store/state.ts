import { Order, Menu, AvailableItem, Restaurant } from './mutation-types';

export default class State {
  public orders: Order[] = [];
  public currentMenu?: Menu;
  public menus: Menu[] = [];
  public restaurants: Restaurant[] = [];
}
