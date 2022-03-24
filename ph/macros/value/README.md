---
sidebar: auto
---

## QNext. Макрос value

Макрос  берет значение из указанного пути и возвращает это значение:
::: tip
!{value| path: localVar.code}<br>
:::

Данный макрос можно смело заменить переменной `${localVar}`, но макрос может быть полезен в том случае, когда вам в параметре path необходимо использовать другую переменную:
::: tip
!{value| path: localVar.${localVar.myCode} }<br>
:::

В данном случае если локальная переменная **myCode** имеет значение **test**, тогда текущий макрос вернет значение локальной переменной `${localVar.test}`.
### castTo

Макрос умеет преобразовывать типы, например если в значении лежит строка похожая на число, можно преобразовать эту строку в число:
::: tip
!{value|<br>  path: localVar.code;<br>  castTo: number;<br>}<br>
:::

Параметр castTo может принимать следующие значения:
* **string**
* **number**
* **bool**
### number

Если указать `castTo: number`, можно дополнительно указать параметр `accuracy`, который указывает точность вывода дробного числа:
::: tip
!{value|<br>  path: localVar.code;<br>  castTo: number;<br>  accuracy: 2;<br>}<br>
:::


### format

Вы можете преобразовать вывод значения, например следующий макрос покажет JSON строку объекта user:
::: tip
!{value|<br>  path: user;<br>  format: json;<br>}<br>
:::

Параметр format может принимать значения:
* **json**
* **yaml** 
### json

Если `format: json`, тогда можно дополнительно указать параметр `spaces` - пробелы вставляемые в начало строки для форматирования json строки.
### yaml

Если `format: json`, в макросе можно указать параметры описанные в документации метода [dump](https://www.npmjs.com/package/js-yaml).





[⬅️QNext. Макросы](/docs-test/ph/macros)

[Original](https://telegra.ph/QNext-Macros-value-01-10)