export class AvailableItem {
  public orderNr?: string;
  public ingredients?: string;
  public description?: string;
  public id: string = '';
  public constructor(public title: string, public price: number) {}
}
