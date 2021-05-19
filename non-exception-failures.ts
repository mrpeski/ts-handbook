const user = {
  name: "Daniel",
  age: 26,
};

user.location; // returns undefined in pure javascript

// "Property 'location' does not exist on type '{ name: string; age: number; }'." in typescript


/*TypeScript catches a lot of legitimate bugs.

For example: typos, */

const announcement = "Hello World!";

// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase()

// uncalled functions,

function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
//Operator '<' cannot be applied to types '() => number' and 'number'.
}
// or basic logic errors.

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
// This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
