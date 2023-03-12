/**
 * Interface that defines common methods for collections
 */
interface CollectionInterface<T> {
  size(): number;
  push(...newItems: T[]): void;
  pop(): T | undefined;
  unshift(...items: T[]): void;
  shift(): T | undefined;
  slice(start?: number, end?: number): T[];
  splice(start: number, deleteCount: number, ...items: T[]): T[];
  at(indx: number): T |undefined;
  search(searchTerm: T): number[];
  getItems(): T[];
}

/**
 * Interface that extends 'CollectionInterface' adding some specifics methods for searching and sorting streamable elements of a streamable collection.
 */
interface Streamable<T> extends CollectionInterface<T> {
  searchByTitle(title: string): T[];
  searchByDuration(duration: number): T[];
  searchByYear(year: number): T[];
  searchByGenre(genre: string): T[];
  sortByTitle(): void;
  sortByDuration(): void;
  sortByYear(): void;
  sortByGenre(): void;
}

/**
 * This abstract class represents a basic streamable collection that can be extended to create different collections of items.
 * @template T Represents the type of the items contained in the collection.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected _items: T[];
  
  /**
   * Creates an instace of the BasicStreamableCollection class.
   * @param items The initial items to be added to the collection.
   */
  constructor(...items: T[]) { this._items = items; }

  /**
   * Returns the number of items in the collection.
   * @returns The number of items in the collection.
   */
  public size(): number { return this._items.length; }

  /**
   * Adds one or more new items to the end of the collection.
   * @param newItems The new items to be added into the collection.
   */
  public push(...newItems: T[]) { this._items.push(...newItems); }

  /**
   * Removes and returns the las item in the collection.
   * @returns The last item in the collection or undefined if the collection is empty.
   */
  public pop(): T | undefined { return this._items.pop(); }

  /**
   * Adds one or more new items to the beginning of the collection.
   * @param items The new items to be added in the collection.
   */
  public unshift(...items: T[]) { this._items.unshift(...items); }

  /**
   * Removes and returns the first item in the colecction.
   * @returns The first item in the collection or undefined if the collection is empty.
   */
  public shift(): T | undefined { return this._items.shift(); }

  /**
   * Returns a copy of a portion of the collection.
   * @param start The initial index.
   * @param end The last index.
   * @returns A new array containing the extracted elements.
   */
  public slice(start?: number, end?: number): T[] {
    return this._items.slice(start, end);
  }
  
  /**
   * Removes and/or adds items to the collection, starting at the specified index.
   * @param start The initial index.
   * @param deleteCount The number of items to be removed.
   * @param items The items to be added to the collection.
   * @returns A collection containing the removed elements.
   */
  public splice(start: number, deleteCount: number = 0, ...items: T[]): T[]  {
    return this._items.splice(start, deleteCount, ...items);
  }

  /**
   * Gets or sets the item at the specified index in the collection.
   * @param indx The index of the item.
   * @returns The item at the specified idnex.
   */
  public at(indx: number): T | undefined {
    if (indx < 0 || indx >= this._items.length) { return undefined; }
    return this._items[indx];
  }

  /**
   * Gets the items in the collection.
   * @returns An array of items in the collection.
   */
  public getItems(): T[] { return this._items; }
  
  /**
   * An abstract method that searches the collection for items that match the provided search term
   * @param searchTerm The search term to match against the items in the collection.
   * @returns An array containing the indexes of the matching items.
   */
  public abstract search(searchTerm: T): number[];

  /**
   * An abstract method that searches the collection for items that have a title that matches the provided title.
   * @param title The title to match against the items' titles in the collection.
   * @returns An array containing the items that have a title that matches the provided title.
   */
  public abstract searchByTitle(title: string): T[];

  /**
   * An abstract method that searches the collection for items that have a duration that matches the provided duration.
   * @param duration The duration to match against the items' durations in the collection.
   * @returns An array containing the items that have a duration that matches the provided duration.
   */
  public abstract searchByDuration(duration: number): T[];

  /**
   * An abstract method that searches the collection for items that have a year that matches the provided year.
   * @param year The year to match against the items' years in the collection.
   * @returns An array containing the items that have a year that matches the provided year.
   */
  public abstract searchByYear(year: number): T[];

  /**
   * An abstract method that searches the collection for items that have a genre that matches the provided genre.
   * @param genre The genre to match against the items' genres in the collection.
   * @returns An array containing the items that have a genre that matches the provided genre.
   */
  public abstract searchByGenre(genre: string): T[];

  /**
   * An abstract method that sorts the items in the collection by title.
   */
  public abstract sortByTitle(): void;

  /**
   * An abstract method that sorts the items in the collection by duration.
   */
  public abstract sortByDuration(): void;

  /**
   * An abstract method that sorts the items in the collection by year.
   */
  public abstract sortByYear(): void;

  /**
   * An abstract method that sorts the items in the collection by genre.
   */
  public abstract sortByGenre(): void;
}
