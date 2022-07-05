export {chronometer,reset};

let sec = 0;
let min = 0;
let hrs = 0;
let s;

const time_chronometer = document.querySelector(".time-chronometer p");
const chronometer_status = document.querySelector(".chronometer-status");
const chronometer = chronometer_status.addEventListener("click", ()=>{
 if(chronometer_status.checked){
   s = setInterval(() => {
    sec++;
     if(sec >= 60)sec = 0 && min++;
     if(min>= 60)min = 0 && hrs++;
     time_chronometer.innerHTML = `${(hrs>= 10)?hrs:"0"+hrs}:${(min>=10)?min:"0"+min}:${(sec>=10)?sec:"0"+sec}`;
   }, 1000);
 }else{
  clearInterval(s);
 }
});

const reset = ()=>{
 sec = 0;min = 0;hrs = 0;
 clearInterval(s);
 chronometer_status.checked = false;
 time_chronometer.innerHTML = `00:00:00`;
};
