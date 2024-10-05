import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { IncomingMessage } from 'http';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleError(error: unknown): Error {
  if (error instanceof Error) {
    return error;
  }
  if (typeof error === "string") {
    return new Error(error);
  }
  return new Error("An error occurred");
}


export function getRootUrl(req: IncomingMessage) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['host'];
  return `${protocol}://${host}`;
}