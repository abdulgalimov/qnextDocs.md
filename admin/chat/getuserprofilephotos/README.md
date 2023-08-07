# getUserProfilePhotos

**getUserProfilePhotos** - получить аватарку(ки) пользователя.

| Функция      | Описание                                                                       |
|--------------|--------------------------------------------------------------------------------|
| Пользователь | Указать пользователя, чьи аватарки надо загрузить, с помощью ID или @username. |
| offset       | Порядковый номер первой загружаемой фотографии, начиная с 0.                   |
| limit        | количество загружаемых аватаров пользователя. Не более 100 за один запрос.     |

После использования переменной, информация будет доступна в переменной:

```plain
${userPhotosResult}
```

::: details Подробнее...
```json
"userPhotosResult": {
--"ok": true,
  "response": {
----"total_count": 5,
    "photos": [
      [
------{
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
:::

::: danger Ограничения
* Аватарка пользователя будет доступна боту только в том случае, если пользователь в настройках Конфиденциальности своего профиля, установил видимость фото в своем профиле для всех.
:::

---

**[bot.api method - getUserProfilePhotos](https://core.telegram.org/bots/api#getuserprofilephotos)**




