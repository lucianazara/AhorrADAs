// seccion categorias

function $(selector){
    return  document.querySelector(selector);
}

window.addEventListener("load", () => {
    $("#btn-categorias").addEventListener("click", (e) => {
        e.preventDefault()
        $("#balance").classList.add("is-hidden")
        $("#nueva-operacion").classList.add("is-hidden")
    })
})