# !{html|...}

Макрос `!{html}` позволяет делать различные преобразования разметки.

[[toc]]

## type: italic
```plain 
!{html|
  text: Наклонный текст;
  type: italic;
}
```
## type: bold
```plain 
!{html|
  text: Жирный текст;
  type: bold;
}
```
## type: underLine
```plain 
!{html|
  text: Подчеркнутый текст;
  type: underline;
}
```
## type: strike
```plain 
!{html|
  text: Зачеркнутый текст;
  type: strike;
}
```
## type: code
```plain 
!{html|
  text: Моноширинная строка;
  type: code;
}
```
## type: pre
```plain 
!{html|
  text: Моноширинный блок;
  type: pre;
}
```
## type: encode
```plain 
!{html|
  text: Преобразование тегов <>;
  type: encode;
}
```
## type: decode
```plain 
!{html|
  text: Обратное преобразование тегов &lt; &gt;;
  type: decode;
}
```
## type: link
```plain 
!{html|
  text: Ссылка;
  url: https://core.telegram.org/bots/api;
  type: link;
}
```
## type: hiddenLink

Скрытая ссылка:
```plain 
!{html|
  url: https://core.telegram.org/bots/api;
  type: hiddenLink;
}
```
## type: hiddenSymbol

Скрытый символ:
```plain 
!{html| type: hiddenSymbol}
```
## type: br

Переход на новую строку:
```plain 
!{html| type: br}
```
## type: space

Пробел
```plain 
!{html| type: space}
```










  

