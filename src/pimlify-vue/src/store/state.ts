<<<<<<< HEAD
import {
  Order,
  OrderMenu,
  AvailableOrder,
  Restaurant,
  User
} from './mutation-types';
=======
import { Order, AvailableItem, Restaurant } from './mutation-types';
>>>>>>> master

export default class State {
  public orders: Order[] = [];
  public restaurants: Restaurant[] = [];
  public userInfo: User | undefined = undefined;
}
