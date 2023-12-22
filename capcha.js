// Массив возможных правильных ответов
const correctAnswers = ['love is', 'девочка с картинки', 'любовь в сети', 'сердцеедка', 'папина дочка'];

function generateCaptchaImage() {
    const imageIndex = getRandomNumber(1, 5); // Пусть у вас есть 5 изображений с названиями image1.png, image2.png и т.д.
    const imagePath = "image${imageIndex}.png";
    document.getElementById('captcha-image').src = imagePath;
}

// Функция для проверки ответа пользователя
function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.toLowerCase();

    if (correctAnswers.includes(userAnswer)) {
        document.getElementById('result').textContent = 'Правильный ответ!';
    } else {
        document.getElementById('result').textContent = 'Неправильный ответ!';
    }
}

// Генерация изображения при загрузке страницы
generateCaptchaImage();