function createTable() {
    // Массив с городами России
    const cities = ["Москва", "Санкт-Петербург", "Екатеринбург", "Новосибирск", "Краснодар", "Владивосток", "Казань", "Сочи", "Ростов-на-Дону", "Нижний Новгород"];
    const dates = ["29.05.2023", "20.06.2023", "28.03.2023", "04.01.2023", "05.09.2023", "18.02.2023", "28.04.2023", "20.01.2023", "10.10.2023", "09.06.2023"];

    // Создание таблицы
    const table = document.createElement("table");

    // Добавление заголовка
    const headerRow = table.insertRow(0);
    const headers = ["Город", "Дата концерта"];
    headers.forEach((headerText, index) => {
        const th = document.createElement("th");
        const text = document.createTextNode(headerText);
        th.appendChild(text);
        headerRow.appendChild(th);
    });

    // Загрузка задач из localStorage
    let savedTable = JSON.parse(localStorage.getItem('table')) || [];


    // Добавление данных о концертах
    for (let i = 0; i < cities.length; i++) {
        const concertRow = table.insertRow(i + 1);
        const city = cities[i];
        const date = dates[i];
        const data = [city, date];

        data.forEach((cellData, index) => {
            const td = document.createElement("td");
            const text = document.createTextNode(cellData);
            td.appendChild(text);
            concertRow.appendChild(td);
        });
    }

    // Сохранение массива в localStorage
    localStorage.setItem('table', JSON.stringify(savedTable));

    // Добавление таблицы к body
    document.body.appendChild(table);

    // Добавление задачи в массив
    savedTable.push(table);

    // Сохранение массива задач в localStorage
    localStorage.setItem('table', JSON.stringify(savedTable));

    // Отображение задачи
    displayTask(watching);
}
// Функция для отображения задачи
function displayTask(table) {
    const notable = Array.from(notable).find(item => item.textContent === '');
    if (notable) {
        notable.textContent = table;
    }
}

