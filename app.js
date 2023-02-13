// seccion categorias
function $(selector){
    return  document.querySelector(selector);
}
// variables
const botonCategorias = $("#btn-categorias");
const balance = $("#balance");
const nuevaOperacion = $("#nueva-operacion");
const botonBalance = $("#btn-balance");
const categorias = $("#categorias");


window.addEventListener("load", () => {
    //evento boton categorias
botonCategorias.addEventListener("click", (e) => {
        e.preventDefault()
        categorias.classList.remove("is-hidden");
        balance.classList.add("is-hidden")
        nuevaOperacion.classList.add("is-hidden")
    })
})

//evento boton balance
botonBalance.addEventListener("click", (e) => {
  e.preventDefault()
  balance.classList.remove("is-hidden");
  nuevaOperacion.classList.add("is-hidden");
    if(!categorias.classList.contains("is-hidden")){
        categorias.classList.add("is-hidden")
    }
})