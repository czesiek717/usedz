export interface PageRequest {
  pageNumber: number;
  pageSize: number;
}

export interface PageData<T> {
  data: T[];
  totalCount: number;
}

export class EntityProperties {
  constructor(public name: string, public pluralName: string) {}

  get capitalizedName() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }
  get capitalizedPluralName() {
    return this.pluralName.charAt(0).toUpperCase() + this.pluralName.slice(1);
  }
}

export class Entities {
  static readonly ITEM = new EntityProperties('item', 'items');

  private constructor(/* private readonly key: string, public readonly value: any */) {}

  // toString() {
  //   return this.key;
  // }
}

export interface ItemDef {
  readonly _id: string;
  name: string;
  description: string;
  image: string;
  // owner: UserDef;
  category: Category;
}

export enum Category {
  CLOTHES = 'clothes',
  AGD = 'agd',
  RTV = 'rtv'
}
