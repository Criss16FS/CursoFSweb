document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    var popupMenu = document.getElementById('popup-menu');
    var btnMenu = document.getElementById('btn-menu');
    var btnCerrar = document.getElementById('btn-cerrar');

    // Ocultar el menú emergente por defecto
    popupMenu.style.display = 'none';

    // Función para mostrar u ocultar el menú emergente al hacer clic en el botón de menú
    function toggleMenu() {
        if (popupMenu.style.display === 'block') {
            popupMenu.style.display = 'none';
        } else {
            popupMenu.style.display = 'block';
        }
    }

    btnMenu.addEventListener('click', toggleMenu);
    btnCerrar.addEventListener('click', function() {
        popupMenu.style.display = 'none';
    });

    // Función para cerrar el menú emergente al hacer clic fuera del área del menú
    window.addEventListener('click', function(event) {
        if (event.target === popupMenu) {
            popupMenu.style.display = 'none';
        }
    });
});
