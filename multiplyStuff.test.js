const multiplyStuff = require('./multiply.js');

test('multiply two numbers', () => {
  expect(multiplyStuff(5,2)).toEqual(10)
})
