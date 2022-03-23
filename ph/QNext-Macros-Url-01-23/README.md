
[⬅️QNext. Макросы](/ph/QNext-Macroses-12-22)



Макрос `!{url}` как видно из названия может работать с разного рода ссылками. По умолчанию макрос показывает ссылку как есть, если указать параметр title, тогда ссылка будет зашита в указанный текст:
::: tip
!{url|<br>  type: logs;<br>  title: Открыть логи;<br>}<br>
:::

Макрос может выдавать разные ссылки в зависимости от параметра **type**, который может принимать следующие значения:
* [type: tgAuth](#type:-tgauth) - авторизационная ссылка
* [type: logs](#type:-logs) - ссылка на логи
* [type: messageLink](#type:-messagelink) - ссылка на публикацию в чате/канале
### type: tgAuth

Макрос выдаст ссылку для авторизации в qnext:
::: tip
!{url| type: tgAuth}<br>
:::

Обратите внимание, что сама по себе эта ссылка не рабочая, чтобы сработала авторизация, необходимо эту ссылку передать в копку типа **login** в 🕹меню. 


### type: logs

Макрос покажет ссылку для просмотра логов:
::: tip
!{url| type: logs}<br>
:::


### type: messageLink

Макрос умеет показывать ссылки по публикацию в чате, в формате `https://t.me/c/1234567890/123`:
::: tip
!{url| type: messageLink}<br>
:::

Макрос может принимать дополнительный параметр where, который указывает где брать chat_id и message_id для формирования ссылки:
#### where: reply

Строится ссылка на пост, на который сделали reply(ответ):
::: tip
!{url|<br>  type: messageLink;<br>  where: reply;<br>}<br>
:::
#### where: forward

Строится ссылка на пост, который был перенаправлен
::: tip
!{url|<br>  type: messageLink;<br>  where: forward;<br>}<br>
:::
#### where: reply.forward

Строится ссылка на оригинальный пост из комментария к посту в канале:
::: tip
!{url|<br>  type: messageLink;<br>  where: reply.forward;<br>}<br>
:::



[⬅️QNext. Макросы](/ph/QNext-Macroses-12-22)