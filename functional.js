let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// map: Imperative version
function imperativeMap(states) {
  let urlStates = [];
  states.forEach(function(state) {
    urlStates.push(state.toLowerCase().split(/\s+/).join("-"));
  });
  return urlStates;
}
console.log(imperativeMap(states));

// map: Functional version
function functionalMap(states) {
  return states.map(state => state.toLowerCase().split(/\s+/).join('-'));
}
console.log(functionalMap(states));

//////////////////////////////

//////////////////////////////



let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

// map: Imperative version
function imperativeMap(states) {
  let urlStates = [];
  states.forEach(function(state) {
    urlStates.push(urlify(state));
  });
  return urlStates;
}
console.log(imperativeMap(states));

// map: Functional version
function functionalMap(states) {
  return states.map(state => urlify(state));
}
console.log(functionalMap(states));


//////////////////////
//Exercises

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];


function urlifyform(string) {
    return string.toLowerCase().split(/\s+/).join('-');
  }  

function functionalMap(states) {
    let arr = states.map(urlifyform(states));

}
console.log(functionalMap(states));

////////////
//Solution

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

function functionalMap(states) {
  return states.map(state => urlify(state));
}

function fullAddress(states) {
  return states.map(state => "https://example.com/" + state);
}

console.log(functionalMap(states));
console.log(fullAddress(functionalMap(states)));