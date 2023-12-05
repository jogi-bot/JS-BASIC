const { log } = require("console");


arr1 = [5, 4, 3];
arr2 = [{ a: 1, b: 2, c: 3 }];

const items = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const result = items.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

// [ 1, 2, 3, 7, 8 ]
log(result);

const items = [
  { name: "1", category: "Fruit" },
  { name: "2", category: "Vegetable" },
  { name: "3", category: "Fruit" },
  { name: "4", category: "Vegetable" },
];

const grouped = items.reduce((acc, item) => {
   log(item.name)
}, 0);

// 1
// 2
// 3
// 4

for (const a of arr2) {
  log(a);
}
const initialValue = 0;
// 12

arr2.forEach((key) => {
  log([key]);
});
//[ { a: 1, b: 2, c: 3 } ]
