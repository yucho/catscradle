const CatsCradle = require('../index');

describe('CatsCradle.coordinates', () => {
  let cc;

  beforeEach(() => {
    cc = new CatsCradle();
  });
  
  it('should return array of coordinates', () => {
    const result = cc.coordinates.every(element => element instanceof Array);
    expect(result).toBe(true);
  });

  it('should not be writable', () => {
    const writable = Symbol('unique value');
    cc.coordinates = writable;
    expect(cc.coordinates).not.toBe(writable);
  });
});
