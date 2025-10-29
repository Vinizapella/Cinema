const openButtonBell = document.getElementById('button-notification');

openButtonBell.addEventListener('click', function(){
  createPopOut();
});

function createPopOut(){
  const popOutOverlay = document.createElement('div');
  popOutOverlay.className = 'pop-out';

  const popOutContent = document.createElement('div');
  popOutContent.className = 'pop-out-content';


}






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
