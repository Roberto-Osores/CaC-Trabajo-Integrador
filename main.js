
let clickResumen = document.querySelector("#Resumen");
clickResumen.addEventListener("click", controlForm);



function controlForm(){
    let nombre = document.querySelector("#Nombre").value;
    let apellido = document.querySelector("#Apellido").value;
    let email = document.querySelector("#Email").value;
    let cantidad = document.querySelector("#ticketsQuantity").value;

    const nombreRegex = /^[A-Za-zÑñáéíóú]+[ ]?[A-Za-zÑñáéíóú]+$/;
    const apellidoRegex = /^[A-Za-zÑñáéíóú]+$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const cantidadRegex = /^[1-9]\d*$/;

    document.querySelector("#ticketsOutput").textContent = "Total a pagar:";

    if(nombreRegex.test(nombre)){
       Nombre.classList.remove('campo-invalido');
    }
    else {
        Nombre.classList.add('campo-invalido');  
    }

    if (nombreRegex.test(apellido)){
        Apellido.classList.remove('campo-invalido');
     }
     else {
         Apellido.classList.add('campo-invalido'); 
     }

     if (emailRegex.test(email)){
        Email.classList.remove('campo-invalido');
     }
     else {
        Email.classList.add('campo-invalido');
     }

     if(cantidadRegex.test(cantidad)){
        ticketsQuantity.classList.remove('campo-invalido');
     }
     else{
        ticketsQuantity.classList.add('campo-invalido');
     }

   if ((nombreRegex.test(nombre)) && (nombreRegex.test(apellido)) && (emailRegex.test(email)) && (cantidadRegex.test(cantidad))){
ticketsPrice();
document.querySelector('#alerta').innerHTML = "Exito!";
alerta.classList.remove('error');
alerta.classList.add('exito');
   }
   else{
   document.querySelector('#alerta').innerHTML = "Uno o mas Campos fueron llenados incorrectamente. Intentalo nuevamente.";
   alerta.classList.remove('exito');
   alerta.classList.add('error');
   }
}


function ticketsPrice() {
    let ticketsQuantity = document.querySelector("#ticketsQuantity");
    

    if (Number(ticketsQuantity.value)) {
        let ticketsCategory = document.querySelector("#ticketsCategory");
        console.log(ticketsCategory.value)
        let totalPayment;

        switch (ticketsCategory.value) {
            case "Estudiante": {
                totalPayment = 200 * ticketsQuantity.value * 0.2;
                console.log (totalPayment);
                break;
            }
            case "Trainee": {
                totalPayment = 200 * ticketsQuantity.value * 0.5;
                console.log (totalPayment);
                break;
            }
            case "Junior": {
                totalPayment = 200 * ticketsQuantity.value * 0.85;
                console.log (totalPayment);
                break;
            }
            
        }

        document.querySelector("#ticketsOutput").textContent = `Total a pagar: $${totalPayment}`;
        
     }
 
 }