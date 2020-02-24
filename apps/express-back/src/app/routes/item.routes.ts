import { PageRequest, ItemDef, resolvePageNumber } from '@usedz/usedz-common';
import { Router } from 'express';
import { ItemModel } from '../models/item.model';

export const ItemRouter = Router();

ItemRouter.post('/', async (req, res, next) => {
  ItemModel.create(req.body, (err, item: ItemDef) => {
    if (err) return next(err);
    res.json(item);
  });
});

ItemRouter.put('/:id', async (req, res, next) => {
  ItemModel.updateOne({ _id: req.params.id }, req.body, (err, item: ItemDef) => {
    if (err) return next(err);
    res.json(item);
  });
});

ItemRouter.post('/find', async (req, res, next) => {
  const pageRequest: PageRequest = req.body;
  // const totalCount = await ItemModel.countDocuments({}).exec();
  ItemModel.find()
    .limit(pageRequest.pageSize)
    .skip(resolvePageNumber(pageRequest.pageNumber) * pageRequest.pageSize)
    .exec((err, items: ItemDef[]) => {
      if (err) return next(err);
      res.json({ data: [...items], hasMore: items?.length > 0 });
    });
});

ItemRouter.delete('/:id', async (req, res, next) => {
  ItemModel.deleteOne({ _id: req.params.id }, err => {
    if (err) return next(err);
    res.json(JSON.stringify({ response: 'OK' }));
  });
});
