function countdown() {
    var targetDate = new Date("June 30, 2024 00:00:00").getTime();
    var timer = setInterval(function() {
      var now = new Date().getTime();
      var timeRemaining = targetDate - now;
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      document.getElementById("countdown").innerHTML =
       "Countdown " + days + ":" + hours + ":" + minutes + ":" + seconds + "";
      if (timeRemaining < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Enjoy, have fun!";
      }
    }, 1000);
  }