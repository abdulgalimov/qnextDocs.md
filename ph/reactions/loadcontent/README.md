## QNext. реакция loadContent

**loadContent** - Взять (загрузить) контент, для последующей работы с ним.

Может понадобится в тех случаях, когда, например, нужно получить результаты голосования:

Создаем расписание с реакциями:
::: tip
 [loadContent] - взять контент<br> — [loadVoteResults] - загрузить голоса<br> — — [takeAdmins] - взять всех админов<br> — — — [message] с текстовым макросом !{vote|type:results} - разослать всем сообщение<br>
:::

В итоге все администраторы бота получат сообщение с результатами голосования. Можно в реакции [message] написать так:
::: tip
Результаты голосования в опросе<br>"${content.techName}"<br>!{vote|type:results}<br>
:::

И админы получат название опроса вместе с результатами.



[QNext. Контент](/docs-test/ph/admin/content-about)

[QNext. Перечень реакции](/docs-test/ph/reactions)
  
[Original](https://telegra.ph/QNext-admin-reaction-loadContent-05-07)