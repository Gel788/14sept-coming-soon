// Последовательная смена текстов на одном экране - 14SEPT

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎬 Последовательная анимация загружена!');
    
    // Элементы
    const heroPhoto = document.getElementById('hero-photo');
    const mainText = document.getElementById('main-text');
    const subtitle = document.getElementById('subtitle');
    const comingSoon = document.getElementById('coming-soon');
    const animatedQuchi = document.getElementById('animated-quchi');
    const hoodiesilhouette = document.getElementById('hoodie-silhouette');
    
    // Запуск последовательной анимации
    function startSequence() {
        console.log('🚀 Запускаем последовательную анимацию...');
        
        // ФАЗА 1: Появляется "14SEPT" (1-3 секунды)
        setTimeout(() => {
            console.log('✨ Фаза 1: Появляется 14SEPT');
            mainText.classList.add('show');
        }, 1000);
        
        // ФАЗА 2: Исчезает "14SEPT", появляется подзаголовок (3-6 секунд)
        setTimeout(() => {
            console.log('🌊 Фаза 2: 14SEPT исчезает');
            mainText.classList.remove('show');
            
            setTimeout(() => {
                console.log('✨ Фаза 2: Появляется подзаголовок');
                subtitle.classList.add('show');
            }, 500);
        }, 3000);
        
        // ФАЗА 3: Исчезает подзаголовок, появляется "Coming Soon" (6-9 секунд)
        setTimeout(() => {
            console.log('🎭 Фаза 3: Подзаголовок исчезает');
            subtitle.classList.remove('show');
            
            setTimeout(() => {
                console.log('✨ Фаза 3: Появляется Coming Soon');
                comingSoon.classList.add('show');
            }, 500);
        }, 6000);
        
        // ФАЗА 4: Финальная композиция - все вместе (9+ секунд)
        setTimeout(() => {
            console.log('🏆 Фаза 4: Финальная композиция');
            
            // Добавляем класс для финальной фазы
            const content = document.querySelector('.content');
            content.classList.add('final-phase');
            
            // Скрываем Coming Soon для перехода
            comingSoon.classList.remove('show');
            
            // Показываем все элементы вместе
            setTimeout(() => {
                mainText.classList.add('show');
                subtitle.classList.add('show');
                comingSoon.classList.add('show');
                
                console.log('🎨 Все элементы показаны вместе');
                
                // Запускаем анимацию Quchi через 2 секунды
                setTimeout(() => {
                    animateQuchiLetters();
                }, 2000);
            }, 600);
        }, 9000);
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
        console.log('🔄 Перезапускаем анимацию...');
        
        // Очищаем все классы
        const content = document.querySelector('.content');
        content.classList.remove('final-phase');
        
        [mainText, subtitle, comingSoon, animatedQuchi, hoodiesilhouette].forEach(el => {
            if (el) el.classList.remove('show');
        });
        
        const letters = document.querySelectorAll('.quchi-letter');
        letters.forEach(letter => {
            letter.classList.remove('draw', 'fade-out');
        });
        
        // Запускаем заново через секунду
        setTimeout(() => {
            startSequence();
        }, 1000);
    }
    
    // Обработка клика и пробела для рестарта
    document.addEventListener('click', restartAnimation);
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            restartAnimation();
        }
    });
    
    // Запускаем первую анимацию
    startSequence();
    
    console.log('🎭 Последовательная анимация готова! Один экран, смена текстов по таймеру.');
});