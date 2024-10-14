document.addEventListener("DOMContentLoaded", function(){

let btryPrcntage= document.getElementById("btryPrcntage");
let btryStatus= document.getElementById("btryStatus");

if(navigator.getBattery) {
  navigator.getBattery().then(function(battery){
  
    function updateBatteryDash() {
      btryPrcntage.innerHTML= Math.floor(battery.level * 100) + "%"; 
      btryStatus.innerHTML= battery.charging ? "charging" : "Not charging";
      btryStatus.style.color= battery.charging ? "green" : "red";

    }
    updateBatteryDash();

    battery.addEventListener("levelchange", updateBatteryDash);
    battery.addEventListener("chargingchange", updateBatteryDash);

  });
}else {
  btryStatus.innerHTML= "Your browser not supported";
}


});