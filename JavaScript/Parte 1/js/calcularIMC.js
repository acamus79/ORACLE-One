var pacientes = document.querySelectorAll(".paciente"); 
//console.log(pacientes);
for (let index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];
    var tdPeso = paciente.querySelector(".info-peso"); 
    var tdAltura = paciente.querySelector(".info-altura");
    var tdIMC = paciente.querySelector(".info-imc"); 

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    pesoEsValido = true;
    alturaEsValida = true;

if((peso < 0)||(peso > 1000)){
    console.log("Peso incorrecto");
    tdIMC.textContent = "Peso incorrecto";
    pesoEsValido = false;
    paciente.classList.add("paciente-incorrecto");
}

if((altura < 0)||(altura > 3.0)){
    console.log("Peso incorrecto");
    tdIMC.textContent = "Altura incorrecta";
    alturaEsValida = false;
    paciente.classList.add("paciente-incorrecto");
}

if(pesoEsValido && alturaEsValida){
    tdIMC.textContent = calcularIMC(peso, altura);
}

}

function calcularIMC(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);//toFixed para fijar los decimales
}