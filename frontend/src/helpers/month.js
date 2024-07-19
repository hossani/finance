export default function getMonthName(date) {
    const monthNames = [
      "janvier", "février", "mars", "avril", "mai", "juin",
      "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];
    
    return monthNames[date.getMonth()];
  }
  
