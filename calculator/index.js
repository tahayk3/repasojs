function agregar(valor){
    document.getElementById("screen").value = document.getElementById("screen").value + valor;
}

function borrar(){
    document.getElementById("screen").value = "";
}

function operar(){
    const datosOperar = document.getElementById("screen").value;
    const resultado = eval(datosOperar);
    document.getElementById("screen").value = resultado;
}








