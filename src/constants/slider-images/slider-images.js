import authorization from './../../img/prian-screens/authorization.png';
import form from './../../img/prian-screens/form.png';
import mainScreen from './../../img/prian-screens/main-screen.png';
import update from './../../img/prian-screens/update.png';
import main from './../../img/search-repositories/main.png';
import start from './../../img/search-repositories/start.png';
import aside from './../../img/search-repositories/aside.png';
import entrance from './../../img/maze/entrance.png';
import maze from './../../img/maze/maze.png';
import description from './../../img/maze/description.png';
import reviews from './../../img/maze/reviews.png';
import reviewsForUser from './../../img/maze/reviews_for_user.png';
import formForReview from './../../img/maze/form_for_review.png';
import privatePage from './../../img/maze/users.png';
import changeUserRole from './../../img/maze/change_user-role.png';
import mainTodo from './../../img/todo/main-todo.png';
import miniControlPanel from './../../img/todo/mini_control-panel.png';
import controlPanel from './../../img/todo/control-panel.png';
import activeTodos from './../../img/todo/active-todo.png';
import completedTodos from './../../img/todo/completed-todo.png';



export const SLIDER_PRIAN_IMAGES = [
    [authorization, 'authorization', 'Пряники', 'Тестовое задание - небольшое SPA-приложение, взаимодействующее с сервером. Реализованы страницы: авторизация и страница с таблицей, данные для которой получены с сервера. Можно взаимодействовать с таблицей - добавлять/редактировать/удалять записи. Изменения сразу отображаются в таблице. Данные для авторизации: логин - user{N}, где вместо N нужно ввести число, например user1, user2… user33. Пароль - password – одинаков для всех логинов.', 'https://fida-vs.github.io/test-task-pryaniky/login', 'https://github.com/Fida-VS/test-task-pryaniky'],
    [mainScreen, 'main-screen'],
    [form, 'form'],
    [update, 'update'],
];

export const SLIDER_REPOS_IMAGES = [
    [start, 'start', 'Поиск репозиториев', 'Приложение для поиска репозиториев GitHub с помощью GitHub REST API. Результаты поиска представлены в виде таблицы со следующими столбцами: название, язык, число форков, число звёзд, дата обновления. По выбору строки должны отображаться детали: язык, число звёзд, описание, лицензия. Реализованы пагинация и сортировка с возможностью выбора направления по следующим столбцам: число звёзд, число форков, дата обновления.', 'https://fida-vs.github.io/searchRepositories/', 'https://github.com/Fida-VS/searchRepositories'],
    [main, 'main'],
    [aside, 'aside'],
    
];

export const SLIDER_MAZE_IMAGES = [
    [entrance, 'entrance', 'Лабиринт', 'Full-stack приложение. Браузерная игра «Лабиринт». Реализованы страницы: регистрация, авторизация, описание игры, страница с игрой, страница с информацией, отзывы, приватная страница для администратора с таблицей пользователей. На главной странице можно проходить рандомно сгенерированные лабиринты. Для неавторизованных пользователей она недоступна. На странице с отзывами есть возможность оставить отзыв (если вы авторизованы). У администратора есть возможность удалить/отредактировать отзыв, а также удалить пользователя, или поменять его роль.', 'http://45.8.97.126/', 'https://github.com/Fida-VS/maze'],
    [maze, 'maze'],
    [description, 'description'],
    [reviews, 'reviews'],
    [reviewsForUser, 'reviews-for-user'],
    [formForReview, 'form-for-review'],
    [privatePage, 'private-page'],
    [changeUserRole, 'change-user-role'],
    
];

export const SLIDER_TODO_IMAGES = [
    [mainTodo, 'main-todo', 'Список дел', 'Приложение "Список дел" - удобный инструмент для управления задачами. С его помощью вы можете создавать список дел, отмечать выполненные задачи и отслеживать прогресс выполнения. Основные функции: Добавление задач - вы можете добавить новую задачу в свой список дел всего за пару кликов.Удаление задач: Завершили дело? Просто удалите его из списка! Фильтрация задач: Приложение позволяет вам выбирать, какие задачи отображаются: только завершенные, незавершенные или все сразу. Для хранения данных используется JSONPlaceholder.', 'https://fida-vs.github.io/minboxTodo/', 'https://github.com/Fida-VS/minboxTodo'],
    [miniControlPanel, 'mini_control-panel'],
    [controlPanel, 'control-panel'],
    [activeTodos, 'active-todos'],
    [completedTodos, 'completed-todos'],
    
];