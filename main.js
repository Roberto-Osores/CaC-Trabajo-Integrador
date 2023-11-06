
let clickResumen = document.querySelector("#Resumen");
clickResumen.addEventListener("click", ticketsPrice);





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