import {
  Order,
  OrderMenu,
  AvailableOrder,
  Restaurant,
  User
} from './mutation-types';

export default class State {
  public orders: Order[] = [];
  public currentOrderMenu: OrderMenu | undefined = undefined;
  public orderMenus: OrderMenu[] = [];
  public restaurants: Restaurant[] = [];
  public userInfo: User | undefined = undefined;
}
