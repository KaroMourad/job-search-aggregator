/**
 * CacheMap class to store data in memory using a plain object.
 * 
 * @template T - The type of the value stored in the cache.
 * @class CacheMap
 * @classdesc A class to store data in memory, using a plain object to manage cache entries.
 * 
 * @example
 * const cache = new CacheMap<number>();
 * const key = CacheMap.generateKey("myKey");
 * cache.set(key, 42);
 * console.log(cache.get(key)); // 42
 * console.log(cache.has(key)); // true
 * cache.delete(key);
 * console.log(cache.has(key)); // false
 * cache.clear();
 */
class CacheMap<T> {
  private cache: Record<string, T>;

  constructor() {
    this.cache = {};
  }

  /**
   * Generate a key from a given input, which can be a string or an object.
   * 
   * @param {string | object} input - The input to generate a key from.
   * @returns {string} The generated key.
   */
  static generateKey(input: string | object): string {
    if (typeof input === 'string') {
      return btoa(input); // Encode the string in base-64
    }
    // Use JSON.stringify for objects and then encode the result in base-64
    return btoa(JSON.stringify(input));
  }

  /**
   * Set a value in the cache with the specified key.
   * 
   * @param {string} key - The key for the cached value.
   * @param {T} value - The value to cache.
   */
  set(key: string, value: T): void {
    this.cache[key] = value;
  }

  /**
   * Get a value from the cache using the specified key.
   * 
   * @param {string} key - The key for the cached value.
   * @returns {T | undefined} The cached value, or undefined if not found.
   */
  get(key: string): T | undefined {
    return this.cache[key];
  }

  /**
   * Check if a value exists in the cache for the specified key.
   * 
   * @param {string} key - The key to check in the cache.
   * @returns {boolean} True if the key exists, otherwise false.
   */
  has(key: string): boolean {
    return key in this.cache;
  }

  /**
   * Delete a value from the cache using the specified key.
   * 
   * @param {string} key - The key for the cached value to delete.
   * @returns {boolean} True if the key was found and deleted, otherwise false.
   */
  delete(key: string): boolean {
    if (this.has(key)) {
      delete this.cache[key];
      return true;
    }
    return false;
  }

  /**
   * Clear the entire cache.
   */
  clear(): void {
    this.cache = {};
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

export default CacheMap;
