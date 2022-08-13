# !{trello|...}

Макрос `!{trello}` доступен в триггере модели Trello, т.е. когда trello сообщает боту о том что на доске произошли какие то изменения. Макрос поможет показать информацию из полученных данных.

[[toc]]

## type: action

Макросы типа action работают в момент когда от Trello прилетает событие с каким либо действием, например
 * Создание списка
* Перемещение карточки между списками
* Написание комментария
* и другие...

Макрос умеет показывать различную информацию в зависимости от параметра data:
```plain 
!{trello| 
  type: action;
  data: ...
}
```
## data: card

Показать информацию о карточке:
```plain 
!{trello|
  type: action;
  data: card;
}
```

Показать ссылку на карточку:
```plain 
!{trello|
  type: action;
  data: card;
  showLink;
}
```

По умолчанию макрос покажет название карточки внутри которой зашита ссылка на карточку. Если надо написать любой текст вместо названия карточки, воспользуйтесь параметром title:
```plain 
!{trello|
  type: action;
  data: card;
  title: Показать карточку;
  showLink;
}
```

Если надо показать только ссылку без текста:
```plain 
!{trello|
  type: action;
  data: card;
  linkOnly;
}
```
## data: listBefore

Название списка до изменений:
```plain 
!{trello|
  type: action; 
  data: listBefore;
}
```
## data: listAfter

Название списка после изменений:
```plain 
!{trello|
  type: action; 
  data: listAfter;
}
```
## data: list

Название списка:
```plain 
!{trello|
  type: action; 
  data: list;
}
```
## data: board

Название доски:
```plain 
!{trello|
  type: action; 
  data: board;
}
```

Ссылка на доску:
```plain 
!{trello|
  type: action; 
  data: board;
  showLink;
}
```

По умолчанию макрос покажет название доски внутри которой зашита ссылка на доску. Если надо написать любой текст вместо названия доски, воспользуйтесь параметром title:
```plain 
!{trello|
  type: action; 
  data: board;
  title: Показать доску;
  showLink;
}
```

Если надо показать только ссылку без текста:
```plain 
!{trello|
  type: action; 
  data: board;
  linkOnly;
}
```
## data: memberCreator

Показать имя автора текущего действия:
```plain 
!{trello|
  type: action; 
  data: memberCreator;
}
```

Показать ссылку  на автора:
```plain 
!{trello|
  type: action; 
  data: memberCreator;
  showLink;
}
```

По умолчанию макрос покажет название доски внутри которой зашита ссылка на доску. Если надо написать любой текст вместо названия доски, воспользуйтесь параметром title:
```plain 
!{trello|
  type: action; 
  data: memberCreator;
  title: Показать пользователя;
  showLink;
}
```

Если надо показать только ссылку без текста:
```plain 
!{trello|
  type: action; 
  data: memberCreator;
  linkOnly;
}
```


## type: card

Макрос служит для работы с параметрами карточки. Макрос работает по разному в зависимости от параметра data.
## data: labels

Показать все метки карточки:
```plain 
!{trello|
  type: card;
  data: labels;
  template: $name $color;
  splitter: \n
}
```

Список доступных полей для объекта Member можно посмотреть в [документации Trello](/docs/admin/trello).


⬅️
