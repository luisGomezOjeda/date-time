const years_input = document.querySelector(".years-input");
const years_result = document.querySelector(".years-result");


const calculateYears = newDate => {
 let fecha = new Date(newDate);
 let todayLessDate = new Date().getTime() - fecha.getTime();
 let yearsInMilisecons = 1000 * 60 * 60 * 24 * 365;
 let years = Math.floor(todayLessDate / yearsInMilisecons);

 return (Math.sign(years) === -1)
 ? years_result.innerHTML = `Faltan ${Math.abs(years)} años para el año ${fecha.getFullYear()}`
 : (Math.sign(years) === 1)
 ? years_result.innerHTML = `Han pasado ${years} años desde el año ${fecha.getFullYear()}`
 : years_result.innerHTML = `No hay diferencia, estamos en el año actual`;
}

const calculate_y = () =>calculateYears(years_input.value.split("-").join());


