let numDays = 420;

years = Math.floor(numDays / 365);

days_1 = numDays % 365;

months = Math.floor(days_1 / 30);

days = days_1 % 30;

console.log(years + " year, " + months + " months, " + days + " days.")