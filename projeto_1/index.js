
const path = require("path");
const fn = require("./funcoes.js");

const caminho = path.join(__dirname, "legendas");
const simbolos=['.','?','-',',','♪','<i>','</i>','_','\r','[',']','(',')','"', ]

fn.lerCaminho(caminho)
.then(fn.endedWithPattern('.srt'))
.then(fn.receiveAndReadFiles)
.then(fn.mesclarElementos)
.then(fn.separateTextBy('\n'))
.then(fn.removeEmptyLines)
.then(fn.removeTimeLines('-->'))
.then(fn.removeOnlyNumbersLine)
.then(fn.removeSimbols(simbolos))
.then(fn.mesclarElementos)
.then(fn.separateTextBy(' '))
.then(fn.removeEmptyLines)
.then(fn.removeOnlyNumbersLine)
.then(fn.agruparPalavras)
.then(fn.ordernarPor('qtde','desc'))
.then(console.log);
