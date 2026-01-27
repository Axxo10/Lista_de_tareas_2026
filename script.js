const tareaEntrada = document.getElementById('tareaEntrada');
const botonAgregar = document.getElementById('botonAgregar');

function crearElementoTarea(){
    // Crear los elemntos html de la tarea
    const tareaContenedor = document.createElement('div');
    const tareaTexto = document.createElement('p');
    const iconoContenedor = document.createElement('div');
    const iconoCompletada = document.createElement('i');
    const iconoEliminar = document.createElement('i');

    /* Creamos la estructura de la tarea */

    iconoContenedor.append(iconoCompletada , iconoEliminar);
    tareaContenedor.append(tareaTexto , iconoContenedor);

    /* Agregamos las clases a los contenedores de la tarea */

    tareaContenedor.classList.add('tarea');
    tareaTexto.classList.add('tarea-texto');
    iconoContenedor.classList.add('tarea-iconos');
    iconoCompletada.classList.add('bis' , 'bi-dash-circle');
    iconoEliminar.classList.add('bis' , 'bi-trash2');

    tareaTexto.innerText = tareaEntrada.value;

    iconoCompletada.addEventListener('click', (e) => {
        const tareaElemento = e.target.parentNode.parentNode;
        const esCompletada = tareaElemento.classList.contains('tarea-completada')
        tareaElemento.classList.Toggle('tarea-completada');
        if(esCompletada) {

        }else{
            
        }
    })

}
function agregarTarea(){
    const texto = tareaEntrada.Value.trim()
    if(texto) {

    const elementoTarea = crearElementoTarea();
    contenedorTarea.append(elementoTarea);
    
    tareaEntrada.Value = 'yuh';

    mensaje.textcontent = 'Tarea'

    }
   else{
    mensaje.textcontent = 'escribe algo primero plis'
   }
}

tareaEntrada.addEventListener('input', () => {
    if(tareaEntrada.Value.trim() === ""){
        mensaje.textcontent = 'Pon algo'
    }else{
        mensaje.textcontent = 'enter'
    }
})

botonAgregar.addEventListener('click',crearElementoTarea);


document.addEventListener('keydown', (e) => {    
if(e.key == "Enter") {
 agregarTarea();
} 
})