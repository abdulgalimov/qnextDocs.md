# Пользователи

**Реакции** - предназначенные для работы с пользователями бота и/или участниками чата.


**Реакции**

| Реакция | Описание |
| --- | --- |  
|[takeAdmins](/docs/admin/users/takeadmins)|Загрузить админов|
|[takeMentions](/docs/admin/users/takementions)|Получить всех упомянутых в тексте людей и чаты|
|[takeAuthorUser](/docs/admin/users/takeauthoruser)|Получить пользователя инициатора действия|
|[takeButtonUsers](/docs/admin/users/takebuttonusers)|Загрузить проголосовавших за кнопку|
|[takeRandomUser](/docs/admin/users/takerandomuser)|Загрузить случайного пользователя|
|[takeReplyUser](/docs/admin/users/takereplyuser)|Загрузить пользователя, на чье сообщение ответили|
|[takeUsers](/docs/admin/users/takeusers)|взять пользователя(ей)|

---

::: tip  Особенности

* Все реакции take ограничены первыми 200 пользователями. 201 взять не получится.
* Исключением является реакция **takeRandomUsers** - она может взять из всех пользователей бота и отразить несколько, согласно настройкам

:::
