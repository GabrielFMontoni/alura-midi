function tocarTeclas(seletorAudio){
    
    elemento = document.querySelector(seletorAudio);
  
    if(elemento.localName!= null && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        window.alert('Elemento não encontrado ou seletor inválido') 
    }

} 


const listaTeclas = document.querySelectorAll('.tecla');


for (let i = 0; i<listaTeclas.length; i++){
    const teclaContador = listaTeclas[i];
    const tecla = teclaContador.classList[1];
    const idAudio = `#som_${tecla}`; //templateString

    teclaContador.onclick = function (){
        tocarTeclas(idAudio);
    }

    teclaContador.onkeydown= function (apertou){
        if(apertou.code === "Enter" || apertou.code ==="Space" || apertou.code === "NumpadEnter"){
        teclaContador.classList.add("ativa")
        }
    }
    teclaContador.onkeyup = function (){
        teclaContador.classList.remove("ativa")
    }
}
