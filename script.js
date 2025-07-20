const perguntas = [
  { texto: "A sustentabilidade é importante para o futuro do planeta.", resposta: true },
  { texto: "Reciclagem prejudica o meio ambiente.", resposta: false },
  { texto: "Economizar água é um hábito sustentável.", resposta: true }
];

let indice = 0;

function mostrarPergunta() {
  document.getElementById("question").innerText = perguntas[indice].texto;
  document.getElementById("feedback").innerText = "";
}

function responder(userResp) {
  const correta = perguntas[indice].resposta;
  const feedback = userResp === correta ? "✅ Correto!" : "❌ Incorreto.";
  document.getElementById("feedback").innerText = feedback;
  indice = (indice + 1) % perguntas.length;
  setTimeout(mostrarPergunta, 2000);
}

mostrarPergunta();
