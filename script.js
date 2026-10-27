// Mate do louco: 1.f3 e5 2.g4 Dh4#
// Maiúsculas = peças brancas, minúsculas = pretas, "." = casa vazia
var posicao = [
  "rnb.kbnr",
  "pppp.ppp",
  "........",
  "....p...",
  "......Pq",
  ".....P..",
  "PPPPP..P",
  "RNBQKBNR"
];
var glifo = {r:"♜", n:"♞", b:"♝", q:"♛", k:"♚", p:"♟"};
var tabuleiro = document.getElementById("board");
var html = "";

for (var l = 0; l < 8; l++) {
  for (var c = 0; c < 8; c++) {
    var peca = posicao[l][c];
    var classe = "sq " + ((l + c) % 2 === 0 ? "l" : "d");
    var texto = "";
    if (peca !== ".") {
      classe += peca === peca.toUpperCase() ? " w" : " b";
      texto = glifo[peca.toLowerCase()];
    }
    if (l === 7 && c === 4) classe += " hit"; // rei branco em xeque-mate
    html += '<div class="' + classe + '">' + texto + "</div>";
  }
}
tabuleiro.innerHTML = html;
