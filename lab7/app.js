function createMarquee(elementId, text, speed) {
    var element = document.getElementById(elementId);

    if (!element) {
        console.error('Элемент с ID ' + elementId + ' не найден.');
        return;
    }


    element.innerHTML = '';

    var textNode = document.createTextNode(text);


    element.appendChild(textNode);

    // Устанавливаем начальные координаты для текста
    var textWidth = element.offsetWidth;
    var textHeight = element.offsetHeight;
    var textPosition = element.offsetLeft;

    // Функция для перемещения текста
    function moveText() {
        // Проверяем, нужно ли продолжать движение
        if (textPosition < -textWidth) {
            textPosition = element.offsetLeft;
        }

        // Перемещаем текст
        element.style.left = textPosition + 'px';

        // Уменьшаем позицию текста
        textPosition -= speed;

        // Запускаем следующий цикл анимации
        setTimeout(moveText, 30);
    }
    // Запускаем анимацию
    moveText();
}

// Пример использования функции:
createMarquee('marquee-element-id', 'Бегущая строка текста', 10);