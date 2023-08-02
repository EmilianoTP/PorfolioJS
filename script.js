var btnEncript = document.querySelector(".Button1");
var btnDesencript = document.querySelector(".Button2");
var imgResult = document.querySelector(".TextResult");
var result = document.querySelector(".BoxResult");


btnEncript.onclick = encript;
btnDesencript.onclick = desencript;

function encript(){
    ocultBoxes();
    var textBox = getText();
    result.textContent = encriptText(textBox);
}

function desencript(){
    ocultBoxes();
    var textBox = getText();
    result.textContent = desencriptText(textBox);
}

function encriptText(text){
    var msg = text;
    msg = msg.toLowerCase();
    var txtFinal = "";
    for(var i = 0; i<msg.length; i++){
        if(msg[i] == "a") txtFinal += "ai";
        else if(msg[i] == "e") txtFinal += "enter";
        else if(msg[i] == "i") txtFinal += "imes";
        else if(msg[i] == "o") txtFinal += "ober";
        else if(msg[i] == "u") txtFinal += "ufat";
        else txtFinal += msg[i];
    }
    return txtFinal;
}

function desencriptText(text){
    var msg = text;
    msg = msg.toLowerCase();
    var txtFinal = "";
    for(var i = 0; i<msg.length; i++){
        if(msg[i] == "a"){
            txtFinal += msg[i];
            i += 1;
        }
        else if(msg[i] == "e"){
            txtFinal += msg[i];
            i += 4
        }
        else if(msg[i] == "i" || msg[i] == "o" || msg[i] == "u"){
            txtFinal += msg[i];
            i += 3;
        }
        else txtFinal += msg[i];
    }
    return txtFinal;

}

function getText(){
    var textBox = document.querySelector(".inputText");
    return textBox.value;
}


function ocultBoxes(){
    imgResult.classList.add("ocult");
}

const btnCopiar = document.querySelector(".BtnCopiar");
btnCopiar.addEventListener("click", copiar = () => {
var content = document.querySelector(".BoxResult").textContent;
navigator.clipboard.writeText(content);
})