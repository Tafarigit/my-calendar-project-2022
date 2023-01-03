 
const myCalendarDays = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
}

// const myCalendarDays = {
//   January: 31,
//   February: 28,
//   March: 31,
//   April: 30,
//   May: 31,
//   June: 30,
//   July: 31,
//   August: 31,
//   September: 30,
//   October: 31,
//   November: 30,
//   December: 31
// }

// Built an object called myCalendarDays. The key value pairs are names of months(properties) as the keys and the amount of days (values) in the that particular month (except for leap year).

// console.log(myCalendarDays.October)


// const entries = Object.entries(myCalendarDays)

// for (const [month, days] of entries) {
//   console.log(`There are ${days} days in the month of ${month}`);
// }
// console.log(myCalendarDays)
// Here I built a for of loop to loop through the object and produce the month with the corresponding days in the month with a string literal.

const calendarMonths = [{
    month: "January",
    days: 31
    
 },{month: "February",
    days: 28
   }, {month: "March",
       days: 31
   
   }, {month: "April",
       days: 30
   
   },{month: "May",
      days: 31
   
   },{month: "June",
      days: 30
   
   }, {month: "July",
       days: 31
   
   },{month: "August",
      days: 31
   
   }, {month: "September",
       days: 30
   
   },{month: "October",
      days: 31
   
   }, {month: "November",
       days: 30
   
   }, {month: "December",
       days: 31
   
   }]
 // here I built an array of objects with two properties month and days. The values for month are the names of the month in the calendar and values for days are the days in that month.
 
 console.log(calendarMonths[2].month)
 
 // function findCalendarMonthAndDays(month, days) {
   // const entries = Object.entries(calendarMonths)
   // for (const [month, days] of entries) {
 for (let i = 0; i < calendarMonths.length; i++){
   // if (calendarMonths[i].month.length < 6 && calendarMonths[i].days !== 31) 
 
     if (calendarMonths[i].month && calendarMonths[i].days !== 31) 
   // if (calendarMonths[i].month[calendarMonths[i].month.length === "r"] && calendarMonths[i].days > 28) {
      //how do i get all the months that end in "r" to print out.                                   
     console.log(calendarMonths[i].month + " " + calendarMonths[i].days)
   } // if statement that sets the conditions for what we are looking for.
 
       
   // } // end of for loop that iterates through the array of objects and allows for us to get access to different properties and values in the array.
 
 function leapYearCalculator(num) {
   let year = 2024;
   if (year % 4 === 0) {
    num = year
     console.log("February has 29 days");
   }else {
     console.log("February has 28 days")
   }
 
 }
 leapYearCalculator()
 