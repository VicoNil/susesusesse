document.addEventListener('DOMContentLoaded', () => {
    
    // --- CONFIGURACIÓN DE LA GALERÍA "WORK" ---
    // Aquí pon todas las fotos que quieres que roten
    const workImages = [
        'tsukareta.jpg',
        'imagen2.png',
        'imagen3.png',
        'imagen4.png',
        'imagen5.png',
        'imagen6.png',
        'imagen7.png',
        'imagen8.png'
    ];
    let workIndex = 0; // Empezamos por la primera
    const workLink = document.getElementById('work-link');

    // -------------------------------------------------

    const menuItems = document.querySelectorAll('.menu-item');
    const imageContainer = document.querySelector('.cursor-image-container');
    const floatingImage = document.getElementById('floating-image');
    const floatingVideo = document.getElementById('floating-video');

    // 1. Mover el contenedor siguiendo al ratón
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        requestAnimationFrame(() => {
            imageContainer.style.left = mouseX + 'px';
            imageContainer.style.top = mouseY + 'px';
        });
    });

    // 2. Lógica para rotar las fotos de WORK
    if (workLink) {
        workLink.addEventListener('mouseleave', () => {
            // Pasamos a la siguiente foto de la lista
            workIndex++;
            
            // Si llegamos al final, volvemos a empezar (bucle)
            if (workIndex >= workImages.length) {
                workIndex = 0;
            }

            // Actualizamos el atributo data-src para la próxima vez que entres
            workLink.setAttribute('data-src', workImages[workIndex]);
        });
    }

    // 3. Lógica Hover General (Foto vs Video)
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Obtenemos el archivo (que puede haber cambiado gracias al código de arriba)
            const fileSrc = item.getAttribute('data-src');
            
            // Si no hay archivo (caso Contact), no hacemos nada
            if (!fileSrc || fileSrc.trim() === "") return;

            // Detectamos si es un video
            const isVideo = fileSrc.toLowerCase().endsWith('.mp4');

            if (isVideo) {
                // MODO VIDEO
                floatingImage.classList.remove('is-active');
                
                if (floatingVideo.getAttribute('src') !== fileSrc) {
                    floatingVideo.src = fileSrc;
                }
                
                floatingVideo.classList.add('is-active');
                floatingVideo.play().catch(e => console.log("Error play:", e));

            } else {
                // MODO FOTO
                floatingVideo.classList.remove('is-active');
                floatingVideo.pause(); 
                
                floatingImage.src = fileSrc;
                floatingImage.classList.add('is-active');
            }

            imageContainer.classList.add('visible');
        });

        item.addEventListener('mouseleave', () => {
            imageContainer.classList.remove('visible');
            floatingVideo.pause();
        });
    });
});
