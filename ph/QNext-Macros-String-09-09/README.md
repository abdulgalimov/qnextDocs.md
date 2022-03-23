
[⬅️QNext. Макросы](/ph/QNext-Macroses-12-22)



Макрос позволяет делать различные манипуляции со строками. Макрос по сути копирует поведение многих методов класса String языка JavaScript, ознакомиться можно так же в [документации](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String).


* [length](#length)
* [charAt](#charat)
* [charCodeAt](#charcodeat)
* [endsWith](#endswith)
* [startsWith](#startswith)
* [fromCharCode](#fromcharcode)
* [indexOf](#indexof)
* [lastIndexOf](#lastindexof)
* [replace](#replace)
* [replaceAll](#replaceall)
* [search](#search)
* [slice](#slice)
* [toLowerCase](#tolowercase)
* [toUpperCase](#touppercase)
* [trim](#trim)
* [trimStart](#trimstart)
* [trimEnd](#trimend)
* Регулярное выражение


#### length

Возвращает длину строки:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: length;<br>}<br>
:::
#### charAt

Возвращает указанный символ из строки:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: charAt;<br>  index: номер символа или путь до значения<br>}<br>
:::
#### charCodeAt

Возвращает числовое значение Юникода для символа по указанному индексу:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: charCodeAt;<br>  index: номер символа или путь до значения<br>}<br>
:::
#### endsWith

Позволяет определить, заканчивается ли строка символами указанными в `searchString`, возвращая, соответственно, `true` или `false`:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: endsWith;<br>  searchString: Строка или путь до строки<br>  index: номер символа или путь до значения<br>}<br>
:::
#### startsWith

Позволяет определить, начинается ли строка символами указанными в `searchString`, возвращая, соответственно, `true` или `false`:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: startsWith;<br>  searchString: Строка или путь до строки<br>  index: номер символа или путь до значения<br>}<br>
:::
#### fromCharCode

Возвращает строку, собранную из кодов указанных в массиве `nums`:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: fromCharCode;<br>  nums: Путь до массива с кодами;<br>}<br>
:::
#### indexOf

Возвращает позицию строки `searchString` в проверяемой строке:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: indexOf;<br>  searchString: Строка или путь до строки;<br>  fromIndex: Откуда начинать поиск, необязательный параметр;<br>}<br>
:::
#### lastIndexOf

Возвращает позицию с конца строки `searchString` в проверяемой строке:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: lastIndexOf;<br>  searchString: Строка или путь до строки;<br>  fromIndex: Откуда начинать поиск, необязательный параметр;<br>}<br>
:::
#### replace

Ищет первое совпадение по `pattern` и делает замену на `newString`:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: replace;<br>  pattern: Строка или регулярное выражение;<br>  newString: Строка или путь до строки;<br>}<br>
:::
#### replaceAll

Ищет ВСЕ совпадение по `pattern` и делает замену на `newString`:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: replaceAll;<br>  pattern: Строка или регулярное выражение;<br>  newString: Строка или путь до строки;<br>}<br>
:::
#### search

Ищет первое совпадение по `pattern` и возвращает позицию:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: search;<br>  pattern: Строка или регулярное выражение;<br>}<br>
:::
#### slice

Возвращает подстроку от `beginIndex` до `endIndex`:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: slice;<br>  beginIndex: Индекс начала или путь до индекса;<br>  endIndex: Индекс конца или путь до индекса;<br>}<br>
:::
#### toLowerCase

Заменяет все заглавные символы строчными:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: toLowerCase;<br>}<br>
:::
#### toUpperCase

Заменяет все строчные символы заглавными:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: toUpperCase;<br>}<br>
:::
#### trim

Удаляет все пробелы в начале и в конце строки:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: trim;<br>}<br>
:::
#### trimStart

Удаляет все пробелы в начале строки:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: trimStart;<br>}<br>
:::
#### trimEnd

Удаляет все пробелы в конце строки:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: trimEnd;<br>}<br>
:::


#### Регулярное выражение

В макросах с типом `replace`, `replaceAll` и `search` используется параметр `pattern`. Этот параметр может содержать как строку, так и регулярное выражение. Чтобы указать регулярное выражение, необходимо обернуть значение в символы `/.../`, например так следующий макрос заменить все русские буквы на символ **X**:
::: tip
!{string|<br>  path: ПутьДоСтроки;<br>  type: replace;<br>  pattern: /[а-я]/i;<br>  newString: X;<br>}<br>
:::





[⬅️QNext. Макросы](/ph/QNext-Macroses-12-22)