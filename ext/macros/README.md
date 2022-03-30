
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

* [!{array}](/docs-test/ext/macros/array)

## date

* [!{date}](/docs-test/ext/macros/date)

## crypto

* [!{crypto}](/docs-test/ext/macros/crypto)

## decodeURI

* [!{decodeURI}](/docs-test/ext/macros/encodeuri)

## encodeURI

* [!{encodeURI}](/docs-test/ext/macros/encodeuri)

## file

* [!{file}](/docs-test/ext/macros/file)

## globalVar

* [!{globalVar}](/docs-test/ext/macros/globalvar)

## html

* [!{html}](/docs-test/ext/macros/html)

## if

* [!{if}](/docs-test/ext/macros/if)

## json

* [!{json}](/docs-test/ext/macros/json)

## makeLink

* !{makeLink}

## menu

* [!{menu}](/docs-test/ext/macros/menu)

## pay

* [!{pay}](/docs-test/ext/macros/pay)

## profile

* [!{profile}](/docs-test/ext/macros/profile)

## random

* [!{random}](/docs-test/ext/macros/random)

## script

* [!{script}](/docs-test/ext/script)

## string

* [!{string}](/docs-test/ext/macros/string)

## switch

* [!{switch}](/docs-test/ext/macros/switch)

## trello

* [!{trello}](/docs-test/ext/macros/trello)

## user

* [!{user}](/docs-test/ext/macros/user)

## usersCount

* [!{usersCount}](/docs-test/ext/macros/usercount)

## url

* [!{url}](/docs-test/ext/macros/url)

## vote

* [!{vote}](/docs-test/ext/macros/vote)

## value

* [!{value}](/docs-test/ext/macros/value)

## template

* [!{template}](ext/macros/template)


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



Шаблоны макросов подробно описаны на [странице](/docs-test/ext/macros/template).
