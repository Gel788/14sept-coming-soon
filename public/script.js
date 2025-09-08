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
    
    let animationStarted = false;
    let finalPhaseStarted = false;
    
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
        
        // ЭФФЕКТ 2: Появление текстов при дальнейшем скролле
        if (scrollY > windowHeight * 0.5 && !animationStarted) {
            console.log('✨ Начинаем анимацию текстов!');
            animationStarted = true;
            startTextAnimations();
        }
        
        // ЭФФЕКТ 3: Финальная фаза при глубоком скролле
        if (scrollY > windowHeight * 1.5 && !finalPhaseStarted) {
            console.log('🎭 Запускаем финальную фазу!');
            finalPhaseStarted = true;
            startFinalPhase();
        }
    }
    
    // Анимация появления текстов
    function startTextAnimations() {
        // ФАЗА 1: Эффективное появление "14SEPT" (1-3 секунды)
        setTimeout(() => {
            console.log('✨ Фаза 1: Эффективное появление 14SEPT');
            mainText.classList.add('show');
        }, 500);
        
        // ФАЗА 2: Эффективная смена на подзаголовок (2.5-5 секунд)
        setTimeout(() => {
            console.log('🌊 Переход к фазе 2: скрываем 14SEPT');
            mainText.classList.remove('show');
            
            setTimeout(() => {
                console.log('✨ Фаза 2: Эффективное появление подзаголовка');
                subtitle.classList.add('show');
            }, 400);
        }, 2500);
    }
    
    // Финальная фаза со всеми анимациями
    function startFinalPhase() {
        console.log('🎭 Фаза 3: Финальная композиция');
        
        // Добавляем класс для финальной фазы
        const content = document.querySelector('.content');
        content.classList.add('final-phase');
        
        // Скрываем подзаголовок для перехода
        subtitle.classList.remove('show');
        
        // Элегантное появление финальной композиции
        setTimeout(() => {
            mainText.classList.add('show');
            subtitle.classList.add('show');
            
            setTimeout(() => {
                comingSoon.classList.add('show');
                console.log('🏆 Финальная композиция: все элементы показаны');
                
                // Запускаем анимацию букв Quchi через 2 секунды
                setTimeout(() => {
                    animateQuchiLetters();
                }, 2000);
            }, 400);
        }, 600);
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
                
                // Автоматический рестарт через 5 секунд
                setTimeout(() => {
                    console.log('🔄 Автоматический рестарт анимации...');
                    restartAnimation();
                }, 5000);
            }, 1000);
        }, letters.length * 200 + 2000);
    }
    
    // Рестарт анимации
    function restartAnimation() {
        // Сбрасываем все состояния
        animationStarted = false;
        finalPhaseStarted = false;
        
        // Очищаем классы
        const content = document.querySelector('.content');
        content.classList.remove('final-phase');
        
        [mainText, subtitle, comingSoon, animatedQuchi, hoodiesilhouette].forEach(el => {
            if (el) el.classList.remove('show');
        });
        
        const letters = document.querySelectorAll('.quchi-letter');
        letters.forEach(letter => {
            letter.classList.remove('draw', 'fade-out');
        });
        
        // Прокручиваем в начало
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        console.log('🔄 Анимация перезапущена!');
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