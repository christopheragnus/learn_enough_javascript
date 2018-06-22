// Returns the day of the week for the given date.
function dayOfTheWeek(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                           "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];
  }

  // Returns a greeting for the given date.
function greeting(date) {
    if (dayOfTheWeek(date) === "Friday") {
       return 'Its the end of the week. Yay!'
    } else {
       return 'Its not the end of the week!'
    }
  };
  

  // Returns a greeting for the given date.
function greeting(date) {
    return `Hello, world! Happy ${dayOfTheWeek(date)}—now from a file!`
  }