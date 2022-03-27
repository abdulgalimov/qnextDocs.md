## QNext. реакция loadVoteResults

**loadVoteResults** - загрузить результаты голосования в контенте. 

Чтобы отобразить загруженные результаты нужно использовать макрос !{vote|type:results} 
```js 
 loadContent — взять контент
— takeVoteResults — загрузить голоса
— — takeAdmins — взять всех админов
— — — message — с текстовым макросом - разослать всем сообщение
```

В итоге все администраторы бота получат сообщение с результатами голосования. Можно в реакции [message] написать так: 
```js 
Результаты голосования в опросе:
"${content.techName}"
 !{vote|type:results}
```

И админы получат название опроса вместе с результатами.





[QNext. Голосование](/docs-test/admin/vote-about)

[QNext. Перечень реакции](/docs-test/reactions)
  
[Original](https://telegra.ph/QNext-admin-reaction-loadVoteResults-05-03)
