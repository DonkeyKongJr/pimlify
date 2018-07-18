export class Order {
  public title: string = "";
  public price: number = 0;
  public count: number = 0;
}

export class OrderMenu {
  public constructor(
    public id: number,
    public title: string,
    public availableOrders: AvailableOrder[],
  ) {}
  public description: string = "";
}

export class AvailableOrder {
  public constructor(
    public orderNr: string,
    public title: string,
    public price: number
  ) {}

  public ingredients: string = "";
}
