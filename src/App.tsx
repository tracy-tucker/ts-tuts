import React from "react";
import "./App.css";

function App() {
  return <div className="App">Hello World.</div>;
}

export default App;

// Types in TS

// let name:string = "Tracy" //string
// let age: number // number
// let ageOrName: number | string; // Union --> the type can be either or
// let isStudent: boolean;  // boolean
// let hobbies: string[]; // array example
// let role: [number, string] // tuple --> contains a fixed amount of types within brackets
// role = [5, 'Tucker']
// type Person = {
//   name: string;
//   age?: number; // The ? means this property is optional
// }

// let person: Person = { // Assigning the type definitions to the object.
//   name: 'Tracy',
//   age: 38,
// }
// let lotsOfPeople: Person[];

// let car: any; // The any type if not recommended. Defeats the person of having TS.
// let van: unknown; // This is recommneded instead of any type.

// void VS never
// void --> returns undefined
// never --> does not return anything

// How to Define a Function

// Defining a passed-parameter
// function printName(name: string) {
//   console.log(name);
// }

// 2 correct ways to define an actual function
// one way
// let printName2: Function;

// BEST way
// let printName3: (name: string) => void // the => says what the function result type will be.

// // How to Define a Working Interface
// // 2 ways: type and interface

// // type
// type Person = {
//   name: string;
//   age?: number; // The ? means this property is optional
// }

// // combine type
// type X = {
//   a: string;
//   b: number;
// };

// type Y = X & {
//   // The & combines the 2 object types. Now Y contains both Y and X properties.
//   c: number;
//   d: string;
// };

// let y: Y = { // This will cause an error because it is missing properties from X
//   c: 42,
//   d: ";kj",
// };

// // type --> must use & to combine

// // interface
// interface Person {
//   name: string;
//   age?: number; // The ? means this property is optional
// }

// // Combining interfaces
// interface Person {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person {
//   profession: string;
// }

// // interface --> must use extends to combine
