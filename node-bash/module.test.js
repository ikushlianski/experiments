const {add} = require('./module')

describe('Module test', () => {
  it('should output 5 for arguments 2 and 3', () => {
    expect(add(2,3)).toBe(5)
  });
});
