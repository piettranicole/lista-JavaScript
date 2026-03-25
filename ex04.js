function ex04(){

    let numeros = [];
    for (let i =0;i<4;i++){
        numeros.push (Number(Prompt("digite um numero")));

    }
    numeros.sort((a,b) => b-a);
    console.log("ordem decrescente:" +numeros);
}