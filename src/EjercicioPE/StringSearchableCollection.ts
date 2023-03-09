import { SearchableCollection } from "./SearchableCollection";

/**
 * Class that represents a StringCollection
 * It inhereits from abstract class SearchableCollection
 *   Methods: 
 *     search: It returns a number array with position of occurrencies
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  constructor(num_arr: string[]) {
    super();
    this.items = num_arr;
  }

  /**
   * 
   * @param str String that is going to be searched
   * @returns 
   */
  search(str: string): string[] {
    let str_arr: string[] = [];
    return str_arr;
  }
    
}
