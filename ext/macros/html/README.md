# !{html|...}

Макрос `!{html}` позволяет делать различные преобразования разметки.

## italic
```plain 
!{html|
  text: Наклонный текст;
  type: italic;
}
```
## bold
```plain 
!{html|
  text: Жирный текст;
  type: bold;
}
```
## underline
```plain 
!{html|
  text: Подчеркнутый текст;
  type: underline;
}
```
## strike
```plain 
!{html|
  text: Зачеркнутый текст;
  type: strike;
}
```
## code
```plain 
!{html|
  text: Моноширинная строка;
  type: code;
}
```
## pre
```plain 
!{html|
  text: Моноширинный блок;
  type: pre;
}
```
## encode
```plain 
!{html|
  text: Преобразование тегов <>;
  type: encode;
}
```
## decode
```plain 
!{html|
  text: Обратное преобразование тегов &lt; &gt;;
  type: decode;
}
```
## link
```plain 
!{html|
  text: Ссылка;
  url: https://core.telegram.org/bots/api;
  type: link;
}
```
## hiddenLink

Скрытая ссылка:
```plain 
!{html|
  url: https://core.telegram.org/bots/api;
  type: hiddenLink;
}
```
## hiddenSymbol

Скрытый символ:
```plain 
!{html| type: hiddenSymbol}
```
## br

Переход на новую строку:
```plain 
!{html| type: br}
```
## space

Пробел
```plain 
!{html| type: space}
```










  

