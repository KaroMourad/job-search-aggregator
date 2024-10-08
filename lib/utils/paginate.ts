export interface PaginatedResult<T> {
  data: T[];
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
}

/**
 * Paginate an array of items
 * @param items The array of items to paginate
 * @param currentPage aThe current page number
 * @param pageSize  The number of items per page
 * @returns The paginated result
 */
export default function paginate<T>(
  items: T[],
  currentPage: number = 1,
  pageSize: number = 10
): PaginatedResult<T> {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const offset = (currentPage - 1) * pageSize;
  const paginatedItems = items.slice(offset, offset + pageSize);

  return {
    data: paginatedItems,
    totalItems,
    currentPage,
    pageSize,
    totalPages,
  };
}
