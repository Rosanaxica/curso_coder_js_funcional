const numeros = [0, 5, 15, 25];
const multiplicar = (x, i, a) => x * 2 + i + a.length; // parametros adicionais
const multiplicados = numeros.map(multiplicar);
console.log(multiplicados);

const nomes = ["Isabela", "Erica", "Laura", "Tabatha", "Taci"];
const primeiraLetra = (texto) => texto[0];
const letras = nomes.map(primeiraLetra);
console.log(letras);

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.10 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.20 },
];

const pegarNome = (produto) => produto.nome;
const nomeProdutos = carrinho.map(pegarNome);
console.log(nomeProdutos);

const valorXQuantidade = (produto) => produto.qtde * produto.preco;
const valorTotal = carrinho.map(valorXQuantidade);
console.log(valorTotal);
