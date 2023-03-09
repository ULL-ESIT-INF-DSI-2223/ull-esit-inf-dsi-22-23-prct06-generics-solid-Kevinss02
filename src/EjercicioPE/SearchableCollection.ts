/**
 * Generic interface for collectable objects
 *   Methods: 
 *     addItem: Adds new item to the collection
 *     getItem: Returns the value stored in index
 *     removeItem: Removes value stored in index
 *     getNumberOfItems: Returns collection size
 */
interface Collectable<T> {
  addItem(item: T): void;
  getItem(index: number): T | undefined;
  removeItem(index: number): void | undefined;
  getNumberOfItems(): number;
}

/**
 * Generic interface for searchable objects
 *   Methods:
 *     search(): It returns a T array with ocurrencies
 */  
interface Searchable<T> {
  search(query: T): T[];
}

export abstract class SearchableCollection<T>
  implements Collectable<T>, Searchable<T>
{
  protected _items: T[];
  constructor() {}
  
  /**
   * Función para añadir items a la colección
   * @param item Item que se desea añadir
   */
  addItem(item: T): void | undefined {
    this._items.push(item);
  }

  /**
   * Función para obtener un item de la colección dada una posición
   * @param index Posición del item que se desea obtener
   * @returns Item en la posición index
   */
  getItem(index: number): T | undefined {
    if (index < 0 || index >= this._items.length) { return undefined; }
    return this._items[index];
  }
  
  /**
   * Función para eliminar un elemento de la colección
   * @param index Posición del item que se quiere borrar
   * @returns Undefined si el index es inválido
   */
  removeItem(index: number): void | undefined {
    if (index < 0 || index >= this._items.length) { return undefined; }
    const sz: number = this._items.length;
    let item: T = this._items[sz - 1];
    this._items[index] = item;
    this._items.pop();
  }
  
  /**
   * Función para obtener el número de elementos de la colección
   * @returns Size de la colección
   */
  getNumberOfItems(): number {
    return this._items.length;
  }

  get items(): T[] {
    return this._items;
  }
  set items(arr: T[]) {
    this._items = arr;
  }

  abstract search(query: T): T[];
}
