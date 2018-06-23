let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// filter: Imperative version
function imperativeFilter(states) {
  let singleWordStates = [];
  states.forEach(function(state) {
    if (state.split(/\s+/).length === 1) {
      singleWordStates.push(state);
    }
  });
  return singleWordStates;
}
console.log(imperativeFilter(states));

// filter: Functional version
function functionalFilter(states) {
    return states.filter(state => state.split(/\s+/).length === 1);
  }
  console.log(functionalFilter(states));



  /// Exercises

  let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

  function containsDakota(states) {
    return states.filter(state => state.includes("Dakota"));
  }
  console.log(containsDakota(states));
  
  function twoWordStates(states) {
    return states.filter(state => state.split(/\s+/).length === 2);
  }
  console.log(twoWordStates(states));

// > "North Dakota too".split(/\s+/).length
// 3
// > "North Dakota too".split(/\s+/)
// [ 'North', 'Dakota', 'too' ]
// >