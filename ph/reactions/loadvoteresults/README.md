---
sidebar: auto
---

## QNext. реакция loadVoteResults

**loadVoteResults** - загрузить результаты голосования в контенте. 

Чтобы отобразить загруженные результаты нужно использовать макрос !{vote|type:results} 
::: tip
 loadContent — взять контент<br>— takeVoteResults — загрузить голоса<br>— — takeAdmins — взять всех админов<br>— — — message — с текстовым макросом - разослать всем сообщение<br>
:::

В итоге все администраторы бота получат сообщение с результатами голосования. Можно в реакции [message] написать так: 
::: tip
Результаты голосования в опросе:<br>"${content.techName}"<br> !{vote|type:results}<br>
:::

И админы получат название опроса вместе с результатами.





[QNext. Голосование](/docs-test/ph/admin/vote-about)

[QNext. Перечень реакции](/docs-test/ph/reactions)

[Original](https://telegra.ph/QNext-admin-reaction-loadVoteResults-05-03)