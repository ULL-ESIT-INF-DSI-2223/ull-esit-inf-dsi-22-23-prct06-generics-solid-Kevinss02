import 'mocha';
import {expect} from 'chai';
import {Film} from '../src/Ejercicio1/Film'
import {FilmsCollection} from '../src/Ejercicio1/FilmCollection'


describe("FilmsCollection", () => {
  let filmsCollection: FilmsCollection;

  beforeEach(() => {
    filmsCollection = new FilmsCollection(
      new Film("Film 1", 120, 2020, "Action"),
      new Film("Film 2", 90, 2021, "Drama"),
      new Film("Film 3", 150, 2022, "Comedy")
    );
  });

  it("should return an empty array when searching for a non-existent film", () => {
    const searchTerm = new Film("Non-existent Film", 0, 0, "");
    expect(filmsCollection.search(searchTerm)).to.deep.equal([]);
  });

  it("should return the correct index when searching for an existing film", () => {
    const searchTerm = filmsCollection.getItems()[0];
    expect(filmsCollection.search(searchTerm)).to.deep.equal([0]);
  });

  it("should return an empty array when searching by a non-existent title", () => {
    expect(filmsCollection.searchByTitle("Non-existent Title")).to.deep.equal(
      []
    );
  });

  it("should return the correct films when searching by an existing title", () => {
    expect(filmsCollection.searchByTitle("Film 1")).to.deep.equal([
      new Film("Film 1", 120, 2020, "Action"),
    ]);
  });

  it("should return an empty array when searching by a non-existent duration", () => {
    expect(filmsCollection.searchByDuration(999)).to.deep.equal([]);
  });

  it("should return the correct films when searching by an existing duration", () => {
    expect(filmsCollection.searchByDuration(120)).to.deep.equal([
      new Film("Film 1", 120, 2020, "Action"),
    ]);
  });

  it("should return an empty array when searching by a non-existent year", () => {
    expect(filmsCollection.searchByYear(9999)).to.deep.equal([]);
  });

  it("should return the correct films when searching by an existing year", () => {
    expect(filmsCollection.searchByYear(2020)).to.deep.equal([
      new Film("Film 1", 120, 2020, "Action"),
    ]);
  });

  it("should return an empty array when searching by a non-existent genre", () => {
    expect(filmsCollection.searchByGenre("Non-existent Genre")).to.deep.equal(
      []
    );
  });

  it("should return the correct films when searching by an existing genre", () => {
    expect(filmsCollection.searchByGenre("Action")).to.deep.equal([
      new Film("Film 1", 120, 2020, "Action"),
    ]);
  });

  it("should sort films by title", () => {
    filmsCollection.sortByTitle();
    expect(filmsCollection.getItems()).to.deep.equal([
      new Film("Film 1", 120, 2020, "Action"),
      new Film("Film 2", 90, 2021, "Drama"),
      new Film("Film 3", 150, 2022, "Comedy"),
    ]);
  });

  it("should sort films by duration", () => {
    filmsCollection.sortByDuration();
    expect(filmsCollection.getItems()).to.deep.equal([
      new Film("Film 2", 90, 2021, "Drama"),
      new Film("Film 1", 120, 2020, "Action"),
      new Film("Film 3", 150, 2022, "Comedy"),
    ]);
  });

  it("should sort films by year", () => {
    filmsCollection.sortByYear();
    expect(filmsCollection.getItems()).to.deep.equal([
      new Film("Film 1", 120, 2020, "Action"),
      new Film("Film 2", 90, 2021, "Drama"),
      new Film("Film 3", 150, 2022, "Comedy"),
    ]);
  });

  it("should sort films by genre", () => {
    filmsCollection.sortByGenre();
    expect(filmsCollection.getItems()).to.deep.equal([
      new Film("Film 1", 120, 2020, "Action"),
      new Film("Film 3", 150, 2022, "Comedy"),
      new Film("Film 2", 90, 2021, "Drama"),
    ]);
  });
});