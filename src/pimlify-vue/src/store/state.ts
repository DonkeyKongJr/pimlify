import { Order, OrderMenu, AvailableOrder } from "./mutation-types";

export default class State {
  public orders: Order[] = [];
  public currentOrderMenu: OrderMenu | undefined = undefined;
  public orderMenus: OrderMenu[] = [];
}
