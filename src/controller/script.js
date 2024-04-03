// Exercício 1
let nota1 = 8;
let nota2 = 9;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;
console.log(`A média é ${media}`);

//Exercício 2
const numerosTais = [15, 8, 90, 75, 102, 6, 2];
const menorNumero = Math.min(...numerosTais);
const maiorNumero = Math.max(...numerosTais);

console.log(`O menor número da lista é ${menorNumero} e o maior número da lista é ${maiorNumero}`);

//Exercício 3
function ordemCrescente(array) {
  return array.sort((a, b) => a - b);
}

const ordemCrescenteResultado = ordemCrescente([12, 5, 23, 17, 8, 14, 3, 19]);
console.log(`Os Números em ordem são é:${ordemCrescenteResultado}`);

// Exercício 4
function primos(array) {
  return array.filter((num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  });
}

const primosResultado = primos([23, 16, 11, 8, 19, 14, 5, 21]);
console.log(`Os Número primos são: ${primosResultado}`);


// Exercício 5
// Função para contar o número de palavras em uma frase
function contarPalavras(frase) {
  const palavras = frase.split(" ");
  return palavras.length;
}

const fraseUsuario = "What is Lorem Ipsum?";
const numeroPalavras = contarPalavras(fraseUsuario);
console.log(`A frase "${fraseUsuario}" possui ${numeroPalavras} palavras.`);


// Exercício 6
  // Função para calcular o fatorial de um número
function calcularFatorial(numero) {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}
const fatorial12 = calcularFatorial(12);
console.log(`O fatorial de 12 é: ${fatorial12}`);


// Exercício 7
// Função para calcular o total da compra
function calcularTotalCompra(precos) {
  let total = 0;
  for (const preco of precos) {
    total += preco;
  }
  return total.toFixed(2);
}
const precosItens = [2.5, 3.75, 1.99];
const totalCompra = calcularTotalCompra(precosItens);
console.log(`O total da compra é: R$ ${totalCompra}`);

// Exercício 8
// Função para calcular a multa da biblioteca
function calcularMultaBiblioteca(diasAtraso, valorMultaDiaria) {
  const multaTotal = diasAtraso * valorMultaDiaria;
  return multaTotal.toFixed(2);
}

const diasAtraso = 7;
const valorMultaDiaria = 0.5;
const multaBiblioteca = calcularMultaBiblioteca(diasAtraso, valorMultaDiaria);
console.log(`A multa da biblioteca é de: R$ ${multaBiblioteca}`);

// Exercício 9
// Função para calcular os pontos de vida após ataques
function calcularPontosVida(pontosVidaInicial, danoAtaque, numeroAtaques) {
  let pontosVidaAtual = pontosVidaInicial;
  for (let i = 0; i < numeroAtaques; i++) {
    pontosVidaAtual -= danoAtaque;
  }
  return pontosVidaAtual;
}

const pontosVidaInicial = 100;
const danoAtaque = 20;
const numeroAtaques = 3;
const pontosVidaRestantes = calcularPontosVida(pontosVidaInicial, danoAtaque, numeroAtaques);
console.log(`Pontos de vida após ${numeroAtaques} ataques: ${pontosVidaRestantes}`);

// Exercício 10
// Função para contar o número de letras maiúsculas em uma string
function contarLetrasMaiusculas(texto) {
  let numeroLetrasMaiusculas = 0;
  for (const letra of texto) {
    if (letra >= "A" && letra <= "Z") {
      numeroLetrasMaiusculas++;
    }
  }
  return numeroLetrasMaiusculas;
}

const texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
const numeroLetrasMaiusculas = contarLetrasMaiusculas(texto);
console.log(`A frase "${texto}" possui ${numeroLetrasMaiusculas} letras maiúsculas.`);

// Exercício 11
//Funcão para calcular a idade de uma pessoa
function calcularIdade(dataNascimento) {
  const dataNascimentoObj = new Date(dataNascimento);
  const dataAtual = new Date();
  let idadeEmAnos = dataAtual.getFullYear() - dataNascimentoObj.getFullYear();
  if (dataAtual.getMonth() < dataNascimentoObj.getMonth()) {
    idadeEmAnos--;
  } else if (dataAtual.getMonth() === dataNascimentoObj.getMonth() && dataAtual.getDate() < dataNascimentoObj.getDate()) {
    idadeEmAnos--;
  }
  return idadeEmAnos;
}

const dataNascimento = "2006-05-29";
const idade = calcularIdade(dataNascimento);
console.log(`A idade da pessoa é: ${idade} anos.`);

