import { StreamableCategory } from "./StreamableCategory";

/**
 * Represents a film as a type of streamable content.
 */
export class Film extends StreamableCategory<Film> {
  constructor(name: string, duration: number, year: number, genre: string) {
    super(name, duration, year, genre);
  }
  
  /**
   * Returns a string representation of the value of the Film object.
   */
  public valueOf(): string {
    return this._name;
  }
  
  /**
  * Determines whether the Film object is equal to another Film object.
  * @param film - the other Film object to compare to.
  * @returns true if the Film objects are equal, false otherwise.
  */
  public equals(film: Film): boolean {
    return (
      this._name === film._name &&
      this._duration === film._duration &&
      this._year === film._year &&
      this._genre === film._genre
    );
  }

  /**
   * Prints a string representation of the Film object to the console.
   */
  public print() {
    console.log(this.toString());
  }

  /**
   * Returns a string representation of the Film object.
   */
  public toString(): string {
    return `FilmTitle: ${this.name}, Duration: ${this.duration}, Genre: ${this.genre}, Duration: ${this.duration}`;
  }
}
