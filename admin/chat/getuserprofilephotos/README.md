# getUserProfilePhotos

getUserProfilePhotos - получить аватарку(ки) пользователя

![](./1.png)

| Функция | Описание |
| --- | --- |
| Пользователь | указываем ID пользователя, чьи аватарки надо загрузить. |
| offset | порядковый номер первой загружаемой фотографии. |
| limit | количество загружаемых аватарой. |

Информация будет доступна в переменной:

```${userPhotosResult}```

![](./2.png)

```json
    "userPhotosResult": {
      "ok": true,
      "response": {
        "total_count": 5,
        "photos": [
          [
            {
              "file_id": "AgACAgIAAxUAAWQWCmzdxYriilMt7ZhmP8JsTg3sAALPpzEbBno8D8nxBOnctnLQAQADAgADYQADLwQ",
              "file_unique_id": "AQADz6cxGwZ6PA8AAQ",
              "file_size": 10283,
              "width": 160,
              "height": 160
            },
            {
              "file_id": "AgACAgIAAxUAAWQWCmzdxYriilMt7ZhmP8JsTg3sAALPpzEbBno8D8nxBOnctnLQAQADAgADYgADLwQ",
              "file_unique_id": "AQADz6cxGwZ6PA9n",
              "file_size": 29685,
              "width": 320,
              "height": 320
            },
            {
              "file_id": "AgACAgIAAxUAAWQWCmzdxYriilMt7ZhmP8JsTg3sAALPpzEbBno8D8nxBOnctnLQAQADAgADYwADLwQ",
              "file_unique_id": "AQADz6cxGwZ6PA8B",
              "file_size": 87015,
              "width": 640,
              "height": 640
            }
```


::: tip  Особенности

Можно загрузить не более 100 аватарок за 1 запрос
️
**[bot.api method - getUserProfilePhotos](https://core.telegram.org/bots/api#getuserprofilephotos)**

:::





