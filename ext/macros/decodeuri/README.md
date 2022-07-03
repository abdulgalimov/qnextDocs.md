# !{decodeURI|...}

Макрос `!{decodeURI}` имеет те же параметры что и `encodeURI`, и выполняет ровно противоположное действие: 
```plain 
!{decodeURI|
  text: http%3A%2F%2Fdomain.com%2F%3Ftext%3Dmy%20text;
  component;
}
```

## defaultValue

Если параметр text пустой, вы можете показать значение по умолчанию, передав его в параметре defaultValue:
```plain 
!{decodeURI|
  text: ${localVar.text};
  defaultValue: Пусто
}
```
