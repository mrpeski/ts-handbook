/* 
With Union types, a variable can take up different types. Only operations shared by each type can guaranty type safety. Operations unique to types need to be wrapped in narrow blocks to guarantee type safety.  
"the process of refining types to more specific types than declared is called narrowing"

*/

/*
"There are a couple of different constructs TypeScript understands for narrowing."

Typeof type guard  // typeof null is 'object'. use typeof guard
Truthiness // with truthiness check. if( str && typeof str === "object")

*/


function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

/*


Equality
in operator
Instanceof type guard 

*/

/*
Assignments

*/
let x = Math.random() < 0.5 ? 10 : "hello world!";
   
let x: string | number
x = 1;

console.log(x);
           
x = "goodbye!";

console.log(x)

/*
Notice that each of these assignments is valid. Even though the observed type of x changed to number after our first assignment, we were still able to assign a string to x. This is because the declared type of x - the type that x started with - is string | number, and assignability is always checked against the declared type.

*/

/*
Control flow analysis
*/

/*
type predicates

"To define a user-defined type guard, we simply need to define a function whose return type is a type predicate:"

*/

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// "In addition, classes can use this is Type to narrow their type."

/*
Discriminated unions

"When every type in a union contains a common property with literal types, TypeScript considers that to be a discriminated union, and can narrow out the members of the union."

*/


interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

/*
The never type
*/

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

//Adding a new member to the Shape union, will cause a TypeScript error:

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
//Type 'Triangle' is not assignable to type 'never'.
      return _exhaustiveCheck;
  }
}