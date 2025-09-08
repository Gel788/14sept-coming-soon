// Скролл-управление с увеличением фото и сменой текстов - 14SEPT

document.addEventListener('DOMContentLoaded', function() {
    console.log('📜 Скролл-управление с фото и текстами загружено!');
    
    // Элементы
    const heroPhoto = document.getElementById('hero-photo');
    const mainText = document.getElementById('main-text');
    const subtitle = document.getElementById('subtitle');
    const comingSoon = document.getElementById('coming-soon');
    const animatedQuchi = document.getElementById('animated-quchi');
    const hoodiesilhouette = document.getElementById('hoodie-silhouette');
    
    let quchiAnimationStarted = false;
    
    // Скролл-эффекты
    function handleScroll() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const maxScroll = document.body.scrollHeight - windowHeight;
        const scrollProgress = scrollY / maxScroll;
        
        console.log(`📜 Скролл: ${scrollY}px, прогресс: ${(scrollProgress * 100).toFixed(1)}%`);
        
        // ЭФФЕКТ 1: Увеличение фото при скролле (всегда работает)
        const photoScale = 1 + (scrollProgress * 4); // От 1 до 5x
        const photoBlur = Math.min(scrollProgress * 15, 15); // До 15px размытия
        const photoBrightness = Math.max(0.4 - scrollProgress * 0.3, 0.1); // Затемнение
        
        heroPhoto.style.transform = `scale(${photoScale})`;
        heroPhoto.style.filter = `brightness(${photoBrightness}) contrast(1.1) blur(${photoBlur}px)`;
        
        // ЭФФЕКТ 2: Смена текстов по скроллу
        
        // Убираем все тексты сначала
        mainText.classList.remove('show');
        subtitle.classList.remove('show');
        comingSoon.classList.remove('show');
        
        // Убираем финальную фазу если скроллим назад
        const content = document.querySelector('.content');
        if (scrollProgress < 0.8) {
            content.classList.remove('final-phase');
            animatedQuchi.classList.remove('show');
            hoodiesilhouette.classList.remove('show');
            quchiAnimationStarted = false;
            
            // Очищаем анимацию букв
            const letters = document.querySelectorAll('.quchi-letter');
            letters.forEach(letter => {
                letter.classList.remove('draw', 'fade-out');
            });
        }
        
        // ФАЗА 1: "14SEPT" (10-30% скролла)
        if (scrollProgress >= 0.1 && scrollProgress < 0.3) {
            console.log('✨ Показываем 14SEPT');
            mainText.classList.add('show');
        }
        
        // ФАЗА 2: "In the Dark, Leave a Mark" (30-60% скролла)
        else if (scrollProgress >= 0.3 && scrollProgress < 0.6) {
            console.log('🌊 Показываем подзаголовок');
            subtitle.classList.add('show');
        }
        
        // ФАЗА 3: "Coming Soon" (60-80% скролла)
        else if (scrollProgress >= 0.6 && scrollProgress < 0.8) {
            console.log('🎭 Показываем Coming Soon');
            comingSoon.classList.add('show');
        }
        
        // ФАЗА 4: Финальная композиция (80%+ скролла)
        else if (scrollProgress >= 0.8) {
            console.log('🏆 Финальная композиция');
            
            content.classList.add('final-phase');
            mainText.classList.add('show');
            subtitle.classList.add('show');
            comingSoon.classList.add('show');
            
            // Запускаем анимацию Quchi только один раз
            if (!quchiAnimationStarted) {
                quchiAnimationStarted = true;
                setTimeout(() => {
                    animateQuchiLetters();
                }, 1000);
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
    
    // Рестарт анимации - прокрутка в начало
    function restartAnimation() {
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
    
    // Первоначальная проверка скролла
    handleScroll();
    
    console.log('📜 Скролл-управление готово! Скролли для смены текстов и увеличения фото!');
});