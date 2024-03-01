// create a function called getFormattedDate(date) that takes a date object and returns 
// a string in the format "year-month-day"

// Path: util/date.js

export const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

export function getDateMinusDates(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}