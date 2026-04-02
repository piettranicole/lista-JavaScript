function ex06(){

    let letra = prompt("Digite uma letra:");

    const vogais = "AEIOUaeiou";

    if (vogais.includes(letra)){
        alert("A letra é uma vogal.")
    }
    else{
        alert("A letra é uma consoante.")
    }

}