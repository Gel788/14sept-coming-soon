document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Drake Style - Элегантная анимация загружается...');
    
    const mainText = document.getElementById('main-text');
    const subtitle = document.getElementById('subtitle');
    const comingSoon = document.getElementById('coming-soon');
    const hoodieSilhouette = document.getElementById('hoodie-silhouette');
    const animatedQuchi = document.getElementById('animated-quchi');
    
    // Проверяем элементы
    if (!mainText || !subtitle || !comingSoon || !hoodieSilhouette || !animatedQuchi) {
        console.error('❌ Элементы не найдены!');
        return;
    }
    
    console.log('✅ Все элементы найдены - запускаем Drake Style');
    
    // Функция красивой анимации букв Quchi
    function animateQuchiLetters() {
        console.log('✍️ Начинаем красивую анимацию букв Quchi...');
        animatedQuchi.classList.add('show');
        
        const letters = animatedQuchi.querySelectorAll('.quchi-letter');
        
    // Красиво появляются буквы автора по одной
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('draw');
            console.log(`✨ Буква автора ${letter.textContent} появляется стильно...`);
        }, index * 300); // Медленнее для достойного автора
    });
        
        // Ждем чтобы все буквы появились и немного постояли
        setTimeout(() => {
            console.log('🔄 Красиво превращаем Quchi в силуэт худи...');
            
            // Красиво исчезают буквы с новой анимацией
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.classList.add('fade-out');
                    console.log(`💫 Буква ${letter.textContent} красиво исчезает...`);
                }, index * 150);
            });
            
            // После исчезновения букв появляется худи
            setTimeout(() => {
                animatedQuchi.classList.remove('show');
                
                setTimeout(() => {
                    hoodieSilhouette.classList.add('show');
                    console.log('👕 Силуэт худи красиво появляется из букв!');
                    
                    // Худи исчезает через 5 секунд
                    setTimeout(() => {
                        hoodieSilhouette.classList.remove('show');
                        console.log('👕 Силуэт худи красиво исчезает...');
                    }, 5000);
                }, 300);
            }, letters.length * 200 + 1000); // Больше времени для достойного автора
            
        }, letters.length * 300 + 2000); // Больше времени для автора + пауза
    }
    
    // Функция элегантной анимационной последовательности
    function startDrakeAnimation() {
        console.log('🎵 Запуск Drake Style анимации...');
        
        // Убеждаемся что все элементы скрыты в начале
        mainText.classList.remove('show');
        subtitle.classList.remove('show');
        comingSoon.classList.remove('show');
        hoodieSilhouette.classList.remove('show');
        animatedQuchi.classList.remove('show');
        
        // Сбрасываем все буквы Quchi
        const letters = animatedQuchi.querySelectorAll('.quchi-letter');
        letters.forEach(letter => {
            letter.classList.remove('draw');
            letter.classList.remove('fade-out');
        });
        
        // Сбрасываем анимацию худи
        const hoodiePath = document.getElementById('hoodie-path');
        if (hoodiePath) {
            hoodiePath.style.animation = 'none';
            hoodiePath.offsetHeight; // Принудительный reflow
            hoodiePath.style.animation = null;
        }
        
        // ФАЗА 1: Печатаем "14SEPT" (1-4 секунды)
        setTimeout(() => {
            console.log('⌨️ Фаза 1: Печатаем 14SEPT');
            mainText.classList.add('show');
            mainText.classList.add('typing');
        }, 1000);
        
        // ФАЗА 2: Скрываем "14SEPT" и печатаем подзаголовок (3-7 секунд)
        setTimeout(() => {
            console.log('🌊 Переход к фазе 2: скрываем 14SEPT');
            mainText.classList.remove('show', 'typing');
            
            setTimeout(() => {
                console.log('⌨️ Фаза 2: Печатаем подзаголовок');
                subtitle.classList.add('show');
                subtitle.classList.add('typing');
            }, 500);
        }, 3000);
        
        // ФАЗА 3: Финальная элегантная композиция (7+ секунд)
        setTimeout(() => {
            console.log('🎭 Фаза 3: Финальная Drake композиция');
            
            // Добавляем класс для финальной фазы - элегантное расположение
            const content = document.querySelector('.content');
            content.classList.add('final-phase');
            
            // Плавно скрываем подзаголовок для перехода
            subtitle.classList.remove('show');
            
            // Элегантное появление финальной композиции
            setTimeout(() => {
                mainText.classList.add('show');
                subtitle.classList.add('show');
                
                setTimeout(() => {
                    comingSoon.classList.add('show');
                    console.log('🏆 Финальная Drake композиция: все элементы показаны');
                    
                    // Запускаем анимацию букв Quchi через 2 секунды
                    setTimeout(() => {
                        animateQuchiLetters();
                    }, 2000);
                }, 400);
            }, 600);
        }, 7000);
    }
    
    // Функция элегантного перезапуска
    function restartDrakeStyle() {
        console.log('🔄 Элегантный перезапуск Drake Style...');
        
        // Плавно скрываем все элементы
        mainText.classList.remove('show');
        subtitle.classList.remove('show');
        comingSoon.classList.remove('show');
        hoodieSilhouette.classList.remove('show');
        animatedQuchi.classList.remove('show');
        
        // Сбрасываем все буквы Quchi
        const letters = animatedQuchi.querySelectorAll('.quchi-letter');
        letters.forEach(letter => {
            letter.classList.remove('draw');
            letter.classList.remove('fade-out');
        });
        
        // Сбрасываем анимацию худи
        const hoodiePath = document.getElementById('hoodie-path');
        if (hoodiePath) {
            hoodiePath.style.animation = 'none';
            hoodiePath.offsetHeight; // Принудительный reflow
            hoodiePath.style.animation = null;
        }
        
        // Убираем класс финальной фазы
        const content = document.querySelector('.content');
        content.classList.remove('final-phase');
        
        // Элегантный перезапуск
        setTimeout(startDrakeAnimation, 800);
    }
    
    // Запускаем анимацию через секунду после загрузки
    setTimeout(startDrakeAnimation, 1000);
    
    // Элегантный перезапуск по клику
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.loading-dots')) {
            restartDrakeStyle();
        }
    });
    
    // Элегантный перезапуск по пробелу
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            restartDrakeStyle();
        }
    });
    
    console.log('🎮 Drake Style интерактивность: клик или пробел для элегантного перезапуска');
    
    // Зацикливание анимации - повтор каждые 20 секунд
    setInterval(() => {
        console.log('🔄 Автоматический перезапуск анимации...');
        restartDrakeStyle();
    }, 20000);
});