const time_input = document.querySelectorAll(".time-input");
const time_result = document.querySelector(".time-result");
const calculateTime = (date_1, date_2) => {
 const dateOne = new Date(date_1);
 const dateTwo = new Date(date_2);
 console.log(typeof date_1);
 let dateoneLessDatetwo = dateOne.getTime() - dateTwo.getTime();
 let yearsInMiliseconts = 1000 * 60 * 60 * 24 * 365;
 let years = Math.floor(dateoneLessDatetwo / yearsInMiliseconts);
 return (years === 0) 
 ?time_result.innerHTML = `no hay diferencia entre las dos fechas`
 :time_result.innerHTML = `la diferenia entre ${dateOne.getFullYear()} y ${dateTwo.getFullYear()} es de ${Math.abs(years)} años`
}


const calculate_Time = () => {
 if(time_input[0].value.length !== 0 || time_input[1].value.length !== 0 )calculateTime(time_input[0].value.split("-").join(),time_input[1].value.split("-").join());
 else alert("no ingresaste las fechas");
}

export{calculate_Time};