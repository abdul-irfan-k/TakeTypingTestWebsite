downrow=document.getElementById("downrow")
second1=document.querySelector(".second1")
second2=document.querySelector(".second2")
minit1=document.getElementById("minit1")


downrow.addEventListener("click",()=>{
    second1.classList.toggle('clicked')
    second2.classList.toggle('clicked')

    clicked=document.querySelectorAll(".clicked")
    click=[...clicked]
    click.forEach(element => {
        
        element.addEventListener("click",(e)=>{
            second1.classList.remove('clicked')
            second2.classList.remove('clicked')
            console.log(e.target.innerText)
            minit1.innerText=e.target.innerText
        })
    });
    
})

