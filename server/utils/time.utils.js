const convertMillisecondsToYearsAndMonths = (milliseconds) => {
    const millisecondsPerYear = 31557600000; // Approximate number of milliseconds in a year (365.25 days)
    const millisecondsPerMonth = 2629800000; // Approximate number of milliseconds in a month (30.44 days)
  
    const years = Math.floor(milliseconds / millisecondsPerYear);
    const months = Math.floor((milliseconds % millisecondsPerYear) / millisecondsPerMonth);
  
    return { years, months };
}

module.exports = {
    convertMillisecondsToYearsAndMonths
}