
const MAXIMOS_INTENTOS = 8, 
    COLUMNAS = 4, 
    SEGUNDOS_ESPERA_VOLTEAR_IMAGEN = 1, 
    NOMBRE_IMAGEN_OCULTA = "./img/question.png"; 
new Vue({
    el: "#app",
    data: () => ({
        
        imagenes: [
            "./img/cabra.jpg",
            "./img/conejo.jpg",
            "./img/leon.jpg",
            "./img/oveja.jpg",
            "./img/perro.jpg",
            "./img/gato.jpg",
        ],
        memorama: [],
        
        ultimasCoordenadas: {
            indiceFila: null,
            indiceImagen: null,
        },
        NOMBRE_IMAGEN_OCULTA: NOMBRE_IMAGEN_OCULTA,
        MAXIMOS_INTENTOS: MAXIMOS_INTENTOS,
        intentos: 0,
        aciertos: 0,
        esperandoTimeout: false,
    }),
    methods: {
        mostrarCreditos() {
            Swal.fire({
                title: "Acerca de",
                confirmButtonText: "Cerrar",
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        },
    
        indicarFracaso() {
            Swal.fire({
                    title: "Perdiste",
                    html: `
                <img class="img-fluid" src="./img/perdiste.png" alt="Perdiste">
                <p class="h4">Agotaste tus intentos</p>`,
                    confirmButtonText: "Jugar de nuevo",
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                })
                .then(this.reiniciarJuego)
        }
    }})