## QNext. реакция localVarAdd

**localVarAdd** — позволяет суммировать (для значения типа: число) или добавлять в конец (для значений типа: Строка, Список или Любой объект) значение указанное в реакции.



Например:

Сумма чисел

localVarAdd тип Число; — sumNum = 1

localVarAdd тип Число; — sumNum = 2

После выполнения этих реакций в переменной ${localVar.sumNum} получим числовое значение 3.



Список пользователей

takeUserList

— localVarAdd тип Список; — users = !{user| type: link; path: targetUser}

После выполнения этих реакций в переменной ${localVar.users} получим список пользователей в виде ссылок на пользователей.



[QNext. Локальные переменные](/docs-test/reactions/localvar)

[QNext. Перечень реакции](/docs-test/reactions)
  
[Original](https://telegra.ph/QNext-admin-reaction-localVarAdd-04-30)