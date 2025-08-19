var horaexata = new Date()
var hora = horaexata.getHours()

if(hora < 12){
    console.log(`Bom dia, são ${hora}h da manhã`)
} else if(hora <= 18){
    console.log(`Boa tarde, são ${hora}h da tarde`)
}else {
    console.log(`Boa noite, são ${hora}h da noite`)
}