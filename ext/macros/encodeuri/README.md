# !{encodeURI|...}

Макрос `!{encodeURI}` заменяет некоторые символы в строке на соответствующие UTF8 последовательности, для использования этой строки например в ссылках. 

Пример использования:
```js 
!{encodeURI|
  text: http://domain.com/?text=my text;
}
```

На выходе получим текст `http://domain.com/?text=my%20text`, как видите в ссылке пробел заменился последовательностью `%20`. Макрос делает тоже самое, что и [JavaScript функция encodeURI](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURI).

Если вам необходимо закодировать всю строку целиком, включая символы url протокола(:, / и другие), вам необходимо использовать макрос `encodeURI` с параметром `component`:
```js 
!{encodeURI|
  text: http://domain.com/?text=my text;
  component;
}
```

В этом случае на выходе получим текст: `http%3A%2F%2Fdomain.com%2F%3Ftext%3Dmy%20text`. Макрос делает тоже самое, что и [JavaScript функция encodeURIComponent](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).
