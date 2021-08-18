const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const numeros = [0, 5, 15, 25];
const eMaior = (x) => x > 8; // parametros adicionais
const maior = numeros.filter(eMaior);
console.log(maior);

const qtdMaiorQueZero = (x) => x.qtde > 0;
const pegarNome = (produto) => produto.nome;
const nomeValido = carrinho.filter(qtdMaiorQueZero).map(pegarNome);
console.log(nomeValido);
