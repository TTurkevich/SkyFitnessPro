# **_SkyFitnessPro_**

# Курсовая работа. Процессы командной разработки.

## Наша команда:

-   Татьяна Туркевич, [github](https://github.com/TTurkevich)
-   Зарина Нугманова, [github](https://github.com/KittySaur)
-   Любовь Яреньгина, [github](https://github.com/Yarengina)
-   Вячеслав Ардалин, [github](https://github.com/santaCruz96)
-   Анатолий Багров, [github](https://github.com/BagrovAnatoli)

## Описание проекта:

Сайт для онлайн школы тренировок “SkyFitnessPro”.

Макет доступен [здесь.](https://www.figma.com/file/QoOmLM2WGbES23xQeDCCYi/%D0%A1%D0%B0%D0%B9%D1%82-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BE%D0%BA?node-id=0%3A1)

Приложение реализовано как SPA.

## Структура приложения

### 1. Главная страница:

-   логотип приложения и краткое описание онлайн школы
-   список карточек с названиями всех курсов, имеющихся в базе данных
-   кнопка "Войти", при клике на которую пользователь попадает на страницу авторизации

### 2. Страница курса:

-   описание курса
-   кнопка "Добавить тренировку", при клике на которую пользователь добавляет выбранный курс в свой профиль

### 3. Страница авторизации:

-   на данной странице пользователь имеет возможность зарегистрироваться или войти в свой аккаунт

### 4. Страница "Мой профиль":

-   логотип приложения и информация о пользователе
-   кнопки для смены логина и пароля
-   кнопка выхода из аккаунта
-   список курсов пользователя с кнопкой "Перейти", при клике на которую открывается модальное окно со всеми тренировками данного курса
-   в правом верхнем углу отображается имя пользователя

### 5. Страница тренировки:

-   логотип приложения и название курса
-   видео тренировки с названием и кратким описанием, при клике на которые открывается модальное окно со всеми тренировками данного курса
-   список упражнений из базы данных
-   таблица с прогрессом пользователя
-   кнопка для возможности заполнения прогресса по тренировке
-   в правом верхнем углу отображается имя пользователя, при клике на которое осуществляется переход на страницу "Мой профиль"

## Функционал приложения

### Главная страница:

-   при клике на кнопку "Войти" пользователь попадает на страницу авторизации, если он еще не авторизован
-   если пользователь авторизован, то при клике на кнопку "Войти" он сразу попадает на страницу "Мой профиль"
-   список карточек выводится в соответствии с названиями всех курсов, имеющихся в базе данных
-   по клику на выбранный курс пользователь попадает на страницу, где может ознакомиться с его описанием
-   при нажатии на кнопку "Наверх" страница прокручивается в начало списка доступных курсов

### Cтраницы авторизации и регистрации:

-   настроена валидация полей логина и пароля
-   при возникновении ошибок выводится соответствующее сообщение

### Страница "Мой профиль":

-   при клике на кнопки "Редактировать логин", "Редактировать пароль" появляется модальное окно с возможностью редактировать и сохранять введенные данные
-   при клике на кнопку "Выйти из аккаунта" осуществляется выход из аккаунта с переходом на главную страницу
-   при клике на карточку курса появляется модальное окно с возможностью выбора тренировки, выполненные тренировки отмечены цветом и галочкой
-   при клике на тренировку пользователь попадает на страницу соответствующей тренировки

### Страница тренировки:

-   в правом верхнем углу отображается имя пользователя, при клике на которое осуществляется переход на страницу профиля
-   при клике на название тренировки (над видео) появляется модальное окно с возможностью выбрать тренировку
-   при клике на кнопку "Заполнить свой прогресс" появляется модальное окно с возможностью ввести данные и сохранить их, при этом уже имеющиеся до этого данные о количестве выполненных повторений отображаются сразу при открытии окна
-   настроена валидация полей ввода данных о прогрессе
-   после сохранения данных появляется модальное окно с надписью "Ваш прогресс засчитан", исчезающее через 1 секунду
-   в таблице прогресса отображаются упражнения из базы данных, выводится прогресс в процентах, который автоматически рассчитывается после ввода данных пользователем
-   при попытке неавторизованного пользователя зайти на страницу тренировки он автоматически попадает на страницу c ошибкой

### Backend

В качестве бэкенда и для хранения данных используется Realtime Database от Firebase.
Запросы к базе реализованы через REST API.

Ключ приложения (**REACT_APP_FIREBASE_API_KEY**) находится в **.env**

В базе данных 3 корневых узла: courses, users и workouts.

### CI/CD

Приложение опубликовано, используя сервис Netlify. Адрес [здесь.](https://skyfitnesspro.netlify.app/)

### Технический стек

- [x] React
- [x] Redux + Redux Toolkit
- [x] Firebase
- [x] React Router DOM, реализация routing

### Запуск проекта

1. Склонируйте репозиторий:

```
$ git clone https://github.com/TTurkevich/SkyFitnessPro.git
```

2. Установите зависимости:

```
$ npm i
```

3. Запустите проект:

```
$ npm start
```

----