const randomString = require('../index');

test('Test random function', () => {
    expect(typeof(randomString())).toBe('string');
});

describe(' Random fuction functionalities', () => {
 test('If a city texists', () => {
   expect(randomString()).not.toMatch(/Bogotá/);
 });
});