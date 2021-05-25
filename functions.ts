/*
"The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions:"
*/
type GreetFunction = (a: string) => void;

/*
Call Signatures

If we want to describe something callable with properties, we can write a call signature in an object type:

*/

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

/*
Construct Signatures

"JavaScript functions can also be invoked with the new operator. TypeScript refers to these as constructors because they usually create a new object. You can write a construct signature by adding the new keyword in front of a call signature:
*/

type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

/*
"Some objects, like JavaScript's Date object, can be called with or without new. You can combine call and construct signatures in the same type arbitrarily:
*/

interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}

/*
Generic Functions
In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature:
*/

function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}


function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}


// Constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'string'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);
//Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.


// Specifying Type Argument
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr = combine<string | number>([1, 2, 3], ["hello"]);

// Function Overloads

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);"

/*

The signature of the implementation is not visible from the outside. When writing an overloaded function, you should always have two or more signatures above the implementation of the function.


Always prefer parameters with union types instead of overloads when possible


Declaring this in a Function
*/

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

// Rest Parameters

"In addition to using optional parameters or overloads to make functions that can accept a variety of fixed argument counts, we can also define functions that take an unbounded number of arguments using rest parameters.

A rest parameter appears after all other parameters, and uses the ... syntax:

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);"

Excerpt From
TypeScript Handbook
TypeScript Team and Open Source Contributors
This material may be protected by copyright.

"Rest Arguments
Conversely, we can provide a variable number of arguments from an array using the spread syntax."

Excerpt From
TypeScript Handbook
TypeScript Team and Open Source Contributors
This material may be protected by copyright.


"Note that in general, TypeScript does not assume that arrays are immutable. This can lead to some surprising behavior:

// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
const angle = Math.atan2(...args);
Expected 2 arguments, but got 0 or more.
The best fix for this situation depends a bit on your code, but in general a const context is the most straightforward solution:

// Inferred as 2-length tuple
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);"

Excerpt From
TypeScript Handbook
TypeScript Team and Open Source Contributors
This material may be protected by copyright.




"type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}"

Excerpt From
TypeScript Handbook
TypeScript Team and Open Source Contributors
This material may be protected by copyright.