
[⬅️QNext. Макросы](/docs-test/ext/macros)



Макрос `!{html}` позволяет делать различные преобразования разметки.
* [italic](#italic)
* [bold](#bold)
* [underline](#underline)
* [strike](#strike)
* [code](#code)
* [pre](#pre)
* [encode](#encode)
* [decode](#decode)
* [link](#link)
* [hiddenLink](#hiddenlink)
* [hiddenSymbol](#hiddensymbol)
* [br](#br)
* [space](#space)
## italic
```js 
!{html|
  text: Наклонный текст;
  type: italic;
}
```
## bold
```js 
!{html|
  text: Жирный текст;
  type: bold;
}
```
## underline
```js 
!{html|
  text: Подчеркнутый текст;
  type: underline;
}
```
## strike
```js 
!{html|
  text: Зачеркнутый текст;
  type: strike;
}
```
## code
```js 
!{html|
  text: Моноширинная строка;
  type: code;
}
```
## pre
```js 
!{html|
  text: Моноширинный блок;
  type: pre;
}
```
## encode
```js 
!{html|
  text: Преобразование тегов <>;
  type: encode;
}
```
## decode
```js 
!{html|
  text: Обратное преобразование тегов &lt; &gt;;
  type: decode;
}
```
## link
```js 
!{html|
  text: Ссылка;
  url: https://core.telegram.org/bots/api;
  type: link;
}
```
## hiddenLink

Скрытая ссылка:
```js 
!{html|
  url: https://core.telegram.org/bots/api;
  type: hiddenLink;
}
```
## hiddenSymbol

Скрытый символ:
```js 
!{html| type: hiddenSymbol}
```
## br

Переход на новую строку:
```js 
!{html| type: br}
```
## space

Пробел
```js 
!{html| type: space}
```



[⬅️QNext. Макросы](/docs-test/ext/macros)













  

