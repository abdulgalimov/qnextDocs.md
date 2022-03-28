## QNext. Макрос trello

Макрос доступен в тригере модели Trello, т.е. когда trello сообщает боту о том что на доске произошли какие то изменения. Макрос поможет показать информацию из полученных данных.
* [type: action](#type:-action)
    * [data: card](#data:-card)
    * [data: listBefore](#data:-listbefore)
    * [data: listAfter](#data:-listafter)
    * [data: list](#data:-list)
    * [data: board](#data:-board)
    * [data: memberCreator](#data:-membercreator)
* [type: card](#type:-card)
    * [data: labels](#data:-labels)
### type: action

Макросы типа action работают в момент когда от Trello прилетает событие с каким либо действием, например
 * Создание списка
* Перемещение карточки между списками
* Написание комментария
* и другие...

Макрос умеет показывать различную информацию в зависимости от параметра data:
```js 
!{trello| 
  type: action;
  data: ...
}
```
### data: card

Показать информацию о карточке:
```js 
!{trello|
  type: action;
  data: card;
}
```

Показать ссылку на карточку:
```js 
!{trello|
  type: action;
  data: card;
  showLink;
}
```

По умолчанию макрос покажет название карточки внутри которой зашита ссылка на карточку. Если надо написать любой текст вместо названия карточки, воспользуйтесь параметром title:
```js 
!{trello|
  type: action;
  data: card;
  title: Показать карточку;
  showLink;
}
```

Если надо показать только ссылку без текста:
```js 
!{trello|
  type: action;
  data: card;
  linkOnly;
}
```
### data: listBefore

Название списка до изменений:
```js 
!{trello|
  type: action; 
  data: listBefore;
}
```
### data: listAfter

Название списка после изменений:
```js 
!{trello|
  type: action; 
  data: listAfter;
}
```
### data: list

Название списка:
```js 
!{trello|
  type: action; 
  data: list;
}
```
### data: board

Название доски:
```js 
!{trello|
  type: action; 
  data: board;
}
```

Ссылка на доску:
```js 
!{trello|
  type: action; 
  data: board;
  showLink;
}
```

По умолчанию макрос покажет название доски внутри которой зашита ссылка на доску. Если надо написать любой текст вместо названия доски, воспользуйтесь параметром title:
```js 
!{trello|
  type: action; 
  data: board;
  title: Показать доску;
  showLink;
}
```

Если надо показать только ссылку без текста:
```js 
!{trello|
  type: action; 
  data: board;
  linkOnly;
}
```
### data: memberCreator

Показать имя автора текущего действия:
```js 
!{trello|
  type: action; 
  data: memberCreator;
}
```

Показать ссылку  на автора:
```js 
!{trello|
  type: action; 
  data: memberCreator;
  showLink;
}
```

По умолчанию макрос покажет название доски внутри которой зашита ссылка на доску. Если надо написать любой текст вместо названия доски, воспользуйтесь параметром title:
```js 
!{trello|
  type: action; 
  data: memberCreator;
  title: Показать пользователя;
  showLink;
}
```

Если надо показать только ссылку без текста:
```js 
!{trello|
  type: action; 
  data: memberCreator;
  linkOnly;
}
```


### type: card

Макрос служит для работы с параметрами карточки. Макрос работает по разному в зависимости от параметра data.
### data: labels

Показать все метки карточки:
```js 
!{trello|
  type: card;
  data: labels;
  template: $name $color;
  splitter: \n
}
```

Список доступных полей для объекта Member можно посмотреть в [документации Trello](/docs-test/admin/trello-about).


⬅️
