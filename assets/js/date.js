setInterval(() =>{
 const hours = document.querySelector(".hours");
 const minutes = document.querySelector(".minutes");
 const seconds = document.querySelector(".seconds");
 const date_today = document.querySelector(".date-today p");
 const dayWeek = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
 const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
 
 let date = new Date();
 
 hours.innerHTML = `${date.getHours()} :`;
 minutes.innerHTML = `${date.getMinutes()} :`;
 seconds.innerHTML = date.getSeconds();
 date_today.innerHTML = `${dayWeek[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]}`;
},1000);


