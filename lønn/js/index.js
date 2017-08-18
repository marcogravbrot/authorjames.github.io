var startDate = new Date("August 18, 2017 15:30:00");
var endDate   = new Date();

var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
var perHour = 135
var earned = seconds*(perHour/60/60)

setInterval(function(){
	earned = earned + (perHour/60/60)
  document.getElementById("d").innerHTML = parseFloat(Math.round(earned * 100) / 100).toFixed(2);}, 1000);