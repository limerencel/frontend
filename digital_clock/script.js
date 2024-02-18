function currentTime() {
  const clock = document.getElementById("time");
  const dayInfo = document.getElementById("dayName");

  let time = new Date();
  let dayName = time.getDay();
  let month = time.getMonth();
  let year = time.getFullYear();
  let date = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let am_pm = "AM";
  if (hour == 12) {
    am_pm = "PM";
  }
  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let presentDay =
    week[dayName] + ", " + months[month] + " " + date + ", " + year;

  clock.innerHTML = currentTime;
  dayInfo.innerHTML = presentDay;
}
setInterval(currentTime, 1000);

currentTime();
