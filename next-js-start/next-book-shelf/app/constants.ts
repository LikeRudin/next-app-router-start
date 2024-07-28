export const CATEGORIES_URL = "https://books-api.nomadcoders.workers.dev/lists";
export const ONE_CATEGORY_BOOKS_URL = (id: string) =>
  `https://books-api.nomadcoders.workers.dev/list?name=${id}`;
