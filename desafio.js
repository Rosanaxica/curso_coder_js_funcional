// somar(3)(4)(5)
// calcular(3)(7)(fn)

function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const resultado = somar(3)(4)(5);

console.log(resultado);

function calcular(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b);
    };
  };
}

somarNumeros = (a, b) => a + b;
subtrair = (a, b) => a - b;
multiplicar = (a, b) => a * b;

const resultado2 = calcular(3)(7)(multiplicar);
console.log(resultado2);

const felizNatal = () => console.log("Feliz Natal");
const saudacao = (nome) => "Fala " + nome + " !!!!";
const saudacao = (nome) => `Fala ${nome} !!!!'  `; // crase
const felizNatal = () => {
  console.log("Feliz Natal");
};
const somar = (...numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};

function exec(fn, a, b) {
  return fn(a, b);
}
const somarNoTerminar = (x, y) => console.log(x + y);
const subtrair = (x, y) => x - y;

exec(somarNoTerminar, 56, 38);

const r = exec(subtrair, 50, 25);
console.log(r);

const cb= ()=>{console.log('cb')}
const time = setInterval(cb,1000)