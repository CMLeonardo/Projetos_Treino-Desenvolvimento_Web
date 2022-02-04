const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

//-------------------------------------------------------------------------------------------------------//
//Função de apoio para ler o Banco de dados
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_cliente')) ?? []
                            //JSON.stringfy transforma um objeto JSON em String

//Função de apoio para inserir no Banco de dados
const setLocalStorage = (dbCliente) => localStorage.setItem("db_cliente", JSON.stringify(dbCliente))
                            //JSON.parse transforma o objeto String em JSON


//CRUD - create read update delete
const createCliente = (cliente) => {
    const dbCliente = getLocalStorage()
    dbCliente.push (cliente) 
    setLocalStorage(dbCliente)
} 

const readCliente = () => getLocalStorage()

const updateCliente = (index, cliente) => {
    const dbCliente = getLocalStorage()
    dbCliente[index] = cliente
    setLocalStorage(dbCliente)
}    

const deleteCliente = (index) => {
    const dbCliente = getLocalStorage()
    dbCliente.splice(index, 1)
    setLocalStorage(dbCliente)
}//Fim do CRUD


//-------------------------------------------------------------------------------------------------------//
const isValidFields = () => {
    return document.getElementById('formulario').reportValidity()
}                        //reportValidity retorna TRUE apenas se todos os requesitos HTML forem cumpridos

//Interação com o layout
const saveCliente = () => {
    if(isValidFields()) {
        const cliente = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value,
        }
        const index = document.getElementById('nome').dataset.index
        if(index == 'new') {
            createCliente(cliente)
            updateTable()
            closeModal()
        } else {
            console.log('Editando')
        }
    }
}

const createRow = (cliente, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.celular}</td>
        <td>${cliente.cidade}</td>
        <td>
            <button type="button" class="button green" id="editar-${index}">Editar</button>
            <button type="button" class="button red" id="excluir-${index}">Excluir</button>
        </td>
    `
    document.querySelector('#tbCliente>tbody').appendChild(newRow)
    //Aqui insiro no HTML a linha que estava armazenada em memória
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tbCliente>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbCliente = readCliente()
    clearTable()
    dbCliente.forEach(createRow)
}
updateTable()

const fillfields = (cliente) => {
    document.getElementById('nome').value = cliente.nome
    document.getElementById('email').value = cliente.email
    document.getElementById('celular').value = cliente.celular
    document.getElementById('cidade').value = cliente.cidade
    document.getElementById('nome').dataset.index = cliente.index
}

const editCliente = (index) => {
    const clientes = readCliente()[index]
    fillfields(clientes)
    openModal()
}

const editDelete = (event) => {
    if(event.target.type == 'button') {
        const [action, index] = event.target.id.split('-')
        if(action == 'editar') {
            editCliente(index)
        } else {

        }
    }
}


//-------------------------------------------------------------------------------------------------------//
//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveCliente)

document.querySelector('#tbCliente>tbody')
    .addEventListener('click', editDelete)