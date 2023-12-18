document.getElementById('constrForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var city= document.getElementById('city').value;

    var table = generateTable(city);

    var resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(table);

    localStorage.setItem('city', city);
});

function generateTable(city) {
    var table = document.createElement('table');

    //тут надо добавить строки хз ваще

    return table;
}

window.addEventListener('load', function() {
    var city = localStorage.getItem('city');

    document.getElementById('city').value = city;
});