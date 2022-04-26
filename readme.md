Имя студента:  Алистарова Марина
Время затраченное на разработку проекта: 32 часа

## Скрипты

В проекте, можно использовать следующие скрипты

### `npm run start:eslint`

Запускает проверку прохождения проекта на eslint.

Если есть ошибки или предупреждения, они выведутся в консоли после завершения выполнения команды.

### `npm run start:client`

Запускает **клиентскую** часть приложение в режиме разработки.

Откройте [http://localhost:3000](http://localhost:3000) чтобы просмотреть его в браузере.

Страница перезагрузится, если вы внесете правки.

Вы также увидите любые ошибки линтера в консоли.

### `npm run start:server`

Запускает **серверную** часть приложения, с которой можно получить данные для разработки клиентского приложения. Доступно на [http://localhost:3001](http://localhost:3001)

### `npm run start`

Запускает клиентскую и серверную часть приложения в *одной* консоли, параллельно.

### `npm run build`

Собирает **клиентскую** часть приложение в папку `build`.

Сборка минифицирована, а имена файлов включают хеши.


## Сервер

После запуска команды `npm run start:server` (или `npm run start` для запуска двух приложений параллельно), сервер доступн по пути [http://localhost:3001](http://localhost:3001).

### Структуры данных

#### Quest

```json
{
  "id": 1,
  "title": "Склеп",
  "description": "Средневековое кладбище таит в себе много страшных тайн. Местные жители говорят, что в склепе похоронен граф вампир, который по ночам выходит на охоту, чтобы испить человеческой крови. Через час солнце опустится за горизонт, успеете ли вы убить вампира и выбраться из склепа?",
  "previewImg": "img/preview-sklep.jpg",
  "coverImg": "img/cover-sklep.jpg",
  "type": "horror",
  "level": "hard",
  "peopleCount": [2, 5],
  "duration": 120
}
```

#### OrderPost

```json
{
  "name": "Jon Vek",
  "peopleCount": 1,
  "phone": "7000000000",
  "isLegal": true
}
```

### Список роутов:

- **GET** /quests — получить список квестов.

- **GET** http://localhost:3001/quests/1 — получить квест c идентификатором `id`.

- **POST** http://localhost:3001/orders — отправить новый заказ.
