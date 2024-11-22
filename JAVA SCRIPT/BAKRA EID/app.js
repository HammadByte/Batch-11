function countdownToEidUlAdha() {
    // Set the date of Eid-ul-Adha (assuming it's on the 10th of Dhul-Hijjah)
    const eidUlAdhaDate = new Date("2024-06-28T00:00:00.000Z"); // adjust the date according to the Islamic calendar
  
    // Get the current date and time
    var now = new Date();
  
    // Calculate the difference between the two dates
var  diff = eidUlAdhaDate.getTime() - now.getTime();
  
    // Calculate the number of days, hours, minutes, and seconds left
    var daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
  
    // Return the results
    return {
      days: daysLeft,
      minutes: minutesLeft,
      seconds: secondsLeft
    };
  }

  // Call the function and log the results
  var countdown = countdownToEidUlAdha();
  document.write(`There are "<br>"${countdown.days} days"<br>", ${countdown.minutes} minutes"<br>", and ${countdown.seconds} seconds "<br>"left until Eid-ul-Adha.`);















