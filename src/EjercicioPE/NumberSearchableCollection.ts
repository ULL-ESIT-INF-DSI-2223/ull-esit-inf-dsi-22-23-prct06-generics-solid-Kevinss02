import {SearchableCollection} from "./SearchableCollection"

/**
 * Class that represents a NumberCollection
 * It inhereits from abstract class SearchableCollection
 *   Methods: 
 *     search: It returns a number array with position of occurrencies
 */
export class NumbericSearchableCollection extends SearchableCollection<number> {
  constructor(num_arr: number[]) {
    super();
    this._items = num_arr;
  }

  /**
   * It returns a number array with position of occurrencies
   * @param num Number that is going to be searched
   * @returns Array with occurrencies position
   */
  search(num: number): number[] {
    let result_pos: number[] = [];
    for (let i = 0; i < this._items.length; i++) {
      if (this._items[i] === num) { result_pos.push(i); }
    } 
    return result_pos;
  }
}

let arr: number[] = [1, 2, 3];
console.log(arr);