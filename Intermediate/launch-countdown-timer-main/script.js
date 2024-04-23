function verifica(num) {
    if(num < 10) {
        return `0${num}`;
    } else {
        return num
    }
}

function contagemRegressiva() {
    let atualData = new Date();
    

    let dAtual = atualData.getDate();
    let hAtual = atualData.getHours();
    let mAtual = atualData.getMinutes();
    let sAtual = atualData.getSeconds();

    document.querySelector('#day').textContent = verifica(dAtual);
    document.querySelector('#hour').textContent = verifica(hAtual);
    document.querySelector('#min').textContent = verifica(mAtual);
    document.querySelector('#seg').textContent = verifica(sAtual);
    
}

let timer = setInterval(contagemRegressiva, 1000);



