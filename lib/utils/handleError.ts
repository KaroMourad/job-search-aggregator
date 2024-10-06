/**
 * Handle error to ensure returning an Error object
 * @param {unknown} error - catched error with unknown type
 * @returns {Error} Error - returns an Error object
 */
export function handleError(error: unknown): Error {
  if (error instanceof Error) {
    return error;
  }
  if (typeof error === "string") {
    return new Error(error);
  }
  return new Error("An error occurred");
}
