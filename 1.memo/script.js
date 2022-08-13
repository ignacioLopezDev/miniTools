const MAXIMOS_INTENTOS = 8, // Intentos máximos que tiene el jugador
    COLUMNAS = 4, // Columnas del memorama
    SEGUNDOS_ESPERA_VOLTEAR_IMAGEN = 1, // Por cuántos segundos mostrar ambas imágenes
    NOMBRE_IMAGEN_OCULTA = "./img/question.png"; // La imagen que se muestra cuando la real está oculta
new Vue({
    el: "#app",
    data: () => ({
        // La ruta de las imágenes. Puede ser relativa o absoluta
        imagenes: [
            "./img/cabra.jpg",
            "./img/conejo.jpg",
            "./img/leon.jpg",
            "./img/oveja.jpg",
            "./img/perro.jpg",
            "./img/gato.jpg",
        ],
    })})