import { Entities, ItemDef, Category } from '@usedz/usedz-common';
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
    }
  },
  {
    timestamps: true
  }
);

export const ItemModel = model<Item>(Entities.ITEM.capitalizedName, ItemSchema);
