function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
   

    msg.innerHTML = `Agora são exatamante ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'manhã.png'
        document.body.style.background = '#d4c39dff'
    }
    else if(hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#b8552eff'
    }
    else{
        img.src = 'noite2.png'
        document.body.style.background = '#221a2eff'
    }
}