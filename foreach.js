let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});


let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});



// Exercise 1. Rewrite forEach function

const sol = () => {
    let a = ["ant","bat","cat", 42];
    for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    }
};

// The forEach loop from Listing 49 rewritten using
// arrow function expressions of increasing elegance.

a.forEach((element) => {
    console.log(element);
  });
  
  a.forEach(element => {
    console.log(element);
  });
  
  a.forEach(element => console.log(element));


// Exercise 2. 

let arr = [8, 17, 42, 99];
arr.sort(function(a, b) { 
    return a - b; 
});

// Exercise 3

let a = [8, 17, 42, 99];

a.forEach((element) => {
console.log(element);
});
