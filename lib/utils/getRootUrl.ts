import { NextIncomingMessage } from "next/dist/server/request-meta";

/**
 * Get root URL
 * @param {IncomingMessage} req - request object
 * @returns {string} string - returns root URL
 */
export default function getRootUrl(req: NextIncomingMessage) {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers["host"];
  return `${protocol}://${host}`;
}
