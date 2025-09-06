document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Страница загружена, запускаем резкую анимацию...');
    
    const mainText = document.getElementById('main-text');
    const subtitle = document.getElementById('subtitle');
    const comingSoon = document.getElementById('coming-soon');
    
    // Проверяем элементы
    if (!mainText || !subtitle || !comingSoon) {
        console.error('❌ Элементы не найдены!');
        return;
    }
    
    console.log('✅ Все элементы найдены');
    
    // Функция резкой анимационной последовательности
    function startSharpAnimation() {
        console.log('⚡ Запуск резкой последовательности...');
        
        // Убеждаемся что все элементы скрыты в начале
        mainText.classList.remove('show');
        subtitle.classList.remove('show');
        comingSoon.classList.remove('show');
        
        // ФАЗА 1: Резко показываем только "14SEPT" (1-3 секунды)
        setTimeout(() => {
            console.log('⚡ Фаза 1: РЕЗКО показ 14SEPT');
            mainText.classList.add('show');
        }, 1000);
        
        // ФАЗА 2: Резко скрываем "14SEPT" и резко показываем подзаголовок (3-5 секунд)
        setTimeout(() => {
            console.log('⚡ Переход к фазе 2: РЕЗКО скрываем 14SEPT');
            mainText.classList.remove('show');
            
            // Минимальная задержка для резкости
            setTimeout(() => {
                console.log('⚡ Фаза 2: РЕЗКО показ подзаголовка');
                subtitle.classList.add('show');
            }, 100);
        }, 3000);
        
        // ФАЗА 3: Резко показываем все вместе + Coming Soon (5+ секунд)
        setTimeout(() => {
            console.log('⚡ Фаза 3: РЕЗКО показ всего вместе');
            
            // Добавляем класс для финальной фазы - красивое расположение друг под другом
            const content = document.querySelector('.content');
            content.classList.add('final-phase');
            
            // Показываем 14SEPT обратно резко
            mainText.classList.add('show');
            // Подзаголовок уже показан
            // Добавляем Coming Soon резко
            setTimeout(() => {
                comingSoon.classList.add('show');
                console.log('🎊 Финальная фаза: все элементы показаны РЕЗКО друг под другом');
            }, 100);
        }, 5000);
    }
    
    // Функция перезапуска
    function restart() {
        console.log('🔄 Перезапуск резкой анимации...');
        
        // Резко скрываем все элементы
        mainText.classList.remove('show');
        subtitle.classList.remove('show');
        comingSoon.classList.remove('show');
        
        // Убираем класс финальной фазы
        const content = document.querySelector('.content');
        content.classList.remove('final-phase');
        
        // Перезапускаем быстро
        setTimeout(startSharpAnimation, 200);
    }
    
    // Запускаем анимацию через полсекунды после загрузки
    setTimeout(startSharpAnimation, 500);
    
    // Перезапуск по клику
    document.addEventListener('click', function(e) {
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