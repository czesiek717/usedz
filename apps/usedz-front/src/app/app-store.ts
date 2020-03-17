import { ItemDef, PageRequest, PageData, itemPluralName } from '@usedz/usedz-common';
import create from 'zustand';
import { getPageOfEntities } from '../api/api';

export interface State {
  items: PageData<ItemDef>;
  fetchItems: (pageRequest: PageRequest) => Promise<PageData<ItemDef>>;
  fetchData: <T>(entityName: string, pageRequest: PageRequest) => Promise<PageData<T>>;
}

export const [useStore] = create<State>((set, get) => ({
  items: { data: [], hasMore: true },
  fetchItems: async (pageRequest: PageRequest) => {
    const { data: items, hasMore } = await getPageOfEntities<ItemDef>(itemPluralName, pageRequest);
    const { data: oldItems } = get().items;
    const mergedItems = { data: [...oldItems, ...items], hasMore };
    set({ items: mergedItems });
    return mergedItems;
  },
  fetchData: async <T>(entityName: string, pageRequest: PageRequest) => {
    return await getPageOfEntities<T>(entityName, pageRequest);
  }
}));
