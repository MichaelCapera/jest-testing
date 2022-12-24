const text = 'Hello world';
const fruits = ['apple', 'melon', 'banana'];

/** Example string */

test('Must contain a text', () => {
    expect(text).toMatch(/world/);
});


/** Example array */

test('Must contain a banana', () => {
 expect(fruits).toContain('banana');
});


/** Example number */

test('Is major than', () => {
  expect(10).toBeGreaterThan(9);
});


/** Example boolean */

test('Is true', () => {
  expect(true).toBeTruthy();
});


/** Callback function */

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
}

/** Example testing a callback */

test("Test callback", () => {
  reverseString('Hello', (str) => {
     expect(str).toBe('olleH');
  });   
});

const reversString2 = str => {
    return new Promise((resolve, reject) => {
      if(!str) {
        reject((Error('Error')))
      }
      resolve(str.split("").reverse().join(""))
    });
}

/** Example async function 1 */

test('Test promise', () => {
    return reversString2('Hello')
    .then((string)=> {
        expect(string).toBe('olleH');
    });
});

/**  Example async function 2 */

test('Async Await', async () => {
   const string = await reversString2('Hello');
   expect(string).toBe('olleH');
});

afterEach(() => console.log('After each test'));
afterAll(() => console.log('After all tests'));

beforeEach(() => console.log('Before each test'));
beforeAll(() => console.log('Before all tests'));