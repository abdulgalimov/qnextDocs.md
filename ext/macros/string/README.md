# !{string|...}

Макрос `!{string}` позволяет делать различные манипуляции со строками. Макрос по сути копирует поведение многих методов класса String языка JavaScript, ознакомиться можно так же в [документации](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String).


## length

Возвращает длину строки:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: length;
}
```
## charAt

Возвращает указанный символ из строки:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: charAt;
  index: номер символа или путь до значения
}
```
## charCodeAt

Возвращает числовое значение Юникода для символа по указанному индексу:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: charCodeAt;
  index: номер символа или путь до значения
}
```
## endsWith

Позволяет определить, заканчивается ли строка символами указанными в `searchString`, возвращая, соответственно, `true` или `false`:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: endsWith;
  searchString: Строка или путь до строки
  index: номер символа или путь до значения
}
```
## startsWith

Позволяет определить, начинается ли строка символами указанными в `searchString`, возвращая, соответственно, `true` или `false`:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: startsWith;
  searchString: Строка или путь до строки
  index: номер символа или путь до значения
}
```
## fromCharCode

Возвращает строку, собранную из кодов указанных в массиве `nums`:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: fromCharCode;
  nums: Путь до массива с кодами;
}
```
## indexOf

Возвращает позицию строки `searchString` в проверяемой строке:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: indexOf;
  searchString: Строка или путь до строки;
  fromIndex: Откуда начинать поиск, необязательный параметр;
}
```
## lastIndexOf

Возвращает позицию с конца строки `searchString` в проверяемой строке:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: lastIndexOf;
  searchString: Строка или путь до строки;
  fromIndex: Откуда начинать поиск, необязательный параметр;
}
```
## replace

Ищет первое совпадение по `pattern` и делает замену на `newString`:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: replace;
  pattern: Строка или регулярное выражение;
  newString: Строка или путь до строки;
}
```
## replaceAll

Ищет ВСЕ совпадение по `pattern` и делает замену на `newString`:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: replaceAll;
  pattern: Строка или регулярное выражение;
  newString: Строка или путь до строки;
}
```
## search

Ищет первое совпадение по `pattern` и возвращает позицию:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: search;
  pattern: Строка или регулярное выражение;
}
```
## slice

Возвращает подстроку от `beginIndex` до `endIndex`:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: slice;
  beginIndex: Индекс начала или путь до индекса;
  endIndex: Индекс конца или путь до индекса;
}
```
## toLowerCase

Заменяет все заглавные символы строчными:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: toLowerCase;
}
```
## toUpperCase

Заменяет все строчные символы заглавными:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: toUpperCase;
}
```
## trim

Удаляет все пробелы в начале и в конце строки:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: trim;
}
```
## trimStart

Удаляет все пробелы в начале строки:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: trimStart;
}
```
## trimEnd

Удаляет все пробелы в конце строки:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: trimEnd;
}
```


## Регулярное выражение

В макросах с типом `replace`, `replaceAll` и `search` используется параметр `pattern`. Этот параметр может содержать как строку, так и регулярное выражение. Чтобы указать регулярное выражение, необходимо обернуть значение в символы `/.../`, например так следующий макрос заменить все русские буквы на символ **X**:
```plain 
!{string|
  path: ПутьДоСтроки;
  type: replace;
  pattern: /[а-я]/i;
  newString: X;
}
```
