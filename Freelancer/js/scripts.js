// Función para mostrar la alerta y redirigir al usuario después de aceptar
function mostrarAlertaYRedireccionar() {
    if (confirm("Está a punto de ser dirigido a una web fuera de este sitio, pero es del mismo propietario. Esto con el fin de poder visualizar el portafolio de una mejor forma ¿Desea continuar?")) {
        window.location.href = "https://cjbytecraft.com/portafolio/";
    }
}

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento <a> con el ID "portfolio"
    var linkPortfolio = document.getElementById("portfolio");

    // Verifica si se encontró el elemento
    if (linkPortfolio) {
        // Agrega un evento "click" al elemento <a>
        linkPortfolio.addEventListener("click", function (event) {
            // Evita el comportamiento predeterminado de redireccionar al enlace
            event.preventDefault();
            // Llama a la función mostrarAlertaYRedireccionar
            mostrarAlertaYRedireccionar();
        });
    }
});
