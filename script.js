// Скролл-эффекты для 14SEPT — In the Dark, Leave a Mark

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Скролл-анимации загружены!');
    
    // Элементы
    const heroPhoto = document.getElementById('hero-photo');
    const textSection = document.getElementById('text-section');
    const mainText = document.getElementById('main-text');
    const subtitle = document.getElementById('subtitle');
    const comingSoon = document.getElementById('coming-soon');
    const animatedQuchi = document.getElementById('animated-quchi');
    const hoodiesilhouette = document.getElementById('hoodie-silhouette');
    
    // Скролл-эффекты
    function handleScroll() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // ЭФФЕКТ 1: Увеличение фото при скролле
        if (scrollY < windowHeight) {
            const progress = scrollY / windowHeight;
            const scale = 1 + (progress * 2); // Увеличиваем до 3x
            const blur = progress * 10; // Размытие
            
            heroPhoto.style.transform = `scale(${scale})`;
            heroPhoto.style.filter = `brightness(${0.8 - progress * 0.3}) contrast(1.1) blur(${blur}px)`;
            heroPhoto.style.opacity = 1 - progress * 0.5; // Затухание
            
            console.log(`📸 Фото: scale=${scale.toFixed(2)}, blur=${blur.toFixed(1)}px`);
        }
        
        // ЭФФЕКТ 2: Появление "14SEPT" при скролле
        if (scrollY > windowHeight * 0.3) {
            if (!mainText.classList.contains('show')) {
                console.log('✨ Появляется 14SEPT при скролле!');
                mainText.classList.add('show');
            }
        } else {
            mainText.classList.remove('show');
        }
        
        // ЭФФЕКТ 3: Появление "In the Dark, Leave a Mark" при дальнейшем скролле
        if (scrollY > windowHeight * 0.7) {
            if (!subtitle.classList.contains('show')) {
                console.log('🌊 Появляется подзаголовок при скролле!');
                subtitle.classList.add('show');
            }
        } else {
            subtitle.classList.remove('show');
        }
        
        // ЭФФЕКТ 4: Финальная композиция при глубоком скролле
        if (scrollY > windowHeight * 1.2) {
            const content = document.querySelector('.content');
            if (!content.classList.contains('final-phase')) {
                console.log('🎭 Финальная композиция при скролле!');
                content.classList.add('final-phase');
                mainText.classList.add('show');
                subtitle.classList.add('show');
                comingSoon.classList.add('show');
                
                // Запускаем анимацию Quchi через секунду
                setTimeout(() => {
                    animateQuchiLetters();
                }, 1000);
            }
        } else {
            // Убираем финальную фазу если скроллим назад
            const content = document.querySelector('.content');
            if (content.classList.contains('final-phase')) {
                content.classList.remove('final-phase');
                comingSoon.classList.remove('show');
                animatedQuchi.classList.remove('show');
                hoodiesilhouette.classList.remove('show');
                
                // Очищаем анимацию букв
                const letters = document.querySelectorAll('.quchi-letter');
                letters.forEach(letter => {
                    letter.classList.remove('draw', 'fade-out');
                });
            }
        }
    }
    
    
    // Современная анимация букв Quchi
    function animateQuchiLetters() {
        console.log('✍️ Начинаем современную анимацию букв Quchi...');
        animatedQuchi.classList.add('show');
        
        const letters = animatedQuchi.querySelectorAll('.quchi-letter');
        
        // Современное появление букв автора
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('draw');
                console.log(`🚀 Буква автора ${letter.textContent} появляется современно...`);
            }, index * 150 + Math.random() * 100);
        });
        
        // Ждем чтобы все буквы появились и немного постояли
        setTimeout(() => {
            console.log('🔄 Красиво превращаем Quchi в силуэт худи...');
            
            // Современное исчезновение букв
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.classList.add('fade-out');
                    console.log(`🌟 Буква ${letter.textContent} исчезает в стиле 2024...`);
                }, (letters.length - index - 1) * 120 + Math.random() * 80);
            });
            
            // После исчезновения букв появляется худи
            setTimeout(() => {
                animatedQuchi.classList.remove('show');
                hoodiesilhouette.classList.add('show');
                console.log('👕 Силуэт худи элегантно появляется!');
            }, 1000);
        }, letters.length * 200 + 2000);
    }
    
    // Рестарт анимации - просто прокрутка в начало
    function restartAnimation() {
        // Прокручиваем в начало - все остальное управляется скроллом
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log('🔄 Прокрутка в начало!');
    }
    
    // Обработка скролла
    window.addEventListener('scroll', handleScroll);
    
    // Обработка клика и пробела для рестарта
    document.addEventListener('click', restartAnimation);
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            restartAnimation();
        }
    });
    
    console.log('🎬 Скролл-эффекты готовы! Начинайте скроллить...');
});