interface Person {
  name: string;
  age: number;
}

type Person = {
  name: string;
  age: number;
};

// Property Modifiers

interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos);

// Here we used a destructuring pattern for paintShape's parameter, and provided default values for xPos and yPos.


}



interface SomeType {
  readonly prop: string;
}

// "Using the readonly modifier doesn't necessarily imply that a value is totally immutable - or in other words, that its internal contents can't be changed. It just means the property itself can't be re-written to."


/// Index Signatures


interface NumberOrStringDictionary {
  readonly [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}


/// Extending Types

//interfaces allowed us to build up new types from other types by extending them.


interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// interfaces can also extend from multiple types.

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};

"TypeScript provides another construct called intersection types that is mainly used to combine existing object types."

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

/// Generic Object Types

interface Box<Type> {
  contents: Type;
}

 
let box: Box<string>;

interface Apple {
  // ....
}

// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;

//we can avoid overloads entirely by instead using generic functions.

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}


// Since type aliases, unlike interfaces, can describe more than just object types, we can also use them to write other kinds of generic helper types.

type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
           
type OneOrManyOrNull<Type> = OneOrMany<Type> | null

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

