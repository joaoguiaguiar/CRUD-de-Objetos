let listaDeCadastro = [];
let itemAEditar;

const form = document.getElementById('form-usuario');
const ulCadastrados = document.getElementById('lista-usuarios');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    if (itemAEditar !== undefined) {
        salvarEdicao(); 
    } else {
        salvarItem(); 
    }
    mostrarItem();
});

function salvarItem() {
    const nomeUsuario = document.getElementById('nome-usuario').value;
    const emailUsuario = document.getElementById('email-usuario').value;
    const telefoneUsuario = document.getElementById('telefone-usuario').value;

    listaDeCadastro.push({
        valor1: nomeUsuario,
        valor2: emailUsuario,
        valor3: telefoneUsuario
    });

    document.getElementById('nome-usuario').value = '';
    document.getElementById('email-usuario').value = '';
    document.getElementById('telefone-usuario').value = '';

    console.log(listaDeCadastro);
}

function mostrarItem() {
    ulCadastrados.innerHTML = '';

    listaDeCadastro.forEach((elemento, index) => {
        ulCadastrados.innerHTML += `
            <li class="item-usuario is-flex is-justify-content-space-between" data-value="${index}">
                <div class="user-info">
                    ${index === Number(itemAEditar) ? `
                        <input type="text" value="${elemento.valor1}" placeholder="Nome" /> /
                        <input type="text" value="${elemento.valor2}" placeholder="Email" /> /
                        <input type="text" value="${elemento.valor3}" placeholder="Telefone" /> /
                    ` : `
                        <span class="is-size-5">${elemento.valor1}</span> /
                        <span class="is-size-5">${elemento.valor2}</span> /
                        <span class="is-size-5">${elemento.valor3}</span> /
                    `}
                </div>
                <div>
                    ${index === Number(itemAEditar) ? `
                        <button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>
                    ` : `<i class="fa-regular fa-pen-to-square is-clickable editar"></i>`}
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
        `;
    });

    const deletarObjetos = document.querySelectorAll(".deletar");

    deletarObjetos.forEach(i => {
        i.addEventListener('click', (evento) => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value');
            listaDeCadastro.splice(valorDoElemento, 1);
            mostrarItem();
        });
    });

    const editarItens = document.querySelectorAll(".editar");

    editarItens.forEach(i => {
        i.addEventListener('click', (evento) => {
            itemAEditar = evento.target.parentElement.parentElement.getAttribute('data-value');
            mostrarItem();
        });
    });
}

function salvarEdicao() {
    const inputs = document.querySelectorAll(`[data-value="${itemAEditar}"] input[type="text"]`);
    listaDeCadastro[itemAEditar].valor1 = inputs[0].value; 
    listaDeCadastro[itemAEditar].valor2 = inputs[1].value;
    listaDeCadastro[itemAEditar].valor3 = inputs[2].value; 

    console.log(listaDeCadastro);
    itemAEditar = undefined; 
    mostrarItem();
}
