import 'mocha';
import {expect} from 'chai';
import {NumbericSearchableCollection} from '../src/EjercicioPE/NumberSearchableCollection';
import {StringSearchableCollection} from '../src/EjercicioPE/StringSearchableCollection';

describe('NumericSearchableCollection', () => {
  it('should create a collection with the given items', () => {
    const num_arr = [1, 2, 3, 4, 5];
    const collection = new NumbericSearchableCollection(num_arr);
    expect(collection.getNumberOfItems()).to.equal(num_arr.length);
  });

  it('should add new items to the collection', () => {
    const num_arr = [1, 2, 3, 4, 5];
    let collection = new NumbericSearchableCollection(num_arr);
    collection.addItem(6);
    console.log(collection);
    expect(collection).to.deep.equal(new NumbericSearchableCollection([1, 2, 3, 4, 5, 6]));
  });

  it('should return the correct item at the given index', () => {
    const num_arr = [1, 2, 3, 4, 5];
    const collection = new NumbericSearchableCollection(num_arr);
    const item = collection.getItem(2);
    expect(item).to.equal(num_arr[2]);
  });

  it('should remove an item from the collection at the given index', () => {
    const num_arr = [1, 2, 3, 4, 5];
    let collection = new NumbericSearchableCollection(num_arr);
    collection.removeItem(2);
    console.log(collection);
    expect(collection).to.deep.equal(new NumbericSearchableCollection([1, 2, 5, 4]));
  });

  it('should return an array of positions of the given number', () => {
    const num_arr = [1, 2, 3, 2, 5];
    const collection = new NumbericSearchableCollection(num_arr);
    const result = collection.search(2);
    expect(result).to.deep.equal([1, 3]);
  });
});
