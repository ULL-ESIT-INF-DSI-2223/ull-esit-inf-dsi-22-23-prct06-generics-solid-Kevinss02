import { StreamableCategory } from "./StreamableCategory";

/**
 * Represents a documentary as a type of streamable content.
 */
export class Documentary extends StreamableCategory<Documentary> {
  constructor(name: string, duration: number, year: number, genre: string) {
    super(name, duration, year, genre);
  }
  
  /**
   * Returns a string representation of the value of the Documentary object.
   */
  public valueOf(): string {
    return this._name;
  }
  
  /**
  * Determines whether the Documentary object is equal to another Documentary object.
  * @param documentary - the other Documentary object to compare to.
  * @returns true if the Documentary objects are equal, false otherwise.
  */
  public equals(documentary: Documentary): boolean {
    return (
      this._name === documentary._name &&
      this._duration === documentary._duration &&
      this._year === documentary._year &&
      this._genre === documentary._genre
    );
  }

  /**
   * Prints a string representation of the Documentary object to the console.
   */
  public print() {
    console.log(this.toString());
  }

  /**
   * Returns a string representation of the Documentary object.
   */
  public toString(): string {
    return `DocumentaryTitle: ${this.name}, Duration: ${this.duration}, Genre: ${this.genre}, Duration: ${this.duration}`;
  }
}
