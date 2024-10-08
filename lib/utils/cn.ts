import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with twin.macro classes
 * @param {ClassValue[]} inputs - Tailwind CSS and twin.macro classes
 * @returns {string} string - returns a string of merged classes
 */
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
