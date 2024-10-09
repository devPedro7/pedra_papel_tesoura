let elementos = document.querySelectorAll('.jogador1 div > img');
let opcaoSelecionada = "";

function limparOpacidade() {
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    }
}

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', (event) => {
        limparOpacidade();
        event.currentTarget.style.opacity = 1;
        opcaoSelecionada = event.currentTarget.getAttribute('option');

        alert(opcaoSelecionada);
    });
}
