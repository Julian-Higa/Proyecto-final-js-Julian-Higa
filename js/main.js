
fetch("data/mails.data.js")
    .then((response) => response.json())
    .then((json) => localStorage.setItem("ListaMails", [json]))





const vacuna1 = new Vacuna("Pfizer", "EEUU/ALEMANIA", "95%");
const vacuna2 = new Vacuna("CanSino", "CHINA", "65.7%");
const vacuna3 = new Vacuna("Moderna", "EEUU", "94.1%");
const vacuna4 = new Vacuna("Astrazeneca", "REINO UNIDO", "63%");
const vacuna5 = new Vacuna("Sputnik", "RUSIA", "78.6%");
const vacuna6 = new Vacuna("Sinopharm", "CHINA", "79%");

const vacunas = [vacuna1,vacuna2,vacuna3, vacuna4, vacuna5, vacuna6];
console.log("INICIAL:", vacunas);

inicializarAplicacion();


