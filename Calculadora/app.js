function insertnum(input, n1) {
    if (input.value == null || input.value == "0") input.value = n1
    else input.value += n1
}

function calcularnum(form) {
    form.display.value = eval(form.display.value);
}

function apagarnum (input) {
     input.value = input.value.substring(0, input.value.length -1);
}