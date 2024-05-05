function daysUntilBakraEid() {
    // Get the current date
    const today = new Date();
  
    // Calculate the Islamic date (Hijri date)
    const hijriDate = hijrijs(today);
  
    // Get the current Islamic month and day
    const hijriMonth = hijriDate.month;
    const hijriDay = hijriDate.day;
  
    // Check if the current month is Dhu al-Hijjah
    if (hijriMonth === 12) {
      // If the current day is greater than 10, set the Eid date for next year
      if (hijriDay > 10) {
        hijriDate.year += 1;
      }
    } else {
      // If the current month is not Dhu al-Hijjah, set the Eid date for this year
      hijriDate.month = 12;
      hijriDate.day = 10;
    }
  
    // Convert the Hijri date back to a Gregorian date
    const eidDate = gregorianjs(hijriDate);
  
    // Calculate the difference in days between today and Eid
    const oneDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil((eidDate.getTime() - today.getTime()) / oneDay);
  
    return daysLeft;
  }
  
  // Helper functions to convert between Gregorian and Hijri dates
  function hijrijs(gregorianDate) {
    // Implementation of the Hijri-Gregorian date conversion algorithm
    // You can use a library like hijri-js or implement your own algorithm
  }
  
  function gregorianjs(hijriDate) {
    // Implementation of the Hijri-Gregorian date conversion algorithm
    // You can use a library like hijri-js or implement your own algorithm
  }
  
  // Example usage
  console.log(daysUntilBakraEid() + " days left until Bakra Eid!");