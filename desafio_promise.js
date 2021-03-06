const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

function exibirConteudo(_, conteudo) {
  return conteudo.toString();
}

function lerArquivo(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString());
    });
  });
}

lerArquivo(caminho).then(console.log);
