# takeMentions

**takeMentions** - взять пользователя(ей) для дальнейшей работы. 

#### Примеры

Узнать информацию о пользователе с помощью @username или mention

::: details Подробнее

Команда: /!take (.+)/i

Реакции:
```plain
— takeMentions 
— — log
```
![](./1.jpg)

```json
  "mentions": {
      "poolstudio": {
        "id": 1234567890,
        "createdAt": "2020-05-04T13:01:04.000Z",
        "updatedAt": "2023-05-19T18:58:35.000Z",
        "aid": 262576,
        "type": 0,
        "name": "name",
        "username": "username",
        "flags": 4,
        "flagsHelp": 209,
        "languageCode": 1,
        "isBot": 0,
        "ban": 0,
        "isImported": 0,
        "client": {
          "id": 1223133,
          "createdAt": "2020-12-13T08:14:26.000Z",
          "updatedAt": "2023-07-24T13:22:02.000Z",
          "botId": 5622,
          "userId": 1234567890,
          "refType": null,
          "flags": 1,
          "state": 0,
          "legacyKeyboardId": 0,
          "keyboardId": 0,
          "formId": 0,
          "dataId": 0,
          "status": 1,
          "startedAt": "2020-12-13T08:14:26.000Z",
          "ban": 0,
          "languageCode": 1,
          "isImported": 0,
          "connectedTriggerId": 0,
          "timezone": 0
        }
      },
      "akciumkicum": {
        "id": 1234567890,
        "createdAt": "2020-01-30T13:16:49.000Z",
        "updatedAt": "2023-05-19T18:34:22.000Z",
        "aid": 41258,
        "type": 0,
        "name": "name",
        "username": "username",
        "flags": 4,
        "flagsHelp": 215,
        "languageCode": 1,
        "isBot": 0,
        "ban": 0,
        "isImported": 0,
        "client": {
          "id": 1221965,
          "createdAt": "2020-12-12T22:55:52.000Z",
          "updatedAt": "2023-07-11T15:32:31.000Z",
          "botId": 5622,
          "userId": 1234567890,
          "refType": null,
          "flags": 1,
          "state": 0,
          "legacyKeyboardId": 0,
          "keyboardId": 2516121,
          "formId": 0,
          "dataId": 0,
          "status": 1,
          "startedAt": "2020-12-12T23:01:00.000Z",
          "ban": 0,
          "languageCode": 1,
          "isImported": 0,
          "connectedTriggerId": 0,
          "timezone": 0
        }
      }
    }
```

:::

Если необходимо исключить пользователя из чата, нам потребуется:

::: details Подробнее

Команда: /!take (.+)/i

Реакции:
```plain
— takeMentions
— — takeChat ${chat.id}
— — — kickChatMember
```

:::
---

::: tip  Особенности
* Работает только юзернеймами (@username) и меншенами (mention: Account6 testgen)
* Не работает с ID (123456789)
* Если необходимо использовать @username и ID, подойдет реакция: [takeUsers](/docs/admin/users/takeusers)
:::










