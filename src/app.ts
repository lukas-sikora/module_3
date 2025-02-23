// listToDict
// map
// filter
// reduce

// Example for cars
const cars = {
  modelS: { brand: "Tesla", color: "white", price: 79999 },
  corolla: { brand: "Toyota", color: "silver", price: 20000 },
  mustang: { brand: "Ford", color: "red", price: 45000 },
  civic: { brand: "Honda", color: "blue", price: 22000 },
  model3: { brand: "Tesla", color: "black", price: 39999 },
  beetle: { brand: "Volkswagen", color: "yellow", price: 18000 },
};

// Example for students
const students = {
  alice: { age: 20, major: "Computer Science", gpa: 3.8 },
  bob: { age: 19, major: "Mathematics", gpa: 3.2 },
  charlie: { age: 21, major: "History", gpa: 3.5 },
  diana: { age: 22, major: "Biology", gpa: 3.9 },
  eric: { age: 20, major: "Psychology", gpa: 3.6 },
  fiona: { age: 19, major: "Literature", gpa: 3.4 },
};

interface Dict<T> {
  [k: string]: T;
}

// Array.prototype.map, but for Dict
function mapDict<T, U>(
  dict: Dict<T>,
  callback: (value: T, key: string) => U
): Dict<U> {
  const result: Dict<U> = {};
  for (const key in dict) {
    result[key] = callback(dict[key], key);
  }
  return result;
}

// Array.prototype.filter, but for Dict
function filterDict<T>(
  dict: Dict<T>,
  callback: (value: T, key: string) => boolean
): Dict<T> {
  const result: Dict<T> = {};
  for (const key in dict) {
    if (callback(dict[key], key)) {
      result[key] = dict[key];
    }
  }
  return result;
}

// Array.prototype.reduce, but for Dict
function reduceDict<T, U>(
  dict: Dict<T>,
  callback: (acc: U, value: T, key: string) => U,
  initialValue: U
): U {
  let acc = initialValue;
  for (const key in dict) {
    acc = callback(acc, dict[key], key);
  }
  return acc;
}