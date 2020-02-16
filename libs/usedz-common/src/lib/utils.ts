export const resolvePageNumber = (pageNumber: number) => {
  return pageNumber > 0 ? pageNumber - 1 : pageNumber;
};
