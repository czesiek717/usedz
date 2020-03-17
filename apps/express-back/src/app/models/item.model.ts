import { ItemDef, Category, itemPluralName } from '@usedz/usedz-common';
import { Document, model, Schema } from 'mongoose';

export interface Item extends ItemDef, Document {
  readonly _id: string;
}

const ItemSchema = new Schema<Item>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: {
      type: String,
      enum: Object.keys(Category),
      required: true,
      get: (value: keyof typeof Category) => Category[value] /* , set: (value: AttackType) =>  */
    },
    owner: { type: String, required: true },
    price: { type: Number, required: true },
    negotiable: { type: Boolean, required: false },
    localization: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

export const ItemModel = model<Item>(itemPluralName, ItemSchema);
