

document.querySelector('#push').onclick = function () {
    var name = document.getElementById('name').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var field = document.getElementsByClassName('field');
    var imc = calcularIMC (weight, height);
    var classification = classificarIMC (imc);
    adicionarResposta (name, imc, classification);
    for (var i = 0; i < field.length; i++){ // Limpando a área de adição de afazeres depois de adiciona-los
        field[i].value = '';
    } 
}

// Adicionando a resposta padrão na área de resposta
function adicionarResposta (name, imc, classification) {
    document.querySelector('#answer').innerHTML 
        = `<p> <b>${name}</b> seu <b>IMC é ${imc}</b> e você está <b>${classification}</b>`;
}

function calcularIMC (weight, height) {
    var imc = (weight/Math.pow(height, 2));
    return imc.toFixed(2);
}

function classificarIMC (imc) {
    if (imc < 18.5) { return('abaixo do peso'); }
    else if (imc > 18.5 && imc <= 24.9) {return('com o peso normal');} 
    else if (imc > 25 && imc <= 29.9) {return('acima do peso (sobrepeso)');}
    else if (imc > 30 && imc <= 34.9) {return('com obesidade I');}    
    else if (imc > 35 && imc <= 39.9) {return('com obesidade II');}
    else if (imc > 40) {return('com obesidade III');}
    else {return('default')}
}