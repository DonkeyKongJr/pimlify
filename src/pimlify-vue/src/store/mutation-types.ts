export class Order {
  public title: string = "";
  public price: number = 0;
  public count: number = 0;
}

export class Menu {
  public constructor(
    public id: string,
    public availableItems: AvailableItem[] = []
  ) {}
  public description: string = "";
  public restaurant: string = "";
}

export class AvailableItem {
  public constructor(
    public title: string,
    public price: number
  ) {}

  public orderNr?: string;
  public ingredients?: string;
  public description?: string;
}

export class Restaurant {
  public id: string = "";
  public name: string = "";
  public location: string = "";
}
