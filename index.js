(function() {

    // Событие загрузки страницы
    window.addEventListener('load', function () {
        var loadTime = performance.now();

        // Получаем элемент footer по его id
        var footer = document.getElementById('pageFooter');

        // Вставляем информацию о времени загрузки в подвал
        footer.innerHTML = 'Время загрузки страницы: ' + loadTime.toFixed(2) + ' миллисекунд';
    });
})();