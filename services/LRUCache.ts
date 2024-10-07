import { createHash } from "crypto";

/**
 * CacheItem interface representing a cached item.
 *
 * @template T - The type of the value stored in the cache.
 */
interface CacheItem<T> {
  value: T;
}

/**
 * Node class for the doubly linked list.
 *
 * @template T - The type of the value stored in the node.
 */
class Node<T> {
  key: string;
  item: CacheItem<T>;
  prev: Node<T> | null = null;
  next: Node<T> | null = null;

  constructor(key: string, item: CacheItem<T>) {
    this.key = key;
    this.item = item;
  }
}

/**
 * LRUCache class implementing a Least Recently Used cache.
 *
 * @template T - The type of values to be cached.
 */
class LRUCache<T> {
  private cache: Record<string, Node<T>>; // Cache storage
  private head: Node<T> | null = null; // Most recently used node
  private tail: Node<T> | null = null; // Least recently used node
  private capacity: number; // Maximum number of items in the cache

  /**
   * Creates an instance of the LRUCache.
   *
   * @param {number} capacity - The maximum number of items the cache can hold.
   */
  constructor(capacity: number) {
    this.cache = {};
    this.capacity = capacity;
  }

  /**
   * Generate a unique hash key from a given input.
   *
   * @param {string | object} input - The input to generate a key from.
   * @returns {string} The generated hash key.
   * @throws {TypeError} Throws an error if the input is neither a string nor an object.
   */
  static generateKey(input: string | object): string {
    if (typeof input === "string") {
      return createHash("sha256").update(input).digest("hex");
    } else if (typeof input === "object" && input !== null) {
      const sortedKeys = Object.keys(input).sort();
      const sortedObject = sortedKeys.reduce((acc, key) => {
        acc[key] = (input as Record<string, unknown>)[key];
        return acc;
      }, {} as Record<string, unknown>);

      return createHash("sha256")
        .update(JSON.stringify(sortedObject))
        .digest("hex");
    }

    throw new TypeError("Input must be a string or a non-null object");
  }

  /**
   * Check if a key exists in the cache.
   *
   * @param {string} key - The key to check.
   * @returns {boolean} True if the key exists, false otherwise.
   */
  private has(key: string): boolean {
    return this.cache.hasOwnProperty(key);
  }

  /**
   * Get a value from the cache using the specified key.
   *
   * @param {string} key - The key for the cached value.
   * @returns {T | undefined} The cached value, or undefined if not found.
   */
  get(key: string): T | undefined {
    const node = this.cache[key];
    if (node) {
      this.moveToHead(node); // Move the accessed node to the head of the list
      return node.item.value;
    }
    return undefined;
  }

  /**
   * Set a value in the cache with the specified key.
   *
   * @param {string} key - The key for the cached value.
   * @param {T} value - The value to cache.
   */
  set(key: string, value: T): void {
    if (this.has(key)) {
      // Update existing item and move it to the head
      this.cache[key].item.value = value;
      this.moveToHead(this.cache[key]);
      return;
    }

    // If the cache is at capacity, remove the least recently used item
    if (Object.keys(this.cache).length >= this.capacity) {
      this.evictLRU();
    }

    // Add new item to the cache
    const newNode = new Node<T>(key, { value });
    this.cache[key] = newNode;
    this.addToHead(newNode);
  }

  /**
   * Move a node to the head of the linked list.
   *
   * @param {Node<T>} node - The node to move to the head.
   */
  private moveToHead(node: Node<T>): void {
    // If it's already the head, no need to move
    if (node === this.head) return;

    // Detach from current position
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    // If it's the tail, update the tail reference
    if (node === this.tail) this.tail = node.prev;

    // Add to the head
    node.prev = null;
    node.next = this.head;
    if (this.head) this.head.prev = node;
    this.head = node;

    // If this is the first node being added, also update the tail
    if (!this.tail) {
      this.tail = node;
    }
  }

  /**
   * Add a node to the head of the linked list.
   *
   * @param {Node<T>} node - The node to add.
   */
  private addToHead(node: Node<T>): void {
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;

    // If this is the first node being added, also update the tail
    if (!this.tail) {
      this.tail = node;
    }
  }

  /**
   * Evict the least recently used item from the cache.
   */
  private evictLRU(): void {
    if (!this.tail) return; // Nothing to evict

    delete this.cache[this.tail.key]; // Remove from cache storage
    if (this.tail.prev) {
      this.tail.prev.next = null; // Remove tail reference
    }
    this.tail = this.tail.prev; // Update tail to previous node
  }

  /**
   * Clear the entire cache.
   */
  clear(): void {
    this.cache = {};
    this.head = null;
    this.tail = null;
  }

  /**
   * Get the number of items in the cache.
   *
   * @returns {number} The number of items in the cache.
   */
  size(): number {
    return Object.keys(this.cache).length;
  }
}

export default LRUCache;
