import { StreamableCategory } from "./StreamableCategory";

/**
 * Represents a serie as a type of streamable content.
 */
export class Serie extends StreamableCategory<Serie> {
  constructor(name: string, duration: number, year: number, genre: string) {
    super(name, duration, year, genre);
  }
  
  /**
   * Returns a string representation of the value of the Serie object.
   */
  public valueOf(): string {
    return this._name;
  }
  
  /**
  * Determines whether the Serie object is equal to another Serie object.
  * @param serie - the other Serie object to compare to.
  * @returns true if the Serie objects are equal, false otherwise.
  */
  public equals(serie: Serie): boolean {
    return (
      this._name === serie._name &&
      this._duration === serie._duration &&
      this._year === serie._year &&
      this._genre === serie._genre
    );
  }

  /**
   * Prints a string representation of the Serie object to the console.
   */
  public print() {
    console.log(this.toString());
  }

  /**
   * Returns a string representation of the Serie object.
   */
  public toString(): string {
    return `SerieTitle: ${this.name}, Duration: ${this.duration}, Genre: ${this.genre}, Duration: ${this.duration}`;
  }
}