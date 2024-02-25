//crea un nuevo objeto que nos da la hora, ya sea del pc o del servidor, dependiendo de donde se ejecute js 
const fecha = new Date();

//los meses ser empiezan a contar desde 0, enero = 0 
document.getElementById("fecha").innerHTML = fecha.getMonth()+1;

//con los gets se obtienen datos de fechas y con los metodos sets, se cambian

document.getElementById("fecha").innerHTML = fecha.getFullYear();

fecha.setFullYear(2017);
document.getElementById("fecha").innerHTML = fecha.getFullYear();