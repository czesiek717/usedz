import { PageRequest, PageData, itemPluralName, ItemDef } from '@usedz/usedz-common';
import { API_BASE_URL } from '../utils/consts';

const request = async (url: string, options: RequestInit) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  //   if (localStorage.getItem(ACCESS_TOKEN)) {
  //     headers.append(
  //       'Authorization',
  //       'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
  //     );
  //   }

  options = { headers: headers, ...options };

  const response = await fetch(url, options);
  const json = await response.json();
  if (!response.ok) {
    return Promise.reject(json);
  }
  return json;
};

export const getPageOfEntities = async <T>(
  entityPluralName: string,
  pageRequest: PageRequest
): Promise<PageData<T>> => {
  return await request(API_BASE_URL + `/usedz/${entityPluralName}/find`, {
    method: 'POST',
    body: JSON.stringify(pageRequest)
  });
};

export const createItem = async (item: ItemDef): Promise<ItemDef> => {
  return await request(API_BASE_URL + `/usedz/${itemPluralName}/`, {
    method: 'POST',
    body: JSON.stringify(item)
  });
};
