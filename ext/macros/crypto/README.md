# !{crypto|...}

Макрос `!{crypto}` для кодирования и декодирования текста на платформе qnext. Общий формат макроса выглядит так:

```plain 
!{crypto|
  type: md5;
  text: Текст для кодирования;
}
```

Параметр `type` может принимать одно из значений:

[[toc]]

* md5
* sha1
* sha256
* base64encode
* base64decode
* uuid



В параметре `text` вы можете указать переменную в формате `${...}`, например id юзера:
```plain 
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
```plain 
!{crypto|
  type: md5;
  text: ${localVar.valueForMd5};
}
```

Подробнее про скрипты читайте в [документации](/docs/ext/script).

## hmac

Для значения `hmac` требуется дополнительный параметр `key`:
```plain 
!{crypto|
  type: hmac;
  text: Текст для кодирования;
  key: ключ шифрования
}
```
## randomText

Для значения `randomText` можно указать дополнительные параметры:
* size - Длина генерируемой строки в байтах
* encoding - Кодировка строки.

Для параметра `encoding` возможны следующие варианты значений:
* utf8
* hex
* base64
