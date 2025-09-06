document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена, запускаем анимацию...');
    
    const subtitle = document.getElementById('subtitle');
    const comingSoon = document.getElementById('coming-soon');
    
    // Проверяем элементы
    if (!subtitle || !comingSoon) {
        console.error('Элементы не найдены!');
        return;
    }
    
    // Функция анимации
    function startAnimation() {
        console.log('Начинаем анимацию...');
        
        // Шаг 1: Показываем только "14SEPT" (уже видно)
        console.log('Шаг 1: 14SEPT показан');
        
        // Шаг 2: Через 3 секунды показываем подзаголовок
        setTimeout(() => {
            console.log('Шаг 2: Показываем подзаголовок');
            subtitle.classList.add('show');
        }, 3000);
        
        // Шаг 3: Через 6 секунд показываем Coming Soon
        setTimeout(() => {
            console.log('Шаг 3: Показываем Coming Soon');
            comingSoon.classList.add('show');
        }, 6000);
    }
    
    // Функция перезапуска
    function restart() {
        console.log('Перезапуск анимации...');
        subtitle.classList.remove('show');
        comingSoon.classList.remove('show');
        setTimeout(startAnimation, 500);
    }
    
    // Запускаем анимацию через 1 секунду
    setTimeout(startAnimation, 1000);
    
    // Перезапуск по клику
    document.addEventListener('click', restart);
    
    // Перезапуск по пробелу
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            restart();
        }
    });
});