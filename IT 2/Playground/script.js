var countdown = document.getElementById("countdown");
var count = 5;
var link = "https://www.youtube.com/embed/ZoakPxzqbH0?autoplay=1";

countdown.innerHTML = count;
console.log(1);
var timer = setInterval(function() {
    count = count-1;

    if (count > 0) {
    	countdown.innerHTML = count;
    } else {
        countdown.innerHTML = "MMM";
    }
                      
    if (count == 0) {
        window.location.href = link
        clearInterval(timer);
    }
}, 1000);