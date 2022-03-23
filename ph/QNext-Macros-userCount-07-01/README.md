
[⬅️QNext. Макросы](/ph/QNext-Macroses-12-22)



Макрос `!{usersCount}` показывает количество пользователей используя различные условия подсчета. Может работать в разных режимах в зависимости от параметра `type`:
* [type: all](#type:-all)
* [type: list](#type:-list)
* [type: chat](#type:-chat)
### type: all

Следующий макрос покажет общее количество пользователей:
::: tip
!{usersCount|<br>  type: all;<br>}<br>
:::

Макрос может принимать дополнительные параметры для уточнения запроса:
* [status](#status)
* [ban](#ban)
#### status

Вы можете указать параметр `status`,  чтобы посчитать пользователей с определенным статусом. Например чтобы посчитать всех кто запустил бота и не заблокировал его:
::: tip
!{usersCount|<br>  type: all;<br>  status: started;<br>}<br>
:::

Параметр `status` может принимать следующие значения:
* **created** - пользователь как-либо взаимодействовал с ботом, но не обязательно запускал в привате. Например мог просто проголосовать в чате/канале.
* **started** - пользователь запустил бота в привате
* **blocked** - пользователь заблокировал бота
* **deleted** - аккаунт пользователя удален Телеграмом.
#### ban

Макрос покажет количество пользователей которые забанены в вашем боте:
::: tip
!{usersCount|<br>  type: all;<br>  ban: yes;<br>}<br>
:::

Макрос покажет количество пользователей которые НЕ забанены в вашем боте:
::: tip
!{usersCount|<br>  type: all;<br>  ban: no;<br>}<br>
:::

Обратите внимание, если параметр `ban` не указывать вообще, или указать значение отличающееся от _yes_ и _no_, тогда бот найден всех пользователей без проверки заблокированности. 

Параметры `status` и `ban` можно использовать как по отдельности, так и вместе, например:
::: tip
!{usersCount|<br>  type: all;<br>  status: started;<br>  ban: yes;<br>}<br>
:::


#### type: list

Этот макрос покажет количество участников в списке пользователей:
::: tip
!{usersCount|<br>  type: list;<br>  usersListId: ЗдесьIDСписка;<br>}<br>
:::

Обратите внимание, необходимо указать параметр `usersListId` - это 🆔 вашего списка пользователей. Этот параметр не обязательный в том случае, если в данный момент бот работает с каким либо списком пользователей, например внутри реакции ⚡️takeUserList.


### type: chat

Этот макрос покажет количество участников в чате:
::: tip
!{usersCount|<br>  type: chat;<br>  chatId: ЗдесьIDЧата;<br>}<br>
:::

Обратите внимание, необходимо указать параметр `chatId` - это 🆔 вашего чата/канала. Этот параметр не обязательный в том случае, если в данный момент бот работает с каким либо чатов, например внутри реакции ⚡️takeChat.



[⬅️QNext. Макросы](/ph/QNext-Macroses-12-22)