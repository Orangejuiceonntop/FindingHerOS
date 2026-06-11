var currentTime = new Date().toLocaleTimeString();
      var timeText = document.querySelector("#timeElement");
      timeText.innerHTML = currentTime
      setInterval(function() {
        document.querySelector("#timeElement").innerHTML = new Date().toLocaleString();
      }, 1000);