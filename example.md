---

### **1. For Loop - Counting Padosi ke Bacche**
```js
for (let i = 1; i <= 5; i++) {
    console.log(`Padosi ka baccha #${i} pad raha hai 📚`);
}
```
📌 **Output:**  
```
Padosi ka baccha #1 pad raha hai 📚  
Padosi ka baccha #2 pad raha hai 📚  
Padosi ka baccha #3 pad raha hai 📚  
Padosi ka baccha #4 pad raha hai 📚  
Padosi ka baccha #5 pad raha hai 📚  
```
---

### **2. For...in Loop - Dosti Ki Dictionary**
```js
const dosti = { Amit: "Best Friend", Rahul: "Chai Partner", Sneha: "Gamer Buddy" };
for (let naam in dosti) {
    console.log(`${naam} is my ${dosti[naam]} 😎`);
}
```
📌 **Output:**  
```
Amit is my Best Friend 😎  
Rahul is my Chai Partner 😎  
Sneha is my Gamer Buddy 😎  
```
---

### **3. For...of Loop - Swiggy Ke Khane**
```js
const khana = ["Pizza", "Biryani", "Burger", "Gulab Jamun"];
for (let item of khana) {
    console.log(`Aaj ka dinner: ${item} 🍕🍛🍔🍩`);
}
```
📌 **Output:**  
```
Aaj ka dinner: Pizza 🍕  
Aaj ka dinner: Biryani 🍛  
Aaj ka dinner: Burger 🍔  
Aaj ka dinner: Gulab Jamun 🍩  
```
---

### **4. While Loop - Gym Jaane Ka Wada**
```js
let din = 1;
while (din <= 5) {
    console.log(`Day ${din}: Aaj se gym pakka 💪😂`);
    din++;
}
```
📌 **Output:**  
```
Day 1: Aaj se gym pakka 💪😂  
Day 2: Aaj se gym pakka 💪😂  
Day 3: Aaj se gym pakka 💪😂  
Day 4: Aaj se gym pakka 💪😂  
Day 5: Aaj se gym pakka 💪😂  
```
---

### **5. Do...while Loop - Free WiFi Ki Talaash**
```js
let signal = 0;
do {
    console.log(`WiFi dhoond raha hoon... 📶`);
    signal++;
} while (signal < 3);
console.log("Mil gaya! 🎉");
```
📌 **Output:**  
```
WiFi dhoond raha hoon... 📶  
WiFi dhoond raha hoon... 📶  
WiFi dhoond raha hoon... 📶  
Mil gaya! 🎉  
```
---

