
**Макросы** - это мини программы которые можно вставить в текст, в процессе выполнения они будут заменены на полученные значения. Макрос записывается в формате:
```js 
!{НазваниеМакроса|
 Параметр1: Значение1;
 Параметр2: Значение2
}
```

Здесь после символа вертикальной черты | отображаются параметры в формате <u>название: значение</u>, т.е. сперва идет название параметра, затем значение, ключ разделенные символом двоеточие : . У некоторых макросов параметры не обязательны, если их нет, используется значение по умолчанию. Пробелы и переходы на новую строку внутри макроса игнорируются, это значит предыдущая запись макроса аналогична следующей:
```js 
!{НазваниеМакроса| Параметр1: Значение1; Параметр2: Значение2}
```

Вы можете использовать любую запись, какая вам больше нравится.

В процессе выполнения макроса, бот вычисляет значение и подставляет его в в место, где был записан сам текст макроса, например если в тексте написать так:

`Дата: !{date}`

То в процессе выполнения вы увидите такую запись:

`Дата: 22.12.2020 15:58`

## amount
* !{amount}
## array
* [!{array}](/docs-test/macros/array)
## date
* [!{date}](/docs-test/macros/date)
## crypto
* [!{crypto}](/docs-test/macros/crypto)
## decodeURI
* [!{decodeURI}](/docs-test/macros/encodeuri)
## encodeURI
* [!{encodeURI}](/docs-test/macros/encodeuri)
## file
* [!{file}](/docs-test/macros/file)
## globalVar
* [!{globalVar}](/docs-test/macros/globalvar)
## html
* [!{html}](/docs-test/macros/html)
## if
* [!{if}](/docs-test/macros/if)
## json
* [!{json}](/docs-test/macros/json)
## makeLink
* !{makeLink}
## menu
* [!{menu}](/docs-test/macros/menu)
## pay
* [!{pay}](/docs-test/macros/pay)
## profile
* [!{profile}](/docs-test/macros/profile)
## random
* [!{random}](/docs-test/macros/random)
## script
* [!{script}](/docs-test/script)
## string
* [!{string}](/docs-test/macros/string)
## switch
* [!{switch}](/docs-test/macros/switch)
## trello
* [!{trello}](/docs-test/macros/trello)
## user
* [!{user}](/docs-test/macros/user)
## usersCount
* [!{usersCount}](/docs-test/macros/usercount)
## url
* [!{url}](/docs-test/macros/url)
## vote
* [!{vote}](/docs-test/macros/vote)
## value
* [!{value}](/docs-test/macros/value)
## template
* !{template}



Мо умолчанию макросы игнорирует крайние пробелы и переходы на новую строку. Т.е. например если вы хотите отобразить текущую дату так, чтобы после даты отобразился пробел, можно попробовать вставить пробел после параметра `format`:
```js 
!{date|
 when: now;
 format: dd.mm HH:MM   ;
}
```

Но это не будет работать, потому что макрос игнорирует все пробелы и переходы на новую строку справа и слева от значения. Чтобы вставить пробел после формата, воспользуйтесь спецсимволом \s:
```js 
!{date|
 when: now;
 format: dd.mm HH:MM\s;
}
```

Если надо больше пробелов, вставьте столько спецсимволов \s, сколько пробелов вам требуется.
* `\s` - 1 пробел
* `\n` - переход на новую строку
* `\0` - пустая строка



Шаблоны макросов подробно описаны на [странице](/docs-test/macros/template).
