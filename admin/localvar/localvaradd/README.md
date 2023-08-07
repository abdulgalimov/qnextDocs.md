# localVarAdd

**localVarAdd** — позволяет суммировать (для значения типа: число) или добавлять в конец (для значений типа: Строка, Список или Любой объект) значение указанное в реакции.

#### Пример:

Сумма чисел:

::: details Подробнее
```plain
localVarAdd тип Число; — sumNum = 1
localVarAdd тип Число; — sumNum = 2
```
После выполнения этих реакций в переменной ``` ${localVar.sumNum} ``` получим числовое значение 3.
:::


Список пользователей:

::: details
```plain
takeUserList
— localVarAdd тип Список; — users = !{user| type: link; path: targetUser}
```
После выполнения этих реакций в переменной ```${localVar.users}``` получим список пользователей в виде ссылок на пользователей.
:::

Формирование списка:

::: details Подробнее
```plain
localVarAdd тип Список; — sumNum = 1
localVarAdd тип Список; — sumNum = 2
localVarAdd тип Список; — sumNum = 3
```
:::
