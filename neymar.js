//dom     :e pra informa quais sao objetos do html que vão participar 
//eventos :e oque o usuario vai ter que fazer pra(o) evento acontecer | lampada acender 
//funções :

//dom

//querySelector Metodo de Procura
//mudei o nome do objeto com Id botao de apagar agora e chamado bt1

const images =document.querySelector('#images')
const bt0 =document.querySelector('#def')
const bt1 =document.querySelector('#ney1')
const bt2 =document.querySelector('#ney2')
const bt3 =document.querySelector('#ney3')
const bt4 =document.querySelector('#ney4')



//Eventos

//addventlistener definir oque o usuario vai fazer no botao e oque vai acontecer

bt1.addEventListener('click',ney1)
bt0.addEventListener('click', def)
bt2.addEventListener('click',ney2)
bt3.addEventListener('click',ney3)
bt4.addEventListener('click',ney4)
//bt2.addEventListener('click',liga)



//funções 

function ney1(){
  images.src='images/neyssj1.jpg'
}

function def(){
  images.src='images/x.jpg'
}

function ney2(){
  images.src='images/neyssj3.jpg'
}

function ney3(){
  images.src='images/neyrose ss3.jpg'
}
function ney4(){
  images.src='images/neydefinitivo.jpg'
}

