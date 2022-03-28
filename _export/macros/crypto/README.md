## QNext. Макрос crypto

Макрос для кодирования и декодирования текста на платформе qnext. Общий формат макроса выглядит так:
```js 
!{crypto|
  type: md5;
  text: Текст для кодирования;
}
```

Параметр `type` может принимать одно из значений:
* md5
* sha1
* sha256
* base64encode
* base64decode
* uuid
* hmac
* [randomText](#randomtext)

В параметре `text` вы можете указать переменную в формате `${...}`, например id юзера:
```js 
!{crypto|
  type: md5;
  text: ${user.id};
}
```

Если вам необходимо применить шифрование к сумме нескольких параметров, например id юзера и id бота, вы можете вычислить сумму скриптом:
```js 
var userId = qnext.getValue("user.id", 0);
var botId = qnext.getValue("user.id", 0);
exports.valueForMd5 = userId+"_"+botId;
```

, а потом передать в макрос получившееся значение:
```js 
!{crypto|
  type: md5;
  text: ${localVar.valueForMd5};
}
```

Подробнее про скрипты читайте в [документации](/docs-test/_export/script).
### hmac

Для макроса hmac требуется дополнительный параметр `key`:
```js 
!{crypto|
  type: hmac;
  text: Текст для кодирования;
  key: ключ шифрования
}
```
### randomText

Для макроса `randomText` можно указать дополнительные параметры:
* size - Длина генерируемой строки в байтах
* encoding - Кодировка строки.

Для параметра `encoding` возможны следующие варианты значений:
* utf8
* hex
* base64





[⬅️QNext. Макросы](/docs-test/_export/macros)
  
