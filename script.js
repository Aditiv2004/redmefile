let a = 43;
console.log(a);

let r = "bhawartha";
console.log(r);

let age= 22;
console.log(age);

let b = 59;
let c = 75;
console.log(b * c);
 
let student={
    name: "rohit",
    age: 28,
    addrress: "mumbai" 

}
console.log(student)


// for loop
const number=3;
for (let i=0; i<=10; i++){
    console.log(`${number} x ${i} =${number*i}`);
}
// while
let t=1;
 while (t<=5){
    console.log(t);
    t++;
 }

//  do while

let password;
do{
 
    password=prompt('Enter your password');
    alert("incorrect password");
 

   
}
while(password!=="1235");
alert("Access granted!");

// for in
 
const Student={name:"Aditi", age:21, grade:"A"};
for (let key in student){
    console.log(`${key}: ${Student[key]}`);
}

// for of

const name={"red", "blue", "green"};
  for(let names in name){
    console.log(names)
  }


  

