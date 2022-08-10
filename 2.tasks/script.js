const CLAVE_LOCALSTORAGE = "lista_tareas";

document.addEventListener("DOMContentLoaded", () => {
    let tareas = []; // El arreglo global que vamos a manejar
    // Declaración de elementos del DOM
    const $contenedorTareas = document.querySelector("#contenedorTareas"),
        $btnGuardarTarea = document.querySelector("#btnAgregarTarea"),
        $inputNuevaTarea = document.querySelector("#inputNuevaTarea");

    // Escuchar clic del botón para agregar nueva tarea
    $btnGuardarTarea.onclick = () => {
        const tarea = $inputNuevaTarea.value;
        if (!tarea) {
            return;
        }
        tareas.push({
            tarea: tarea,
            terminada: false,
        });
        $inputNuevaTarea.value = "";
        guardarTareasEnAlmacenamiento();
        refrescarListaDeTareas();
    };
});
