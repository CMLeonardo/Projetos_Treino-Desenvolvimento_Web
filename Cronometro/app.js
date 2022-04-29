window.onload = function () {
  
  var sec = 00; 
  var min = 00;
  var hour = 00;
  var appendhour = document.getElementById("hour")
  var appendmin = document.getElementById("min")
  var appendsec = document.getElementById("sec")
  var buttonStart = document.getElementById('startbtn');
  var buttonStop = document.getElementById('stopbtn');
  var buttonReset = document.getElementById('resetbtn');
  var Interval ;

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
  }

    buttonStop.onclick = function() {
      clearInterval(Interval);
  }

  buttonReset.onclick = function() {
    clearInterval(Interval);
      hour = "00";
      min = "00";
      sec = "00";
      appendhour.innerHTML = hour;
      appendmin.innerHTML = min;
      appendsec.innerHTML = sec;
  }

  function startTimer () {
    sec++; 
    if(sec <= 9){
      appendsec.innerHTML = "0" + sec;
    }
    if (sec > 9){
      appendsec.innerHTML = sec; 
    } 
    if (sec >= 60) {
      min++;
      appendmin.innerHTML = "0" + min;
      sec = 0;
      appendsec.innerHTML = "0" + 0;
    }
    if (min > 9){
      appendmin.innerHTML = min;
    }
    if (min >= 60) {
      hour++;
      appendhour.innerHTML = "0" + hour;
      min = 0;
      appendmin.innerHTML = "0" + 0;
      sec = 0;
      appendsec.innerHTML = "0" + 0;
    }
  }
}

//Mudando os temas
var checkbox = document.getElementById("toggle");
checkbox.addEventListener("change",
function mudandoTemas () {
    if (checkbox.checked) {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }
});