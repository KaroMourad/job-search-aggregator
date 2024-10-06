import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { IncomingMessage } from "http";

/**
 * Merge Tailwind CSS classes with twin.macro classes
 * @param {ClassValue[]} inputs - Tailwind CSS and twin.macro classes
 * @returns {string} string - returns a string of merged classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

/**
 * Get root URL
 * @param {IncomingMessage} req - request object
 * @returns {string} string - returns root URL
 */
export function getRootUrl(req: IncomingMessage) {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["host"];
  return `${protocol}://${host}`;
}
