curiosidades = [
  "O café é a segunda bebida mais consumida do mundo, atrás apenas da água.",
  "O Brasil é o maior produtor de café do mundo desde o século XIX.",
  "O café arábica é considerado de melhor qualidade e tem sabor mais suave.",
  "O café ajuda a melhorar a concentração e a reduzir a sensação de fadiga.",
  "As primeiras cafeterias surgiram no Oriente Médio no século XV."
];

function mostrarCuriosidade() {
  const indice = Math.floor(Math.random() * curiosidades.length);
  const curiosidade = curiosidades[indice];
  document.getElementById("curiosidade").innerText = curiosidade;
}

document.addEventListener("DOMContentLoaded", function() {
  const botaoSobre = document.getElementById("btnSobre");
  if (botaoSobre) {
    botaoSobre.addEventListener("click", function() {
      window.location.href = "sobre.html";
    });
  }
});