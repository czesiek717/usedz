import { Entities, ItemDef, PageData, PageRequest } from '@usedz/usedz-common';
import create from 'zustand';
import { getPageOfEntities } from '../api/api';

export interface State {
  items: PageData<ItemDef>;
  fetchItems: (pageRequest: PageRequest) => Promise<PageData<ItemDef>>;
  fetchData: <T>(entityName: string, pageRequest: PageRequest) => Promise<PageData<T>>;
}

export const [useStore] = create<State>((set, get) => ({
  items: { data: [], totalCount: 0 },
  fetchItems: async (pageRequest: PageRequest) => {
    const items = await getPageOfEntities<ItemDef>(Entities.ITEM.pluralName, pageRequest);
    set({ items });
    return items;
  },
  fetchData: async <T>(entityName: string, pageRequest: PageRequest) => {
    return await getPageOfEntities<T>(entityName, pageRequest);
  }
}));
