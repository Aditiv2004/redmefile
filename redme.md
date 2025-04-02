# JavaScript Loops - README

Loops in JavaScript help in executing a block of code multiple times. Below are different types of loops with examples.

---

## 1. For Loop
The `for` loop is used when the number of iterations is known.

### Syntax:
```js
for (initialization; condition; increment/decrement) {
    // Code to execute
}
```

### Example 1: Printing numbers from 1 to 5
```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Example 2: Printing even numbers from 2 to 10
```js
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
```

---

## 2. For...in Loop
The `for...in` loop is used to iterate over object properties.

### Syntax:
```js
for (let key in object) {
    // Code to execute
}
```

### Example 1: Iterating over an object
```js
const student = { name: "John", age: 20, grade: "A" };
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
```

### Example 2: Iterating over an array indices
```js
const colors = ["Red", "Green", "Blue"];
for (let index in colors) {
    console.log(`${index}: ${colors[index]}`);
}
```

---

## 3. For...of Loop
The `for...of` loop is used to iterate over iterable objects like arrays and strings.

### Syntax:
```js
for (let item of iterable) {
    // Code to execute
}
```

### Example 1: Iterating over an array
```js
const fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

### Example 2: Iterating over a string
```js
const word = "Hello";
for (let char of word) {
    console.log(char);
}
```

---

## 4. While Loop
The `while` loop executes a block of code as long as the condition is true.

### Syntax:
```js
while (condition) {
    // Code to execute
}
```

### Example 1: Printing numbers from 1 to 5
```js
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```

### Example 2: Countdown from 5 to 1
```js
let count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}
```

---

## 5. Do...while Loop
The `do...while` loop executes at least once before checking the condition.

### Syntax:
```js
do {
    // Code to execute
} while (condition);
```

### Example 1: Asking for a password until it matches
```js
let password;
do {
    password = prompt("Enter the password:");
} while (password !== "1234");
alert("Access granted!");
```

### Example 2: Printing numbers from 1 to 5
```js
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);
```

---

## Conclusion
Understanding loops is essential in JavaScript programming as they help in automating repetitive tasks efficiently. Choosing the right loop depends on the requirement:
- Use `for` when iterations are known.
- Use `for...in` for object properties.
- Use `for...of` for iterable values.
- Use `while` when iterations depend on a condition.
- Use `do...while` when at least one execution is required.

Happy coding!


