let cont = document.querySelector('.cont')

document.querySelectorAll('.btn1').forEach((el)=>{
    el.addEventListener('click',() =>{

        cont = el.nextElementSibling
        console.log(cont)

        if(cont.style.maxheight) {
            DocumentType.querySelectorAll('.cont').forEach((el) => el.style.maxheight = null)
        }

        else{
            DocumentType.querySelectorAll('.cont').forEach((el) => el.style.maxheight = null)
            cont.style.maxHeight = cont.style.scrollHeight + 'px'
        }
    })
})


