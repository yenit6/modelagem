//dom
const nome =document.querySelector('nome')
const uni1 =document.querySelector('uni1')
const uni2 =document.querySelector('uni2')
const uni3 =document.querySelector('uni3')
const btn =document.querySelector('#btn')
const resultado = document.querySelector('resultado')

//evento 
btn.addEventListener('click', () => {

    n1=number(uni1.value)
    n2=number(uni2.value)
    n3=number(uni3.value)

    media = (n1+n2+n3)/3

})