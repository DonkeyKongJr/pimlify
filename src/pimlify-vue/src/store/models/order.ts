import { AutoId } from '../../auto-id';

export class Order {
  public title: string = '';
  public price: number = 0;
  public id: string;

  public constructor() {
    this.id = AutoId.newId();
  }
}
