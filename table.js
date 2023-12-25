document.addEventListener('DOMContentLoaded', function () {
    const concertForm = document.getElementById('concertForm');
    const scheduleTable = document.getElementById('scheduleTable');
    const scheduleBody = document.getElementById('scheduleBody');

    // Загрузка концертов из localStorage
    let savedConcerts = JSON.parse(localStorage.getItem('concerts')) || [];

    // Отображение ранее сохраненных концертов
    displayConcerts(savedConcerts);

    concertForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Получение значений города и даты концерта из формы
        const cityInput = document.getElementById('city');
        const dateInput = document.getElementById('date');

        const city = cityInput.value.trim();
        const date = dateInput.value.trim();

        if (city && date) {
            // Добавление концерта в массив
            const concert = { city, date };
            savedConcerts.push(concert);

            // Сохранение массива концертов в localStorage
            localStorage.setItem('concerts', JSON.stringify(savedConcerts));

            // Отображение концерта
            displayConcert(concert);

            // Очистка полей ввода
            cityInput.value = "";
            dateInput.value = "";
        } else {
            alert('Пожалуйста, введите город и дату концерта.');
        }
    });

    // Функция для отображения концерта
    function displayConcert(concert) {
        const newRow = document.createElement("tr");

        const cityCell = document.createElement("td");
        cityCell.textContent = concert.city;
        newRow.appendChild(cityCell);

        const dateCell = document.createElement("td");
        dateCell.textContent = concert.date;
        newRow.appendChild(dateCell);

        scheduleBody.appendChild(newRow);
    }

    // Функция для отображения ранее сохраненных концертов
    function displayConcerts(concerts) {
        for (const concert of concerts) {
            displayConcert(concert);
        }
    }
});