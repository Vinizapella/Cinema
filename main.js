
document.addEventListener("DOMContentLoaded", function() {

  const botao = document.getElementById("button-notification");
  const painel = document.getElementById("notifications-panel");


    botao.addEventListener("click", function(event) {
      // Impede que o clique "vaze" para a janela (necessário para o passo 4)
      event.stopPropagation(); 
      
      // Adiciona ou remove a classe ".mostrar" do painel
      painel.classList.toggle("mostrar");
    });

    // 4. Ouve por cliques em QUALQUER LUGAR da tela
    window.addEventListener("click", function(event) {
      
      // Se o painel estiver visível (contém "mostrar")
      // E o clique NÃO foi dentro do painel
      if (painel.classList.contains("mostrar") && !painel.contains(event.target)) {
        
        // Remove a classe "mostrar" para FECHAR o painel
        painel.classList.remove("mostrar");
      }
    });

    // 5. Opcional: Impede que cliques DENTRO do painel o fechem
    // (Permite que o usuário clique nos links dentro do painel)
    painel.addEventListener("click", function(event) {
      event.stopPropagation();
    });

  


});



// 1. Pega os elementos do HTML pelos IDs ATUALIZADOS
const form = document.getElementById('search-bar');
const input = document.getElementById('search-bar-input');

// 2. Adiciona o "ouvinte de evento" ao formulário.
//    (Exatamente como antes)
form.addEventListener('submit', function(evento) {
    
    // 3. Impede que o formulário recarregue a página
    evento.preventDefault(); 

    // 4. (Opcional) Mostra o valor no console
    console.log("Texto 'pesquisado':", input.value);

    // 5. Limpa o campo de input (faz o texto "sumir")
    input.value = ""; 
});




// --- Configuração ---
const minhasImagens = [
  'images-index/ghost-face.jpeg',
  'images-index/stranger-things.jpg',
  'images-index/bell.png'
];
const tempoDeTroca = 3000; // Tempo em milissegundos (3000ms = 3 segundos)
// --------------------

// Pega o elemento da imagem no HTML
const imgElement = document.getElementById('slide-show');

// Variável para saber qual imagem está aparecendo
let indiceAtual = 0;

function trocarImagem() {
  // 1. Faz a imagem atual desaparecer (fade-out)
  imgElement.style.opacity = 0;

  // 2. Espera a transição de 0.5s do CSS terminar
  setTimeout(() => {
    // 3. Atualiza o índice para a próxima imagem
    indiceAtual = (indiceAtual + 1) % minhasImagens.length;
    // O '%' (módulo) faz o índice voltar a 0 quando chega no fim da lista

    // 4. Troca a imagem no HTML
    imgElement.src = minhasImagens[indiceAtual];

    // 5. Faz a nova imagem aparecer (fade-in)
    imgElement.style.opacity = 1;

  }, 500); // 500ms = 0.5 segundos (tem que ser igual ao tempo da transição no CSS)
}

// Inicia o temporizador que chama a função "trocarImagem" repetidamente
setInterval(trocarImagem, tempoDeTroca);
