
function mostrarCuriosidade() {
  const curiosidades = [
    "O café é cultivado em mais de 70 países ao redor do mundo.",
    "O Brasil é o maior exportador de café do planeta.",
    "O café faz parte da história do Brasil desde o período colonial.",
    "A planta de café pertence à família Rubiaceae e pode viver até 100 anos.",
    "O café Arábica é conhecido por ter sabor suave e doce, enquanto o Robusta tem sabor mais forte e amargo.",
    "O café chegou à Europa no século XVII, ganhando popularidade entre comerciantes e nobres.",
    "No Brasil, o café ajudou a impulsionar o crescimento econômico no século XIX.",
    "O Dia Nacional do Café no Brasil é comemorado em 24 de maio.",
    "Pesquisadores afirmam que o café pode ter efeitos antioxidantes e benéficos para a saúde."
  ];

  const indice = Math.floor(Math.random() * curiosidades.length);
  const curiosidade = curiosidades[indice];

  document.getElementById("curiosidade").textContent = curiosidade;
}
