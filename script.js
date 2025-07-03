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

document.getElementById('botao-acessibilidade').addEventListener('click', function () {
    const opcoes = document.getElementById('opcoes-acessibilidade');
    opcoes.classList.toggle('mostrar');
  });

  // Acessibilidade: controle de fonte
  let aumentoCount = 0;
  let diminuicaoCount = 0;
  const limiteMaximo = 2;

  function ajustarFonte(delta) {
    const elementos = document.querySelectorAll(' .quadrado1, .descricao3, .descricao');

    elementos.forEach(el => {
      const estilo = window.getComputedStyle(el);
      const tamanhoAtual = parseFloat(estilo.fontSize);
      const novoTamanho = tamanhoAtual + delta;

      if (novoTamanho >= 12 && novoTamanho <= 40) {
        el.style.fontSize = `${novoTamanho}px`;

        // Responsivo: altura automática, evita estouro
        el.style.height = 'auto';
        el.style.overflowWrap = 'break-word';
        el.style.wordBreak = 'break-word';
      }
    });
  }

  document.getElementById('aumentar-fonte').addEventListener('click', () => {
    if (aumentoCount < limiteMaximo) {
      ajustarFonte(2);
      aumentoCount++;
      diminuicaoCount = Math.max(0, diminuicaoCount - 1);
    }
  });

  document.getElementById('diminuir-fonte').addEventListener('click', () => {
    if (diminuicaoCount < limiteMaximo) {
      ajustarFonte(-2);
      diminuicaoCount++;
      aumentoCount = Math.max(0, aumentoCount - 1);
    }
  });

  // Leitor de texto com voz feminina
  document.getElementById('ler-texto').addEventListener('click', () => {
    const texto = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(texto);

    function escolherVoz() {
      const vozes = speechSynthesis.getVoices();
      let vozFeminina = vozes.find(voz =>
        voz.lang.toLowerCase().startsWith('pt-br') &&
        (
          voz.name.toLowerCase().includes('feminina') ||
          voz.name.toLowerCase().includes('luciana') ||
          voz.name.toLowerCase().includes('fernanda') ||
          voz.name.toLowerCase().includes('google português') ||
          voz.name.toLowerCase().includes('brasil')
        )
      ) || vozes.find(voz =>
        voz.lang.toLowerCase().startsWith('pt-br') && voz.name.toLowerCase().includes('female')
      ) || vozes.find(voz =>
        voz.lang.toLowerCase().startsWith('pt-br')
      );

      if (vozFeminina) utterance.voice = vozFeminina;
      utterance.lang = 'pt-BR';

      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }

    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener('voiceschanged', escolherVoz, { once: true });
    } else {
      escolherVoz();
    }
  });
