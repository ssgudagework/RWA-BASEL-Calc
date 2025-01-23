let a=5;
console.log(5);

function logger(){
    console.log("My name is Shraddha.");
}
logger();
logger();

function fruitCount(apples,oranges){
    let juice = (`Juice with ${apples} apples and ${oranges} oranges.`);
    return juice;
}

const myJuice = fruitCount(2,1);
console.log(myJuice);

function examTime(){
    console.log(`Today, there is exam on 4PM`);
}
examTime();

function examTime(time){
    console.log(`Today, there is exam on ${time}PM`);
}
examTime(4);

function examTime(time,date){
    console.log(`There is exam on ${time}PM on ${date} January`);
}
examTime(4,10);

const age1 = calcAge(2000);
console.log("Age1 before function delaration is: ",age1);
function calcAge(Byear){
    return 2023 - Byear;
}

const age12 = calcAge(2000);
console.log("Age1 after function delaration is: ",age12);

//function expression

//const age233 = calcAge2(2000);   // This gies an erroe like you used a function before declaration. 
//console.log("Age2 before function delaration is: ",age233);


function calcAge2(Byear) {
    return 2023 - Byear;
}

const age23 = calcAge2(2000);
console.log("Age2 after function delaration is: ",age23);

const calcAge3 = (Byear)=>{
    return 2023 - Byear;
}

const myAge = calcAge3(1999);
console.log(`My age is: `,myAge);

//
const calcAge4 = Byear => 2037-Byear;
console.log(calcAge4(2000));

const NewAge = calcAge4(2000);

console.log(NewAge)


//Array

const student1 = "Shraddha";
const student2 = "Vaishnavi";
const student3 = "Argit";

const students = ["Shraddha","Vaishnavi","Argit"];
console.log(students);

// new approch

const years = new Array(2023,2024,2025);
console.log(years);

console.log(students[0]);
console.log(students[1]);

console.log(years.length);

//Basic Array Operation

const newLength = students.push("Saipan"); // return only new length
console.log(students);
console.log(newLength);

students.pop(); //remove last element
console.log(students);

students.shift(); //remove first element
console.log(students);

console.log(students.indexOf("Vaishnavi"));

const name = "Shraddha";
const nameArray = name.split("");
console.log(nameArray);

const newName = "s-a-i-p-a-n";
const newnameArray = newName.split("-");
console.log(newnameArray);


console.log(students.includes("Shraddha")); //return false as name is not there in list
console.log(students.includes("Argit")); // return true

//Objects

let user = {
    Name : "Shruti",
    age: 23,
    email: "shruti@gmail.com",
    emailVerified: true
}
console.log(user);

//dot notation
console.log(user.Name);

// add new element
user.location = "Delhi";
user['insta'] = "@its_shruti";
console.log(user);


/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). 
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, 
together with the full name and the respective BMI.Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.GOOD LUCK 😀*/

let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
}
let jonh = {
    fullName: "Jonh Smith",
    mass: 92,
    height: 1.95,
}

const calcBMI = (mass,height)=>{
    return mass / (height * height);
}

const markBMI = calcBMI(mark.mass,mark.height);
console.log(markBMI);
const jonhBMI = calcBMI(jonh.mass,jonh.height);
console.log(jonhBMI);

if(jonhBMI>markBMI){
    console.log(`John Smith's BMI ${jonhBMI} is higher than Mark Miller's ${markBMI}!`)
}
else{
    console.log(`${mark.fullName}'s BMI ${markBMI} is higher than ${jonh.fullName}'s ${jonhBMI}!`)
}


//For loop

for(let rep=1; rep<=10;rep++){
    console.log(`Lifting weights repetition ${rep}`);
}

let forloop = [
    "Mark Miller", 
    2037-1999, 
    "Teacher", 
    ['Michael','Peter','Steven'],
    true
];

for(let j = 1;j<forloop.length; j++){
    console.log(forloop[j],typeof[j]);
}

