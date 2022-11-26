
const ovr = document.querySelector(".modal-overlay")
const clos = document.querySelector(".close-btn")
const btn = document.querySelector(".btn")
btn.addEventListener('click',()=>{
    if(ovr.classList.contains("open-modal") == false){
        ovr.classList.add("open-modal")
    }else{
        ovr.classList.remove("open-modal")
    }
})

clos.addEventListener('click',()=>{
    ovr.classList.remove("open-modal")
})