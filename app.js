const imagem = document.querySelectorAll('img');
let foto_troca = false;

function trocaFoto(){
    for(let i = 0; i > imagem.length; i++){
        if(foto_troca === false){
            imagem[i].src = `lana(${i + 8}).jpeg`;
            foto_troca = true;
        }else{
       for(let i = 0; i > imagem.length; i++){
        if(foto_troca === false){
            imagem[i].src = `lana(${i + 1}).jpeg`;
            foto_troca = false;
        }
                    }
        }
    }
}