let num = document.querySelector('.input_numb')
let nAme = document.querySelector('.input_name')
let but1 = document.querySelector('.but1')
let but2 = document.querySelector('.but2')
let data = document.querySelector('.data2')
let data2 = document.querySelector('.data4')
let but = document.querySelector('.but')


num.addEventListener('keyup', set)

function set(e){
    card_nomer.innerHTML = num.value
}
nAme.addEventListener('keyup', setA)

function setA(e){
    card_name.innerHTML = nAme.value
}
data.addEventListener('mouseup', doom)

function doom(e){
    datee.innerHTML = data.value
}
data2.addEventListener('mouseup', rokki)

function rokki(e){
    datee2.innerHTML = data2.value
}

but.onclick = function(){
    alert('Ваші данні вже переслані на чорний ринок')
}