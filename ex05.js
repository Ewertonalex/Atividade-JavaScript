var salario = 0.0,
    aumento = 0,
    valorAm = 0,
    salarioNovo;

salario = parseFloat(prompt("Digite o salário: "));

if (salario <= 280.0) {
    aumento = 20;
    valorAm = salario * aumento / 100;
    salarioNovo = salario + valorAm;
} else if (salario > 280.0 && salario <= 700.0) {
    aumento = 15;
    valorAm = salario * aumento / 100;
    salarioNovo = salario + valorAm;
} else if (salario > 700.0 && salario < 1500.0) {
    aumento = 10;
    valorAm = salario * aumento / 100;
    salarioNovo = salario + valorAm;
} else if (salario >= 1500.0) {
    aumento = 5;
    valorAm = salario * aumento / 100;
    salarioNovo = salario + valorAm;
}

console.log("Salário antes do aumento: R$" + salario);
console.log("Porcentual de aumento: " + aumento + "%");
console.log("Valor do aumento: R$" + valorAm);
console.log("Uhuuuu! Seu Novo salário: R$" + salarioNovo);