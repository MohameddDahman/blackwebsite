const link = document.querySelectorAll(".design-link")
const attribute = () =>{
    link.forEach(link =>{
        link.setAttribute("target", "_blank")
    })
}
attribute()