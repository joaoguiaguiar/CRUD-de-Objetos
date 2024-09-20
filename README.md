#Projeto CRUD Objetos 




Código modelo da li "Cadastro de usuario": 

<li class="item-usuario is-flex is-justify-content-space-between" data-value="">
    <div class="user-info">
        <input type="checkbox" class="is-clickable" />  
        <span class="is-size-5"></span> <!-- Nome do usuário -->
        <span class="is-size-5"></span> <!-- E-mail do usuário -->
        <span class="is-size-5"></span> <!-- Telefone do usuário -->
    </div>
    <div>
        <i class="fa-regular fa-floppy-disk is-clickable salvar"></i>
        <i class="fa-regular fa-pen-to-square is-clickable editar"></i>
        <i class="fa-solid fa-trash is-clickable deletar"></i>
    </div>
</li>

Input com código refatorado:

    <div>
        <input type="checkbox" checked class="is-clickable" />  
        <span class="itens-comprados is-size-5">${elemento.valor}</span>
    </div>

Ícones de edição:

    <i class="fa-regular fa-floppy-disk is-clickable"></i><i class="fa-regular is-clickable fa-pen-to-square editar"></i>
