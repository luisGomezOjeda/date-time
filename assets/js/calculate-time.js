
const calculateTime = (dateOne = undefined , dateTwo = undefined) => {
 if(dateOne === undefined || dateTwo === undefined) return console.error("no ingresaste las fechas");
 if(!(dateOne instanceof Date) || !(dateTwo instanceof Date)) return console.error("no ingresaste una fecha valida");
 let dateoneLessDatetwo = dateOne.getTime() - dateTwo.getTime();
 let yearsInMiliseconts = 1000 * 60 * 60 * 24 * 365;
 let years = Math.floor(dateoneLessDatetwo / yearsInMiliseconts);
 return (years !== 0)
 ? console.info(`la diferenia entre ${dateOne.getFullYear()} y ${dateTwo.getFullYear()} es de ${Math.abs(years)} años`)
 : console.info(`no hay diferencia entre las dos fechas`)
}
