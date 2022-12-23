// Write your own version of the lodash _.partition function. Partition receives a "collection", which can be an array or object, and a function that will check each item in the collection, it returns an array containing two arrays, one of the values that passed the check and the other with values that didn't.

// const array = [{item: true}, {item: true}, {item: false}]
// partition(array) ➞ [[{item: true}, {item: true}], [{item: false}]]

const _ = require("lodash");
const vehicles = [
  { make: "toyota", year: 2021, isUsed: false },
  { make: "toyota", year: 2019, isUsed: true },
  { make: "ford", year: 2012, isUsed: true },
  { make: "ford", year: 2021, isUsed: false },
  { make: "ford", year: 2017, isUsed: true },
  { make: "mazda", year: 2021, isUsed: false },
  { make: "mazda", year: 2018, isUsed: true },
];

const vehiclesObject = {
  stall1: { make: "toyota", year: 2021, isUsed: false },
  stall2: { make: "toyota", year: 2019, isUsed: true },
  stall3: { make: "ford", year: 2012, isUsed: true },
  stall4: { make: "ford", year: 2021, isUsed: false },
  stall5: { make: "ford", year: 2017, isUsed: true },
  stall6: { make: "mazda", year: 2021, isUsed: false },
  stall7: { make: "mazda", year: 2018, isUsed: true },
};

const partition = (collection, check) => {
  const passed = [];
  const failed = [];

  const collectionAsArray = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  const splitArray = (array, fn) =>
    array.map((d) => (fn(d) ? passed.push(d) : failed.push(d)));

  if (typeof check === "function") splitArray(collectionAsArray, check);
  if (typeof check === "string")
    splitArray(collectionAsArray, _.property(check));
  if (Array.isArray(check))
    splitArray(collectionAsArray, _.matchesProperty(...check));
  else if (typeof check === "object")
    splitArray(collectionAsArray, _.matches(check));
  return [passed, failed];
};

console.log(
  _.partition(vehicles, (d) => d.make === "toyota"),
  partition(vehicles, (d) => d.make === "toyota")
);
console.log(
  _.partition(vehicles, { make: "toyota", isUsed: false }),
  partition(vehicles, { make: "toyota", isUsed: false })
);
console.log(
  _.partition(vehiclesObject, { make: "toyota", isUsed: false }),
  partition(vehiclesObject, { make: "toyota", isUsed: false })
);
console.log(
  _.partition(vehicles, ["isUsed", false]),
  partition(vehicles, ["isUsed", false])
);
console.log(_.partition(vehicles, "isUsed"), partition(vehicles, "isUsed"));

console.log(
  _.partition(vehiclesObject, (d) => d.year < 2018),
  partition(vehiclesObject, (d) => d.year < 2018)
);

console.log(
  _.partition(vehiclesObject, { make: "toyota", year: 2021, isUsed: false }),
  partition(vehiclesObject, { make: "toyota", year: 2021, isUsed: false })
);

console.log(
  _.partition(vehiclesObject, "toyota"),
  partition(vehiclesObject, "toyota")
);

console.log(_.partition(vehiclesObject, null), partition(vehiclesObject, null));
