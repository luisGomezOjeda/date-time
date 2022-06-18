let years_input = document.querySelector(".years-input");

const calculateYears = fecha = undefined => {
 let todayLessDate = new Date().getTime() - fecha.getTime();
 let yearsInMilisecons = 1000 * 60 * 60 * 24 * 365;
 let years = Math.floor(todayLessDate / yearsInMilisecons);

 return (Math.sign(years) === -1)
 ? console.info(`Faltan ${Math.abs(years)} años para el año ${fecha.getFullYear()}`)
 : (Math.sign(years) === 1)
 ? console.info(`Han pasado ${years} años desde el año ${fecha.getFullYear()}`)
 :console.info(`No hay diferencia, estamos en el año actual`);
}