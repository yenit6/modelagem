//dom
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const texto = document.querySelector('#tetxo')
const youtube =document.querySelector('#youtube')


//const

setInterval(relogio, 1000)


//evento 
youtube.addEventListener('click', youtubeFunc)

//função

function relogio() {
    let agora = new Date()
    let h = agora.getHours()
    let m = agora.getMinutes()
    let s = agora.getSeconds()
    let dd = agora.getDate()
    let mm = agora.getMonth() + 1
    let yy = agora.getFullYear()

    
    if (h >= 5 && h < 12) {
     texto.textContent= 'praise the sun bitch, bom dia'
    } else if (h >= 12 && h <= 18) {
        texto.textContent= 'boa tarde, fique seguro'
       } else {
        texto.textContent=  'boa noite, que a lua abençoe a sua jornada'
       }


    if (h < 10) {
        h = "0" + h
    }

    if (m < 10) {
        m = "0" + m
    }

    if (s < 10) {
        s = "0" + s
    }

    dia.textContent = dd+"/"
    mes.textContent = mm+"/"
    ano.textContent = yy
    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s

    if( dd < 10){
        dd="0"+dd
    }
    
    if( mm < 10){
        mm="0"+mm
    }
    if( mm < 10){
        mm="0"+mm+"/"
    }

    
    
}
function youtubeFunc(){
    open("https://www.youtube.com/@yenitt-")
}
