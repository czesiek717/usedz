export interface PageRequest {
  pageNumber: number;
  pageSize: number;
}

export interface PageData<T> {
  data: T[];
  hasMore: boolean;
}

export interface ItemDef {
  readonly _id: string;
  name: string;
  description: string;
  image: string;
  category: Category;
  owner: string;
  price: number;
  negotiable?: boolean;
  localization: string;
}

export enum Category {
  CLOTHES = 'Clothes',
  AGD = 'AGD',
  RTV = 'RTV'
}

export const itemPluralName = 'items';
