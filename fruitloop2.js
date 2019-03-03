// Repeat Fruitloop1, but for each fruit name that you display, on the next line display the number of periods that is equal to the number of the index of the array.
// Example: "Banana" . //one period
// "Orange" .. //two periods etc.

const fruit = ['Apple', 'Pear', 'Peach', 'Banana', 'Strawberry', 'Tomato'];
let period = '.';

for (let i = 0; i < fruit.length; i++) {
  console.log(`${fruit[i]} ${period}`);
  period += '.';
}