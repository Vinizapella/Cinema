
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
