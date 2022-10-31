
menu=document.querySelector('.menu')
menu.addEventListener('click',()=>{
    navbarsmall=document.querySelector('.navbarsmall')
    navbarsmall.classList.toggle('visibles')

    closebt=document.getElementById('closebt')
    closebt.addEventListener('click',()=>{
        navbarsmall.classList.remove('visibles')
    })

})
