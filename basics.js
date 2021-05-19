// Accessing the property 'toLowerCase'
// on 'message' and then calling it

const message = "Hello World!";


message.toLowerCase(); // hello world!
// Calling 'message'
message(); // "TypeError: message is not a function"

/* For some values, such as the primitives string and number, we can identify their type at runtime using the typeof operator. But for other things like functions, there's no corresponding runtime mechanism to identify their types."*/


function fn(x) {
  return x.flip();
}

/* "We can observe by reading the code that this function will only work if given an object with a callable flip property, but JavaScript doesn't surface this information in a way that we can check while the code is running. The only way in pure JavaScript to tell what fn does with a particular value is to call it and see what happens."

Excerpt From
TypeScript Handbook
TypeScript Team and Open Source Contributors
This material may be protected by copyright. */
