const {add, subtract} = require('./module')

describe('Module test', () => {
  it('should output 5 for arguments 2 and 3', () => {
    expect(add(2,3)).toBe(5)
  });

  it('should subtract 15 from 25 and output 10', () => {
    expect(subtract(25,15)).toBe(10)
  });
});
