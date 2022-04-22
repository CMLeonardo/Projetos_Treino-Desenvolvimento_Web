window.onload = function valorGorjeta() {    
    var Tip = document.getElementById('valueTip');    
    Tip.addEventListener("input", function () {
    document.querySelector("#tip").innerHTML = Tip.value;
    }, false);
}

document.querySelector('#push').onclick = function () {
    var valueBill = document.getElementById('valueBill').value;
    var valueTip = document.getElementById('valueTip').value;
    var field = document.getElementsByClassName('field');
    var result = calcularGorjeta (valueBill, valueTip);
    adicionarResposta (result);
    for (var i = 0; i < field.length; i++){ // Limpando a área de adição de afazeres depois de adiciona-los
        field[i].value = '';
    } 

    valueTip = 50;
}

// Adicionando a resposta padrão na área de resposta
function adicionarResposta (result) {
    document.querySelector('#answer').innerHTML 
        = `<h1>Conta com Gorjeta</h1>
                <p>${result}</p>`;
}

function calcularGorjeta (valueBill, valueTip) {
    var result = parseFloat(valueBill) + parseFloat(valueBill * (valueTip / 100));
    return result.toFixed(2);
}