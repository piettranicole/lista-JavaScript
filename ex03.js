function ex03() {
    let ganho_anual = 0;
    let gasto_anual = 0;
    let saldo_anual = 0;
    for (let i = 1; i <= 12; i++) {
        let ganho = Number(prompt("ganho do mes" + i));
         let gasto = Number(prompt("gasto do mes" + i));
         ganho_anual += ganho;
         gasto_anual += gasto;
    }
    saldo_anual = ganho_anual - ganho_anual;
    console.log ("ganho anual:" + ganho_anual);
    console.log ("gasto anual:" + gasto_anual);
    console.log ("saldo anual:" + saldo_anual);
    if (saldo_anual < 0){
        console.log("prejuízo")
    }else{
        console.log("lucro!")
    }

}