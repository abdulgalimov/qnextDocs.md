
[⬅️QNext. Макросы](/docs-test/ph/QNext-Macroses-12-22)



Макрос `encodeURI` заменяет некоторые символы в строке на соответствующие UTF8 последовательности, для использования этой строки например в ссылках. 

Пример использования:
::: tip
!{encodeURI|<br>  text: http://domain.com/?text=my text;<br>}<br>
:::

На выходе получим текст `http://domain.com/?text=my%20text`, как видите в ссылке пробел заменился последовательностью `%20`. Макрос делает тоже самое, что и [JavaScript функция encodeURI](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURI).

Если вам необходимо закодировать всю строку целиком, включая символы url протокола(:, / и другие), вам необходимо использовать макрос `encodeURI` с параметром `component`:
::: tip
!{encodeURI|<br>  text: http://domain.com/?text=my text;<br>  component;<br>}<br>
:::

В этом случае на выходе получим текст: `http%3A%2F%2Fdomain.com%2F%3Ftext%3Dmy%20text`. Макрос делает тоже самое, что и [JavaScript функция encodeURIComponent](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).



Макрос `decodeURI` имеет те же параметры что и `encodeURI`, и выполняет ровно противоположное действие: 
::: tip
!{decodeURI|<br>  text: http%3A%2F%2Fdomain.com%2F%3Ftext%3Dmy%20text;<br>  component;<br>}<br>
:::


#### defaultValue

Если параметр text пустой, вы можете показать значение по умолчанию, передав его в параметре defaultValue:
::: tip
!{decodeURI|<br>  text: ${localVar.text};<br>  defaultValue: Пусто<br>}<br>
:::



[⬅️QNext. Макросы](/docs-test/ph/QNext-Macroses-12-22)