# !{attachment|...}

Макрос `!{attachment}` позволит вам прикрепить медиа-ресурсы к реакциям ⚡️sendMessage и ⚡️sendMenu. Макрос можно записать тремя разными способами, используя параметры fileId, path, или url.

## fileId

```plain 
!{attachment|
  fileId: Путь до id ресурса;
  type: Тип ресурса;
}
```

* fileId - id файла, длинная строка, которую присылает телеграм при отправке медиа ресурса
* type - тип медиа ресурса.

Параметр **type** может принимать одно из следующих значений:

::: details Подробнее

|    Тип     |      Описание       |
|:----------:|:-------------------:|
|   photo    |        фото         |
|   audio    |        аудио        |
|   video    |        видео        |
| video_note |    видео-заметка    |
| animation  |         гиф         |
|  document  |      документ       |
|   voice    | голосовое сообщение |
|  sticker   |       стикер        |

:::

## path

Это сокращенный вариант предыдущей записи:
```plain 
!{attachment| path: Путь до файла}
```

Параметр path, должен ссылаться на **Объект**, которые содержит в себе описанные выше два поля: **fileId** и **type**.

::: details Пример
```json
   "localVar": {
      "file": {
        "fileId": "AgACAgIAAxkBAAEBJ_tkwSLFL09jsxkyApxrlwmMYhaUDAACCckxG2ujCUrBG0DhIsyhHAEAAwIAA3MAAy8E",
        "type": "photo"
      }
```
:::

## url

С помощью следующей записи можно прикрепить невидимую ссылку в виде превью:
```plain 
!{attachment|
  url: http ссылка;
  type: link;
}
```

Обратите внимание, параметр type должен иметь значение link, в будущем возможно будут и другие варианты. 

## MESSAGES FORBIDDEN

::: danger Важно 

Бот не сможет отправить голосовое сообщение пользователю, если у пользователя включен запрет на получение голосовых сообщений в настройках конфиденциальности аккаунта.

::: details Подробнее
```json
"data": {
    "cid": 202449,
    "path": "sendVideoNote",
    "result": {
      "ok": false,
      "error": {
        "code": 400,
        "message": "Bad Request: VOICE_MESSAGES_FORBIDDEN",
        "errorCode": 106,
        "errorKey": "BAD_REQUEST"
      }
```

:::