/**
 * RecentlyUsedList is a list of strings ordered from most recently added to least recently added.
 * @class
 */
export default class RecentlyUsedList {
  /**
   * Creates an instance of a RecentlyUsedList
   * @constructor
   * @param {*} options
   * @param {number} options.limit The maximum number of items the list can hold
   */
  constructor(options = {}) {
    this.items = [];
    this.limit = options.limit ?? Infinity;
  }

  /**
   * Adds an item to the list
   * @param {string} newItem The item to be added
   */
  add(newItem) {
    if (newItem == "") throw new TypeError("Empty strings not allowed");
    if (typeof newItem !== "string")
      throw new TypeError("Items must be strings");

    // Move re-added items to the front instead of duplicating them
    const existingItemIndex = this.items.findIndex((item) => item == newItem);
    if (existingItemIndex > -1) this.items.splice(existingItemIndex, 1);

    // Add the new item to the front of the list
    this.items.unshift(newItem);

    // Enforce the list size limit
    if (this.items.length > this.limit) {
      this.items.pop();
    }
  }
}
