
Макрос для кодирования и декодирования текста на платформе qnext. Общий формат макроса выглядит так:
::: tip
!{crypto|<br>  type: md5;<br>  text: Текст для кодирования;<br>}<br>
:::

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
::: tip
!{crypto|<br>  type: md5;<br>  text: ${user.id};<br>}<br>
:::

Если вам необходимо применить шифрование к сумме нескольких параметров, например id юзера и id бота, вы можете вычислить сумму скриптом:
::: tip
var userId = qnext.getValue("user.id", 0);<br>var botId = qnext.getValue("user.id", 0);<br>exports.valueForMd5 = userId+"_"+botId;<br>
:::

, а потом передать в макрос получившееся значение:
::: tip
!{crypto|<br>  type: md5;<br>  text: ${localVar.valueForMd5};<br>}<br>
:::

Подробнее про скрипты читайте в [документации](/ph/QNextBot-Scripts-10-29).
### hmac

Для макроса hmac требуется дополнительный параметр `key`:
::: tip
!{crypto|<br>  type: hmac;<br>  text: Текст для кодирования;<br>  key: ключ шифрования<br>}<br>
:::
### randomText

Для макроса `randomText` можно указать дополнительные параметры:
* size - Длина генерируемой строки в байтах
* encoding - Кодировка строки.

Для параметра `encoding` возможны следующие варианты значений:
* utf8
* hex
* base64





[⬅️QNext. Макросы](/ph/QNext-Macroses-12-22)