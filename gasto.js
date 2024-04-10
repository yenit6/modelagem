//dom

const distance = document.querySelector('#distance')
const consu = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const btn = document.querySelector('#btn')
const result = document.querySelector('#resultado')

//evento 
btn.addEventListener('click', (e) => {

    e.preventDefault()

    const distanc=Number(distance.value)
    const prec= Number(preco.value)
    const consumo= Number(consu.value)
    const calc = (distanc/consumo)*prec


result.textContent = `o custo total da viagem é: R$${calc.toFixed(2)}`

})