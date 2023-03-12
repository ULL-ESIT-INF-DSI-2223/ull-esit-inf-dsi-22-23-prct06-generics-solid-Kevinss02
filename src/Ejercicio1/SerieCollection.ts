import {Serie} from "./Serie"
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Represents a collection of series extending abstract class BasicStreamableCollection.
 */
class SeriesCollection extends BasicStreamableCollection<Serie> {
  constructor(...series: Serie[]) {
    super(...series);
  }
  
  /**
   * Searches the collection for items that match the provided search term
   * @param searchTerm The search term to match against the items in the collection.
   * @returns An array containing the indexes of the matching items.
   */
  search(searchTerm: Serie): number[] {
    let pos_arr: number[] = [];
    for (let i: number = 0; i < this._items.length; i++) {
      if (this._items[i] === searchTerm) {
        pos_arr.push(i);
      }
    }
    return pos_arr;
  }
  
  /**
   * Searches the collection for items that have a title that matches the provided title.
   * @param title The title to match against the items titles in the collection.
   * @returns An array containing the items that have a title that matches the provided title.
   */
  searchByTitle(title: string): Serie[] {
    return this._items.filter((film) =>
      film.name.toLowerCase().includes(title.toLowerCase())
    );
  }
  
  /**
   * Searches the collection for items that have a duration that matches the provided duration.
   * @param duration The duration to match against the items durations in the collection.
   * @returns An array containing the items that have a duration that matches the provided duration.
   */
  searchByDuration(duration: number): Serie[] {
    return this._items.filter((film) => film.duration === duration);
  }
  
  /**
   * Searches the collection for items that have a year that matches the provided year.
   * @param year The year to match against the items years in the collection.
   * @returns An array containing the items that have a year that matches the provided year.
   */
  searchByYear(year: number): Serie[] {
    return this._items.filter((film) => film.year === year);
  }
  
  /**
   * Searches the collection for items that have a genre that matches the provided genre.
   * @param genre The genre to match against the items genres in the collection.
   * @returns An array containing the items that have a genre that matches the provided genre.
   */
  searchByGenre(genre: string): Serie[] {
    return this._items.filter(
      (film) => film.genre.toLowerCase() === genre.toLowerCase()
    );
  }
  
  /**
   * Sorts the items in the collection by title.
   */
  sortByTitle(): void {
    this._items.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  /**
   * Sorts the items in the collection by duration.
   */
  sortByDuration(): void {
    this._items.sort((a, b) => a.duration - b.duration);
  }
  
  /**
   * Sorts the items in the collection by year.
   */
  sortByYear(): void {
    this._items.sort((a, b) => a.year - b.year);
  }
  
  /**
   * Sorts the items in the collection by genre.
   */
  sortByGenre(): void {
    this._items.sort((a, b) => a.genre.localeCompare(b.genre));
  }
}