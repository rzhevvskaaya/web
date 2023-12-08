(function() {
    // Функция для измерения времени загрузки страницы
    var startTime = performance.now();

    // Событие загрузки страницы
    window.addEventListener('load', function () {
        var endTime = performance.now();
        var loadTime = endTime - startTime;

        // Получаем элемент footer по его id
        var footer = document.getElementById('pageFooter');

        // Вставляем информацию о времени загрузки в подвал
        footer.innerHTML = 'Время загрузки страницы: ' + loadTime.toFixed(2) + ' миллисекунд';
    });
})();