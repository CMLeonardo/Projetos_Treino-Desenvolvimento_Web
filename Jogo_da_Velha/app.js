const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
let isCircleTurn;
const winningCombinations = [
    [0, 1 ,2],
    [3, 4 ,5],
    [6, 7 ,8],
    [0, 3 ,6],
    [1, 4 ,7],
    [2, 5 ,8],
    [0, 4 ,8],
    [2, 4 ,6]
];

document.getElementById('startbtn').onclick = function () {
    board.classList.add('active');
}

const comecarJogo = () => {
    for (const cell of cellElements) {
        cell.addEventListener("click", organizandoClick, {once:true});
    }

    isCircleTurn = false;

    board.classList.add("x");
}

const checarVitoria = (currentPlayer) => {
    return winningCombinations.some (combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentPlayer);
        })
    })
}

const checarEmpate = () => {
    return [... cellElements].every((cell) => {
        return cell.classList.contains("x") || cell.classList.contains("circle");
    });
}

const fimJogo = (isDraw) => {
    if (isDraw){
        document.getElementById('wintxt').innerText = 'Empate';
    } else {
        document.getElementById('wintxt').innerText = isCircleTurn ? 'Círculo Venceu' : 'X Venceu';
    }
    document.getElementById('winning').classList.add('active');
}

const mudarSimbolo = () => {
    isCircleTurn = !isCircleTurn;

    board.classList.remove("circle");
    board.classList.remove("x");

    if (isCircleTurn) {
        board.classList.add("circle");
    }else {
        board.classList.add("x");
    }
}

const organizandoClick = (e) => {
    //colocar a marca
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";
    cell.classList.add(classToAdd);

    //Verificar por vitória
    const isWin = checarVitoria (classToAdd);
    
    //Verificar por empate
    const isDraw = checarEmpate ();

    if (isWin) {
        fimJogo(false);
    }else if (isDraw) {
        fimJogo(true);
    }else {
        //Mudar o simbolo
        mudarSimbolo ();
    }
}

comecarJogo();