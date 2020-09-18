var floatAge, floatDays, intWeeks, floatMonths, intFornights;
    floatAge = parseFloat(prompt("Enter your age"));
    floatDays = parseFloat(floatAge * 365.25).toFixed(2); //calculate age in days and then force two decimals
    intWeeks = parseInt(floatDays * 7); //calculate age in weeks 
    floatMonths = parseFloat(floatAge * 12).toFixed(2); //calculate age in months and then forces two decimals
    intFornights = parseInt(floatDays/14); //calculates age in fornights
    alert("Congratulations! Your " + floatAge + " years old. Your age in days: " + floatDays+ ". Your age in weeks: "+ intWeeks+". Your age in months: " +floatMonths+". And finally, your age in fortnights: " + intFornights +"!");