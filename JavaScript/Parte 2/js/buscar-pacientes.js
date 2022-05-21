var botonBuscar = document.querySelector("#buscar-paciente");
var url = "https://alura-es-cursos.github.io/api-pacientes/pacientes.json"

botonBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url);
    xhr.addEventListener("load", function(){

        var errorAjax = document.querySelector("#error-ajax");

        if(xhr.status == 200){
            errorAjax.classList.add("invisible");
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(elemento => {
                adicionarPacienteEnLaTabla(elemento);
            });
        }else {
            errorAjax.classList.remove("invisible");
        }
        
    });
    xhr.send();
});