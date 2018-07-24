import { Order, AvailableItem, Restaurant, User } from './mutation-types';

export default class State {
    public orders: Order[] = [];
    public restaurants: Restaurant[] = [];
    public userInfo: User | undefined = undefined;
}
