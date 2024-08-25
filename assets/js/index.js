document.addEventListener('DOMContentLoaded', function() { // 1. Aguarda o carregamento do DOM antes de executar o código
    // Função para criar o efeito de digitação
    function typeWrite(elemento) { // 2. Define a função que cria o efeito de digitação
        const texto = elemento.innerHTML; // 3. Captura o texto original do elemento
        elemento.innerHTML = ''; // 4. Limpa o conteúdo do elemento para começar a digitação

        // Loop através de cada letra do texto
        texto.split('').forEach((letra, i) => { // 5. Divide o texto em letras e itera sobre cada uma
            setTimeout(() => { // 6. Define um atraso para simular o efeito de digitação
                elemento.innerHTML += letra; // 7. Adiciona cada letra ao conteúdo do elemento com o atraso
            }, 100 * i); // 8. Ajusta o tempo de atraso para cada letra
        });
    }

    const titulo = document.querySelector('#animacao'); // 9. Seleciona o elemento com o texto a ser digitado
    typeWrite(titulo); // 10. Chama a função para iniciar a animação de digitação
});



const links = document.querySelectorAll('.apresentacao__links__link'); // 11. Seleciona todos os links com a classe específica

links.forEach(link => { // 12. Adiciona eventos a cada link selecionado
    link.addEventListener('mouseover', () => { // 13. Detecta quando o mouse passa sobre o link
        link.style.backgroundColor = '#C81111'; // 14. Altera a cor de fundo ao passar o mouse
        link.style.color = '#F6F6F6'; // 15. Muda a cor do texto para branco
    });

    link.addEventListener('mouseout', () => { // 16. Detecta quando o mouse sai do link
        link.style.backgroundColor = '#F6F6F6'; // 17. Restaura a cor de fundo original
        link.style.color = '#000000'; // 18. Restaura a cor do texto original
    });
});



window.addEventListener('load', () => { // 19. Aguarda o carregamento completo da página
    const conteudo = document.querySelector('.apresentacao__conteudo'); // 20. Seleciona o elemento que contém o conteúdo
    conteudo.style.opacity = 0; // 21. Define a opacidade inicial como 0 (invisível)
    setTimeout(() => { // 22. Define um atraso antes de iniciar a transição
        conteudo.style.transition = "opacity 1.5s ease-in-out"; // 23. Aplica a transição de opacidade
        conteudo.style.opacity = 1; // 24. Altera a opacidade para 1 (visível)
    }, 500); // 25. Tempo de atraso antes de começar a transição
});



const imagem = document.querySelector('img'); // 26. Seleciona a imagem que será clicada
imagem.addEventListener('click', () => { // 27. Adiciona um evento de clique na imagem
    imagem.src = imagem.src.includes('Imagem.png') ? './assets/images/Imagem2.png' : './assets/images/Imagem.png'; // 28. Alterna a imagem exibida com base na condição
});
