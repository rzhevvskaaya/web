// Открытие модального окна регистрации
document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

// Закрытие модального окна регистрации
document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Обработка нажатия кнопки "Зарегистрироваться"
document.getElementById('registerBtn').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    var password = document.getElementById('passwordInput').value;

    // Закрытие модального окна регистрации
    document.getElementById('modal').style.display = 'none';
});