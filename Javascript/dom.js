
function handleButtonClick(event){
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let issueRaised = document.getElementById("issue").value;
    let help = document.getElementById("help");
    
    console.log("I got this!!!");
    const ContactForm = {
        name: firstName,
        email: email,
        phone: phone,
        issueRaised : issueRaised,
        help : help
    };
    console.log(ContactForm);
}



//Destructuring Arrays

// const array = [0,1,2];

// const [x,y,z] = array;
// console.log(x,y,z);

// const restaurant = {
//     categories : ["north indian","south indian", "spicy"]
// }

// let [cat1, ,cat3] = restaurant.categories;
// console.log(cat1,cat3);



// //switching the values

// [cat1,cat3] = [cat3,cat1];
// console.log(cat1,cat3);

// //Nested Arrays
// let arr2 = [2,3,[4,5]];
// const [i,j,[k,l]] = arr2;
// console.log(i,j,k,l);

// const [p=1,q=1,r=1] = [8,9];
// console.log(p,q,r);

// //form

// function add () {
//     var x = document.getElementById("varX").value;
//     var y = document.getElementById("varY").value;
  
    
//     var result = parseFloat(x) + parseFloat(y);
  
//     // (C) OUTPUT RESULT
//     document.getElementById("varResult").value = result;
//     return false; // stop form submit
//   }