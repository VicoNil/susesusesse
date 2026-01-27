document.addEventListener('DOMContentLoaded', () => {
    
    const menuItems = document.querySelectorAll('.menu-item');
    const imageContainer = document.querySelector('.cursor-image-container');
    const floatingImage = document.getElementById('floating-image');

    // 1. Mover la imagen con el ratón
    document.addEventListener('mousemove', (e) => {
        // Actualizamos la posición del contenedor basándonos en el ratón
        imageContainer.style.left = e.clientX + 'px';
        imageContainer.style.top = e.clientY + 'px';
    });

    // 2. Detectar cuando entramos/salimos de los enlaces
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Cogemos la URL de la foto del atributo data-image
            const imageUrl = item.getAttribute('data-image');
            
            if (imageUrl) {
                floatingImage.src = imageUrl;
                imageContainer.classList.add('visible');
            }
        });

        item.addEventListener('mouseleave', () => {
            imageContainer.classList.remove('visible');
        });
    });
});
