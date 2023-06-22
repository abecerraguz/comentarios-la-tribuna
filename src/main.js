import './style.css';
const showPerfil = document.querySelector('#showPerfil');
function toggle(el,classname){
    if(el.classList.contains(classname)){
        console.log('Salida de el',el)
        el.classList.remove(classname)
    }else{
        el.classList.add(classname)
    }
}


showPerfil.addEventListener('click', (e)=>{
    e.preventDefault();
    toggle(perfil, 'hidden')
})


