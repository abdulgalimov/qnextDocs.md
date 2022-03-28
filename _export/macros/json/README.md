
[⬅️QNext. Макросы](/docs-test/_export/macros)



С помощью макрос можно любой объект доступный с помощью переменных ${...} преобразовать в JSON строку, следующий макрос преобразует объект пользователя в не форматированную json строку:
```js 
!{json| path: user}
```

Если вы хотите сделать форматированный вывод json строки, используйте параметр `space: X`, где X - это количество пробелов для отступа:
```js 
!{json|
  path: user;
  space: 2;
}
```

Если в json строке есть символы <> и telegram при выводе их воспринимает как html теги, вы можете заэнкодить эти символы, используя параметр **encode**:
```js 
!{json|
  path: user;
  space: 2;
  encode;
}
```



[⬅️QNext. Макросы](/docs-test/_export/macros)




  