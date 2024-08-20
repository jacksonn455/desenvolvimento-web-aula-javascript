document.addEventListener('DOMContentLoaded', function() {
    function typeWrite(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 100 * i);
        });
    }

    const nomeTitulo = document.querySelector('#animacao');
    typeWrite(nomeTitulo);
});
