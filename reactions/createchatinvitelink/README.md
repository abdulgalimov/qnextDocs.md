## QNext. реакция createChatInviteLink

createChatInviteLink - Используйте этот метод, чтобы создать дополнительную ссылку для приглашения в чат.

![](./1.png)

Интерфейс  дублирует настройки создания ссылок в клиенте.
* Чаты/Каналы - выбираем нужный чат
* Название - придумываем название для ссылки
* Количество участников - по умолчанию стоит без лимита. можно установить любое количество.
* Подтверждение администратора - все кто будут нажмимать на ссылку, будут отправлять в чат запрос, и администраторы смогут его либо принять, либо отклонить руками, либо с помощью реакций:


⚡️ approveChatJoinRequest - подтвердить запрос

⚡️ declineChatJoinRequest - отклонить запрос





[**bot.api method createChatInviteLink** ](https://core.telegram.org/bots/api#createchatinvitelink)
### Особенности:

Можно создать не более 20 ссылок за 60 секунд.



[Qnext. Пригласительные ссылки](/docs-test/admin/invitelink-about)

[QNext. Перечень реакции](/docs-test/reactions)
  
[Original](https://telegra.ph/QNext-admin-reaction-createChatInviteLink-09-25)