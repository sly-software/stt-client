export const dateFormater = (date) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  let superString = "";
  let monthInWord = "";

  // Change month to string rep
  switch (month) {
    case 1: {
      monthInWord = "Jan";
      break;
    }
    case 2: {
      monthInWord = "Feb";
      break;
    }
    case 3: {
      monthInWord = "Mar";
      break;
    }
    case 4: {
      monthInWord = "Apr";
      break;
    }
    case 5: {
      monthInWord = "May";
      break;
    }
    case 6: {
      monthInWord = "Jun";
      break;
    }
    case 7: {
      monthInWord = "Jul";
      break;
    }
    case 8: {
      monthInWord = "Aug";
      break;
    }
    case 9: {
      monthInWord = "Sept";
      break;
    }
    case 10: {
      monthInWord = "Oct";
      break;
    }
    case 11: {
      monthInWord = "Nov";
      break;
    }
    case 12: {
      monthInWord = "Dec";
      break;
    }
    default: {
      monthInWord = "";
      break;
    }
  }

  // If date is 11 | 12 | 13
  if (day === 11 || day === 12 || day === 13) {
    return { day, monthInWord, year, superString: "th" };
  }

  // Extract the last digit of month to decide
  // the superscript phrase
  let monthDigit = String(day).length > 1 ? parseInt(String(day)[1]) : day;

  switch (monthDigit) {
    case 1: {
      superString = "st";
      break;
    }
    case 0: {
      superString = "th";
      break;
    }
    case 2: {
      superString = "nd";
      break;
    }
    case 3: {
      superString = "rd";
      break;
    }
    case 4: {
      superString = "th";
      break;
    }
    case 5: {
      superString = "th";
      break;
    }
    case 6: {
      superString = "th";
      break;
    }
    case 7: {
      superString = "th";
      break;
    }
    case 8: {
      superString = "th";
      break;
    }
    case 9: {
      superString = "th";
      break;
    }
    default: {
      superString = "";
      break;
    }
  }

  return { day, monthInWord, year, superString };
};

// console.log(dateFormater("2023-12-11T21:00:00.000Z"));
