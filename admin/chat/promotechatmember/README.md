# promoteChatMember

**promoteChatMember** - Выдать или отозвать права администратора в чате от имени бота, а так же изменять и забирать права у админов, назначенных ботом.

#### Чат

В логах реакция примененная в чате выглядит следующим образом:

| Разрешение                 | Описание                                                     |
|----------------------------|--------------------------------------------------------------|
| **can_change_info**        | разрешение менять профиль чата (фото, био, и прочее)         |
| **can_delete_message**     | разрешение удалять сообщения других участников чата          |
| **can_invite_users**       | разрешение приглашать участников чата                        |
| **can_restrict_members**   | разрешение ограничивать (исключать и банить) участников чата |
| **can_promote_members**    | разрешение назначать в админы участников чата                |
| **can_manage_voice_chats** | разрешение управлять голосовым чатом                         |
| **can_manage_video_chats** | разрешение управлять видеочатом                              |
| **can_pin_message**        | разрешение закреплять сообщения в чате                       |
| **is_anonymous**           | анонимность                                                  |
| **can_manage_topics**      | разрешение управлять топиками в чате                         |

::: tip Заметка
* ◻️ - выключено (запрещено)
* ☑️ - включено (разрешено)
  :::

::: details Подробнее

```plain
    "reactionResult": {
      "ok": true,
      "response": true,
      "data": {
        "url": "URL_LINK",
        "body": {
          "can_change_info": false,
          "can_delete_messages": false,
          "can_invite_users": false,
          "can_restrict_members": false,
          "can_promote_members": false,
          "can_manage_voice_chats": false,
          "can_manage_video_chats": false,
          "can_pin_messages": false,
          "is_anonymous": false,
          "can_manage_topics": false,
          "chat_id": -1001798752916,
          "user_id": 2036172875
        }
```
:::

#### Канал

В логах реакция примененная в канале выглядит следующим образом:

| Разрешение                 | Описание                                                                                |
|----------------------------|-----------------------------------------------------------------------------------------|
| **can_change_info**        | разрешение изменять профиль канала                                                      |
| **can_delete_messages**    | разрешение удалять чужие публикации в канале                                            |
| **can_invite_users**       | разрешение добавлять пользователей в канале (лимит Телеграма до 200 первых подписчиков) |
| **can_restrict_members**   | разрешение управлять пользователями                                                     |
| **can_promote_members**    | разрешение назначать админов в канале                                                   |
| **can_manage_voice_chats** | разрешение управлять голосовым чатом в канале (запускать и останавливать)               |
| **can_manage_video_chats** | разрешение управлять видеочатом                                                         |
| **can_post_messages**      | разрешение публиковать посты в канале                                                   |
| **can_edit_messages**      | разрешение редактировать чужие посты в канале                                           |

::: tip Заметка
* ◻️ - выключено (запрещено)
* ☑️ - включено (разрешено)
  :::

::: details Подробнее

```plain
    "reactionResult": {
      "ok": true,
      "response": true,
      "data": {
        "url": "URL_LINK",
        "body": {
          "can_change_info": false,
          "can_delete_messages": false,
          "can_invite_users": false,
          "can_restrict_members": false,
          "can_promote_members": false,
          "can_manage_voice_chats": false,
          "can_manage_video_chats": false,
          "can_post_messages": true,
          "can_edit_messages": true,
          "chat_id": -1001538343569,
          "user_id": 2036172875
        }
```
:::

::: tip Особенности️
**[bot.api method - promoteChatMember](https://core.telegram.org/bots/api#promotechatmember)**
:::



