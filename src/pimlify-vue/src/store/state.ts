import { Order, Restaurant, User } from './models';

export default class State {
  public orders: Order[] = [];
  public restaurants: Restaurant[] = [];
  public userInfo: User | undefined = undefined;
}
