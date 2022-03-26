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
::: tip
!{trello| <br>  type: action;<br>  data: ...<br>}<br>
:::
### data: card

Показать информацию о карточке:
::: tip
!{trello|<br>  type: action;<br>  data: card;<br>}<br>
:::

Показать ссылку на карточку:
::: tip
!{trello|<br>  type: action;<br>  data: card;<br>  showLink;<br>}<br>
:::

По умолчанию макрос покажет название карточки внутри которой зашита ссылка на карточку. Если надо написать любой текст вместо названия карточки, воспользуйтесь параметром title:
::: tip
!{trello|<br>  type: action;<br>  data: card;<br>  title: Показать карточку;<br>  showLink;<br>}<br>
:::

Если надо показать только ссылку без текста:
::: tip
!{trello|<br>  type: action;<br>  data: card;<br>  linkOnly;<br>}<br>
:::
### data: listBefore

Название списка до изменений:
::: tip
!{trello|<br>  type: action; <br>  data: listBefore;<br>}<br>
:::
### data: listAfter

Название списка после изменений:
::: tip
!{trello|<br>  type: action; <br>  data: listAfter;<br>}<br>
:::
### data: list

Название списка:
::: tip
!{trello|<br>  type: action; <br>  data: list;<br>}<br>
:::
### data: board

Название доски:
::: tip
!{trello|<br>  type: action; <br>  data: board;<br>}<br>
:::

Ссылка на доску:
::: tip
!{trello|<br>  type: action; <br>  data: board;<br>  showLink;<br>}<br>
:::

По умолчанию макрос покажет название доски внутри которой зашита ссылка на доску. Если надо написать любой текст вместо названия доски, воспользуйтесь параметром title:
::: tip
!{trello|<br>  type: action; <br>  data: board;<br>  title: Показать доску;<br>  showLink;<br>}<br>
:::

Если надо показать только ссылку без текста:
::: tip
!{trello|<br>  type: action; <br>  data: board;<br>  linkOnly;<br>}<br>
:::
### data: memberCreator

Показать имя автора текущего действия:
::: tip
!{trello|<br>  type: action; <br>  data: memberCreator;<br>}<br>
:::

Показать ссылку  на автора:
::: tip
!{trello|<br>  type: action; <br>  data: memberCreator;<br>  showLink;<br>}<br>
:::

По умолчанию макрос покажет название доски внутри которой зашита ссылка на доску. Если надо написать любой текст вместо названия доски, воспользуйтесь параметром title:
::: tip
!{trello|<br>  type: action; <br>  data: memberCreator;<br>  title: Показать пользователя;<br>  showLink;<br>}<br>
:::

Если надо показать только ссылку без текста:
::: tip
!{trello|<br>  type: action; <br>  data: memberCreator;<br>  linkOnly;<br>}<br>
:::


### type: card

Макрос служит для работы с параметрами карточки. Макрос работает по разному в зависимости от параметра data.
### data: labels

Показать все метки карточки:
::: tip
!{trello|<br>  type: card;<br>  data: labels;<br>  template: $name $color;<br>  splitter: \n<br>}<br>
:::

Список доступных полей для объекта Member можно посмотреть в [документации Trello](/docs-test/ph/admin/trello-about).


⬅️[QNext. Макросы](/docs-test/ph/macros)

  
[Original](https://telegra.ph/QNext-Makros-trello-02-20)