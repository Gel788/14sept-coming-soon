document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Страница загружена, запускаем правильную анимацию...');
    
    const mainText = document.getElementById('main-text');
    const subtitle = document.getElementById('subtitle');
    const comingSoon = document.getElementById('coming-soon');
    
    // Проверяем элементы
    if (!mainText || !subtitle || !comingSoon) {
        console.error('❌ Элементы не найдены!');
        return;
    }
    
    console.log('✅ Все элементы найдены');
    
    // Функция правильной анимационной последовательности
    function startCorrectAnimation() {
        console.log('🚀 Запуск правильной последовательности...');
        
        // Убеждаемся что все элементы скрыты в начале
        mainText.classList.remove('show');
        subtitle.classList.remove('show');
        comingSoon.classList.remove('show');
        
        // ФАЗА 1: Показываем только "14SEPT" (1-4 секунды)
        setTimeout(() => {
            console.log('✨ Фаза 1: Показ 14SEPT');
            mainText.classList.add('show');
        }, 1000);
        
        // ФАЗА 2: Скрываем "14SEPT" и показываем только подзаголовок (4-7 секунд)
        setTimeout(() => {
            console.log('🔄 Переход к фазе 2: скрываем 14SEPT');
            mainText.classList.remove('show');
            
            setTimeout(() => {
                console.log('💫 Фаза 2: показ только подзаголовка');
                subtitle.classList.add('show');
            }, 600); // Небольшая задержка для плавности
        }, 4000);
        
        // ФАЗА 3: Показываем все вместе + Coming Soon (7+ секунд)
        setTimeout(() => {
            console.log('🎉 Фаза 3: показ всего вместе');
            // Показываем 14SEPT обратно
            mainText.classList.add('show');
            // Подзаголовок уже показан
            // Добавляем Coming Soon
            setTimeout(() => {
                comingSoon.classList.add('show');
                console.log('🎊 Финальная фаза: все элементы показаны');
            }, 300);
        }, 7000);
    }
    
    // Функция перезапуска
    function restart() {
        console.log('🔄 Перезапуск анимации...');
        
        // Скрываем все элементы
        mainText.classList.remove('show');
        subtitle.classList.remove('show');
        comingSoon.classList.remove('show');
        
        // Перезапускаем через небольшую задержку
        setTimeout(startCorrectAnimation, 500);
    }
    
    // Запускаем анимацию через 1 секунду после загрузки
    setTimeout(startCorrectAnimation, 500);
    
    // Перезапуск по клику
    document.addEventListener('click', function(e) {
        // Проверяем, что клик был не по загрузочным точкам
        if (!e.target.closest('.loading-dots')) {
            restart();
        }
    });
    
    // Перезапуск по пробелу
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            restart();
        }
    });
    
    console.log('🎮 Интерактивность настроена: клик или пробел для перезапуска');
});