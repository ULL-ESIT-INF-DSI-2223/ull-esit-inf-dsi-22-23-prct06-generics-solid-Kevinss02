/**
 * Interface representing a category of streamable content.
 * @typeparam T - The type of object that implements this interface.
 */
interface StreamableCategoryInterface<T> {
  name: string;
  duration: number;
  year: number;
  genre: string;
  valueOf(): string;
  equals(other: T): boolean;
}

/**
 * Abstract class representing a category of streamable content.
 * @typeparam T - The type of object that extends this abstract class.
 */
export abstract class StreamableCategory<T> implements StreamableCategoryInterface<T> {
  /**
    * Constructs a new StreamableCategory object.
    * @param _name The name of the streamable content.
    * @param _duration The duration of the streamable content.
    * @param _year The year when the streamable content was released.
    * @param _genre The genre of the streamable content.
   */
  constructor(
    protected _name: string,
    protected _duration: number,
    protected _year: number,
    protected _genre: string,
  ) {}
  
  /**
   * Returns the name of the streamable content.
   */
  get name(): string { return this._name; }

  /**
   * Returns the duration of the streamable content.
   */
  get duration(): number { return this._duration; }

  /**
   * Returns the year when the streamable content was released.
   */
  get year(): number { return this._year; }

  /**
   * Returns the genre of the streamable content.
   */
  get genre(): string { return this._genre; }
  
  /**
    * Sets the name of the streamable content.
    * @param name_ The new name of the streamable content.
   */
  set name(name_: string) { this._name = name_; }

  /**
   * Sets the duration of the streamable content.
    * @param duration_ The new duration of the streamable content.
   */
  set duration(duration_: number) { this._duration = duration_; }

  /**
   * Sets the year when the streamable content was released.
    * @param year_ The new year when the streamable content was released.
   */
  set year(year_: number) { this._year = year_; }

  /**
   * Sets the genre of the streamable content.
    * @param genre_ - the new genre of the streamable content.
   */
  set genre(genre_: string) { this._genre = genre_; }
  
  /**
   * Returns a string representation of the StreamableCategory object.
   */
  public abstract valueOf(): string;  

  /**
    * Determines whether the StreamableCategory object is equal to another object of type T.
    * @param other The other object to compare to.
    * @returns True if the objects are equal, false otherwise.
   */
  public abstract equals(other: T): boolean;
  
  /**
   * Prints a string representation of the StreamableCategory object to the console.
   */
  public abstract print(): void;

  /**
   * Returns a string representation of the StreamableCategory object.
   */
  public abstract toString(): string;
}