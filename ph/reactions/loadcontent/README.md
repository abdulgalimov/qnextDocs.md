## QNext. реакция loadContent

**loadContent** - Взять (загрузить) контент, для последующей работы с ним.

Может понадобится в тех случаях, когда, например, нужно получить результаты голосования:

Создаем расписание с реакциями:
```js 
 [loadContent] - взять контент
 — [loadVoteResults] - загрузить голоса
 — — [takeAdmins] - взять всех админов
 — — — [message] с текстовым макросом !{vote|type:results} - разослать всем сообщение

```

В итоге все администраторы бота получат сообщение с результатами голосования. Можно в реакции [message] написать так:
```js 
Результаты голосования в опросе
"${content.techName}"
!{vote|type:results}

```

И админы получат название опроса вместе с результатами.



[QNext. Контент](/docs-test/ph/admin/content-about)

[QNext. Перечень реакции](/docs-test/ph/reactions)
  
[Original](https://telegra.ph/QNext-admin-reaction-loadContent-05-07)