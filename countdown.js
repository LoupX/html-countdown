const travelDate = new Date("oct 25, 2018 15:00:00").getTime(); 
  
const x = setInterval(function() {

    const now = new Date().getTime(); 
    const time = travelDate - now; 
    const days = Math.floor(time / (1000 * 60 * 60 * 24)); 
    const hours = Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((time % (1000 * 60)) / 1000); 

    const el = id => document.getElementById(id) ? document.getElementById(id) : "";
  
    el("day").innerHTML = days ; 
    el("hour").innerHTML = hours; 
    el("minute").innerHTML = minutes;  
    el("second").innerHTML = seconds;  

    if (time < 0){
        clearInterval(x); 
        el("info").innerHTML = "Arriving!"; 
        el("day").innerHTML ='0'; 
        el("hour").innerHTML ='0'; 
        el("minute").innerHTML ='0' ;  
        el("second").innerHTML = '0'; 
    } 
}, 1000); 