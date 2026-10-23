// Função que calcula a média e mostra o resultado
function calcularMedia() {

  // Captura os valores digitados
  let nome = document.getElementById("nome").value;
  let nota1 = Number(document.getElementById("nota1").value);
  let nota2 = Number(document.getElementById("nota2").value);
  let nota3 = Number(document.getElementById("nota3").value);

  console.log("Nome:", nome);
  console.log("Nota 1:", nota1);
  console.log("Nota 2:", nota2);
  console.log("Nota 3:", nota3);

  // Calcula a média das 3 notas
  let media = (nota1 + nota2 + nota3) / 3;

  console.log("Média calculada:", media);

  // Define a situação do aluno usando if/else
  let situacao;

  if (media >= 6) {
    situacao = "Aprovado";
  } else {
    situacao = "Reprovado";
  }

  console.log("Situação:", situacao);

  // Passo 1: arredonda a média para 1 casa decimal
  let mediaArredondada = media.toFixed(1);

  // Passo 2: monta o texto que vai aparecer na tela
  let texto = nome + " — Média: " + mediaArredondada
    + " (" + situacao + ")";

  // Passo 3: mostra o texto na tela
  document.getElementById("resultado").innerText = texto;
}

// Quando o botão for clicado, chama a função acima
document.getElementById("btn-calcular")
  .addEventListener("click", calcularMedia);
