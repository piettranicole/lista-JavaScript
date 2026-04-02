function ex10(){
    let nome = prompt("Digite seu nome:");
    let salario = parseFloat("Digite seu salário:");
    let INSS = 0.08;

    desconto_INSS = salario * INSS
    salario_liquido = salario - desconto_INSS

    alert(nome);
    alert(salario);
    alert(desconto_INSS);
    alert(salario_liquido);
    
}