## QNext реакция trelloGetCard

Реакция ⚡️trelloGetCard позволит получить подробную информацию о карточке trello. Чтобы загрузить карточку, необходимо при создании реакции указать выражение, которое вернет ID карточки.



Например при если в карточке на доске что то поменялось, сработает Тригер Trello модели, в этом тригере есть объект trelloRequest, из которого можно получить ID карточки с помощью выражения
::: tip
${trelloRequest.action.data.card.id}<br>
:::

Загрузив карточку, можно получить такую информацию как метки, описание, чек-листы и т.п.



[QNext. Trello](/docs-test/ph/admin/trello-about)

[QNext. Перечень реакции](/docs-test/ph/reactions)


  
[Original](https://telegra.ph/QNext-admin-reaction-trelloGetCard-02-13)