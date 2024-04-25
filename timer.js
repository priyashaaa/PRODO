function startPomodoro() {
  var workDuration = 25 * 60; // 25 minutes in seconds
  var breakDuration = 5 * 60; // 5 minutes in seconds
  
  function countdown(duration) {
    var timer = setInterval(function() {
      var minutes = Math.floor(duration / 60);
      var seconds = duration % 60;
      
      var timerDisplay = document.getElementById("timer");
      timerDisplay.innerHTML = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
      
      if (--duration < 0) {
        clearInterval(timer);
        if (duration === -1) {
          timerDisplay.innerHTML = "Break time!";
          setTimeout(function() {
            startBreak();
          }, 1000); // Wait 1 second before starting break
        }
      }
    }, 1000); // Update every second
  }
  
  function startBreak() {
    countdown(breakDuration);
  }
  
  countdown(workDuration);
}
