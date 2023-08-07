# getChat

**getChat** - получить информацию о чате. 

Чаты/Каналы - указываем чат в котором необходимо выполнить действие

Информация о чате будет доступна в переменной:

```plain
${getChatResult}
```

::: details Подробнее
```json
"getChatResult": {
--"ok": true,
  "response": {
----"id": -1001332324846,
    "title": "QNext Флудилка",
    "username": "QNextChat",
    "type": "supergroup",
    "active_usernames": [
      "QNextChat"
    ],
    "description": "Общение на ты, но с уважением к собеседнику!",
    "invite_link": "https://t.me/+T2mp7gIGhiQT4imh",
    "permissions": {
------"can_send_messages": true,
      "can_send_media_messages": true,
      "can_send_audios": true,
      "can_send_documents": true,
      "can_send_photos": true,
      "can_send_videos": true,
      "can_send_video_notes": true,
      "can_send_voice_notes": true,
      "can_send_polls": false,
      "can_send_other_messages": true,
      "can_add_web_page_previews": false,
      "can_change_info": false,
      "can_invite_users": false,
      "can_pin_messages": false,
      "can_manage_topics": true
    },
----"join_to_send_messages": true,
    "slow_mode_delay": 10,
    "photo": {
------"small_file_id": "AQADAgADnLMxGxj1mEkACAIAAxJG8dsW____H0-3PZrLmC0vBA",
      "small_file_unique_id": "AQADnLMxGxj1mEkAAQ",
      "big_file_id": "AQADAgADnLMxGxj1mEkACAMAAxJG8dsW____H0-3PZrLmC0vBA",
      "big_file_unique_id": "AQADnLMxGxj1mEkB"
    }
  }
```
:::

::: tip Особенности
Поддерживаются и юзернеймы и ID чатов.
* С помощью юзернейма можно запросить информаю совершенно о любом публичном чате
* С помощью ID можно запросить о чатах, в которых состоит бот
:::

---

**[bot.api method - getChat](https://core.telegram.org/bots/api#getchat)**







