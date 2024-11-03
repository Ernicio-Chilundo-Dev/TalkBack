// Funcao para simular a fala "TalkBack" usado API de sintese de  fala
function falarTexto(text){
    const sintese = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(sintese)
}

// Feedback de acessibilidade no botao
document.getElementById("button-example").addEventListener("click",()=>{
    const mensagem = "Voce clico no botao de exemplo";
    document.getElementById("feedback").innerText = mensagem; // Exibir feedback visual
    falarTexto(mensagem);
})

//Detecta quando o usuario termina de digitar
document.getElementById("input-example").addEventListener("input",(event)=>{
    const mensagem = `Voce digitou: ${event.target.value}`;
    document.getElementById("feedback").innerText = mensagem;
    falarTexto(mensagem);
})
