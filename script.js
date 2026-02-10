const tareaEntrada = document.getElementById("tareaEntrada");
const botonAgregar = document.getElementById("botonAgregar");
const contenedorTareas = document.getElementById("contenedorTareas");
const mensaje = document.getElementById("mensaje");
const contadorTotales = document.getElementById("contadorTotales");
const contadorTerminadas = document.getElementById("contadorTerminadas");


function crearElementoTarea(){

    const tareaContenedor = document.createElement('div');
    const tareaTexto = document.createElement('p');
    const iconoContenedor = document.createElement('div');
    const iconoCompletada = document.createElement('i');
    const iconoEliminar = document.createElement('i');


    iconoContenedor.append(iconoCompletada , iconoEliminar);
    tareaContenedor.append(tareaTexto , iconoContenedor);


    tareaContenedor.classList.add('tarea');
    tareaTexto.classList.add('tarea-texto');
    iconoContenedor.classList.add('tarea-iconos');
    iconoCompletada.classList.add('bis' , 'bi-check-circle');
    iconoEliminar.classList.add('bis' , 'bi-trash2');

    tareaTexto.innerText = tareaEntrada.value;
    iconoCompletada.addEventListener('click', (e) => {

        const tareaElemento = e.target.parentNode.parentNode
        const esCompletada = tareaElemento.classList.contains('tarea-completada')

        tareaElemento.classList.toggle('tarea-completada');
        if(esCompletada){
            e.target.classList.remove('bi-dash-circle')
            e.target.classList.add('bi-check-circle');
        }else{
            e.target.classList.add('bi-dash-circle');
            e.target.classList.remove('bi-check-circle')
        }
        actualizarContadores();

    })

    iconoEliminar.addEventListener('click', (e) => {
        const tareaElemento = e.target.parentNode.parentNode;
        tareaElemento.remove();
        actualizarContadores();
    })

    return tareaContenedor;

}


function actualizarContadores(){

    const tareasTotales = document.querySelectorAll('.tarea');
    const tareasCompletadas = document.querySelectorAll('.tarea-completada');

   contadorTotales.textContent = tareasTotales.length;
   contadorTerminadas.textContent = tareasCompletadas.length;
}


botonAgregar.addEventListener("click" , agregarTarea);


    function agregarTarea(){

        const texto = tareaEntrada.value.trim();

        if(!texto) {
            mensaje.textContent = 'Urhm faltatexto 🤓☝';
        }else{
             const elementoTarea = crearElementoTarea();
             contenedorTareas.append(elementoTarea);

             tareaEntrada.value = ' ';

             mensaje.textContent = 'listop,ya está';

             actualizarContadores();
        }

    }


document.addEventListener('keydown', (e) => {
    if(e.key == "Enter") {
        agregarTarea();
    }
})

tareaEntrada.addEventListener('input', () => {
    if(tareaEntrada.value.trim() === ""){
        mensaje.textContent = 'Otra????'
    }else{
        mensaje.textContent = 'Enter o todavia falta?'
    }
})

let tareasOcultas = false;


function toggleOcultarCompletadas(){

  const tareasCompletadas = document.querySelectorAll(".tarea-completada");


  
  tareasCompletadas.forEach (  (tarea) => {
    if(tareasOcultas)     
    {
      tarea.style.display = "flex";
    }
    
    else{
      tarea.style.display = "none";
    }
  }   );
console.log(tareasOcultas);

tareasOcultas = !tareasOcultas;

console.log(tareasOcultas);
}
 toggleOcultarCompletadas()

 function eliminarCompletadas () {
    const tareasCompletadas = document.querySelectorAll('.tareas-completadas')
    tareasCompletadas.forEach( (trea) => {tarea.remove()})
    
 }

