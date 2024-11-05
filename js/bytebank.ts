let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}

const elementoFormulario = document.querySelector(".block-nueva-transaccion form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, rellene todos los campos de la transacción");
        return;
    }

    const inputTipoTransaccion = elementoFormulario.querySelector("#tipoTransaccion") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputFecha = elementoFormulario.querySelector("#fecha") as HTMLInputElement;

    let tipoTransaccion: string = inputTipoTransaccion.value;
    let valor: number = inputValor.valueAsNumber;
    let fecha: Date = new Date(inputFecha.value);

    if (tipoTransaccion == "Depósito") {
        saldo += valor;
    } else if (tipoTransaccion == "Transferência" || tipoTransaccion == "Pagamento de Boleto") {
        saldo -= valor;
    } else {
        alert("Tipo de transacción invalida");
        return;
    }

    elementoSaldo.textContent = saldo.toString();

    const nuevaTransaccion = {
        tipoTransaccion: tipoTransaccion,
        valor: valor,
        fecha: fecha
    };

    console.log(nuevaTransaccion);
    elementoFormulario.reset();
});