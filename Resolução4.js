const capital = 1000;

const taxaDeJuros = 0.125;

const periodoDeTempo = 5;

const montante = capital * (1 + taxaDeJuros) ** periodoDeTempo;

console.log(montante);
