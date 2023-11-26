let ret = [...document.querySelectorAll(".botao")];
let content = document.querySelector(".conteudo")
let box = document.querySelector("#qt")

let ap = document.querySelector("#ap")
let co = document.querySelector("#co")

ret.map((el)=>{
    el.addEventListener("click", (evt)=>{
        open("pag2.html")
    })
})
function gettrue(ele){
    return box.querySelector("#" + ele) == null
}

let rem = (ele)=>{
    box.querySelector("#" + ele).remove()
}
let nele = (ele, type)=>{
        let div = document.createElement("div")
        div.setAttribute("id", ele)
        let inp = document.createElement("input")
        inp.setAttribute("type", type)
        inp.setAttribute("class", "tam")
        div.appendChild(inp)
        box.appendChild(div)
}
co.addEventListener("click", ()=>{
    if(gettrue("caixa")){
        nele("caixa", "text")
        if(!gettrue("inp")){
            rem("inp")
        }
    }else{
        rem("caixa")
    }
})
ap.addEventListener("click", ()=>{
   if(gettrue("inp")){
        nele("inp", "range")
        if(!gettrue("caixa")){
            rem("caixa")
        }
   }else{
        rem("inp")
   }
})