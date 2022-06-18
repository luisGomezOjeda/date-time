setInterval(() =>{
 const hours = document.querySelector(".hours");
 const minutes = document.querySelector(".minutes");
 const seconds = document.querySelector(".seconds");
 const date_today = document.querySelector(".date-today p");
 
 const dayWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 let date = new Date();
 
 hours.innerHTML = `${date.getHours()} :`;
 minutes.innerHTML = `${date.getMinutes()} :`;
 seconds.innerHTML = date.getSeconds();
 date_today.innerHTML = `${dayWeek[date.getDay()]} ${date.getDate()} of ${months[date.getMonth()]}`;
},1000);

