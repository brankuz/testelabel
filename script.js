const texto =
  "Era uma vez um lugar onde os caminhos não eram o que pareciam. Cada escolha, uma direção. Cada direção, uma revelação. Você está pronto? Então entre.";

const container = document.querySelector(".text-container");
let index = 0;

function escrever() {
  if (index < texto.length) {
    container.innerHTML += texto.charAt(index);
    index++;

    // Quando passar da metade do texto, revela a imagem
    if (index === Math.floor(texto.length / 2)) {
      document.body.classList.add("mostrar-imagem");
      document.body.style.setProperty("--imagem-visivel", "1");
      document.body.style.setProperty("opacity", "1");
      document.body.querySelector("::before");
      document.body.style.transition = "opacity 2s ease";
      document.body.style.opacity = "1";
      document.body.style.setProperty("transition", "opacity 2s ease");
      document.body.style.setProperty("opacity", "1");
      document.body.classList.add("mostrar-imagem");
      document.body.style.setProperty("opacity", "1");
      document.body.style.setProperty("transition", "opacity 2s ease");
      document.body.style.opacity = "1";
      document.querySelector("body.texto::before").style.opacity = "1";
    }

    setTimeout(escrever, 50);
  }
}

document.addEventListener("DOMContentLoaded", escrever);
