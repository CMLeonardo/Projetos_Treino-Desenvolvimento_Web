// Validação de que tem algo escrito na barra de afazeres
document.querySelector('#push').onclick = () => {
    if(document.querySelector('#newtask input').value.length == 0){ 
        alert("Por favor coloque um afazer")
    } 
    else {
        adicionarTask();
        deletarTask();
        riscarTask();
        document.querySelector("#newtask input").value = ""; // Limpando a área de adição de afazeres depois de adiciona-los
    }
}

// Adicionando coisas a área de afazeres
function adicionarTask() {
    document.querySelector('#tasks').innerHTML 
        += `<div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
}

// Deletando coisas da área de afazeres
function deletarTask () {
    var task_selecionada = document.querySelectorAll(".delete");
    for (var i = 0 ; i < task_selecionada.length; i++) {
        task_selecionada[i].onclick = function () {this.parentNode.remove();}
    }
}

// Riscando coisas da área de afazeres
function riscarTask () {
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {this.classList.toggle('completed');}
    }
}