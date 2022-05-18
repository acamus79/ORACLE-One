var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", function(){
    console.log("escribieron en el input");
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for (let index = 0; index < pacientes.length; index++) {
            var paciente = pacientes[index];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            var expresion = new RegExp(this.value, "i");
    
            if (!expresion.test(nombre)){
                paciente.classList.add("invisible");
            }else{
                paciente.classList.remove("invisible");
            }
        }
    }else{
        for (let index = 0; index < pacientes.length; index++) {
            var paciente = pacientes[index];
            paciente.classList.remove("invisible");
        }
    }

    
});