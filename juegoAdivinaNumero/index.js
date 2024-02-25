let numAle = Math.round(Math.random() *10);

document.getElementById("aleatorio").innerHTML = numAle;


function comprabar(){
    let num = document.getElementById("numAdivinar");
    document.getElementById("resultado").innerHTML = num.value;

    if(num.value == numAle){
        document.getElementById("resultado").innerHTML = "CORRECTO";
    }
    else
    {
        document.getElementById("resultado").innerHTML = "FALLASTE";
    }
}
