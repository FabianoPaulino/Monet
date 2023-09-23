
function qr(id){
    let ret = [...document.querySelectorAll(id)];
    return ret
}
qr(".b1").map((el)=>{
    el.addEventListener("click", (evt)=>{
        open("pag2.html" )
    })
})
