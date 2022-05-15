/*
    Objetivo 1 - Quando passar o mouse em cima do persoangem temos que:
        
        - colocar a classe selecionado no persoagem em que passasmos o mouse em cima para adicionar a aniamação nele.
        
        - retirar classe selecionado do personagem que está selecionado
 
    Objetivo 2 - Quando passar o mouse em cima do personagem, trocar a imagem e o nome do personagem grande.
        
        - Alterar a imagem do jogador 1.
        
        - Alterar o nome do jogador 1.       
        
*/



const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;
        
        if( idSelecionado === 'ultron') return;

        /*
        Objetivo 1 - Quando passar o mouse em cima do persoangem da listagem temos que:

        - colocar a classe selecionado no persoagem em que passasmos o mouse em cima para adicionar a aniamação nele.

        - retirar classe selecionado do personagem que está selecionado
        */
        const persoagemSelecionado = document.querySelector('.selecionado');
        persoagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        /*
            Objetivo 2 - Quando passar o mouse em cima do personagem da listagem, trocar a imagem e o nome do personagem grande.
                
                - Alterar a imagem do jogador 1.
                
                - Alterar o nome do jogador 1.
        */        
        
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeSelecionado = personagem.getAttribute('data-name');
        const nomeJogador1 = document.getElementById(id="nome-jogador1");
        nomeJogador1.innerHTML = nomeSelecionado;

        //console.log(imagemJogador1);
        
    })
})



