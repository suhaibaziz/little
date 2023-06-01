export const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    const hours = [];
    const targetDate = new Date(date);
  
    for (let i = 0; i < 5; i++) {
      const timestamp = new Date(targetDate);
      const randomHour = Math.floor(Math.random() * 24);
      timestamp.setHours(randomHour);
      const hourString = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      hours.push(hourString);
    }
  
    return hours;
};
export const submitAPI = function(formData) {
    return true;
};
