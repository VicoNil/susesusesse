document.addEventListener('DOMContentLoaded', () => {
    console.log('SUSESUSESSE Portfolio cargado correctamente.');

    // Seleccionamos los elementos del menú
    const menuItems = document.querySelectorAll('.menu-item');

    // Aquí podrías añadir lógica adicional si quisieras
    // Por ejemplo, cambiar el cursor o hacer sonar un click
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            console.log(`Haciendo hover en: ${item.textContent}`);
        });
    });
});
