const fs = require("fs");

function endedWithPattern(pattern) {
  return function (array) {
    return array.filter((el) => el.endsWith(pattern));
  };
}
function lerCaminho(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const  arq = fs.readdirSync(caminho);
      const arqComplete= arq.map((arquivo) =>
        caminhoDoArquivo(caminho, arquivo)
      );
      resolve(arqComplete);
    } catch (e) {
      reject(e);
    }
  });
}

function caminhoDoArquivo(caminho, filename) {
  return `${caminho}\\${filename}`;
}

function readEachFile(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function receiveAndReadFiles(caminhos) {
  return Promise.all(caminhos.map((caminho) => readEachFile(caminho)));
}

function removeEmptyLines(array) {
  return array.filter((el) => el.trim());
}
function removeTimeLines(pattern) {
  return function (array) {
    return array.filter((el) => !el.includes(pattern));
  };
}
function removeOnlyNumbersLine(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

function removeSimbols(simbols) {
  return function (array) {
    return array.map((el) => {
      return simbols.reduce((acc, symbol) => {
        return acc.split(symbol).join("");
      }, el);
    });
  };
}

const mesclarElementos = (array) => array.join(" ");

function separateTextBy(symbol) {
  return function (text) {
    return text.split(symbol);
  };
}

function ordernarPor(attr, ordem = "asc") {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr];
    const desc = (o1, o2) => o2[attr] - o1[attr];
    return [...array].sort(ordem === "asc" ? asc : desc);
  };
}

function agruparPalavras(palavras) {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const el = palavra.toLowerCase();
      const qtde = acc[el] ? acc[el].qtde + 1 : 1;
      acc[el] = { elemento: el, qtde };
      return acc;
    }, {})
  );
}

module.exports = {
  lerCaminho,
  endedWithPattern,
  readEachFile,
  receiveAndReadFiles,
  removeEmptyLines,
  removeTimeLines,
  removeOnlyNumbersLine,
  removeSimbols,
  mesclarElementos,
  separateTextBy,
  agruparPalavras,
  ordernarPor,
};
