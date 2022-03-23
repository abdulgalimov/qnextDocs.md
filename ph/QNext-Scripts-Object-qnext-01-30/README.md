
[⬅️QNext. Скрипты](/docs-test/ph/QNextBot-Scripts-10-29)



У объекта qnext доступны следующие функции и объекты:
* [qnext.getValue](#qnext.getvalue) - получить значение переменной тригера
* [qnext.date](#qnext.date) - работа с датой
* [qnext.time](#qnext.time) - работа с временем
* [qnext.html](#qnext.html) - объект имеющий различные методы для работы с html разметкой.
* [qnext.constants](#qnext.constants) - различные константы
* [qnext.telegram](#qnext.telegram) - работа с telegram api
* [qnext.fetch](#qnext.fetch) - http-запросы из скриптов
### qnext.getValue

Функция вернет значение переменной тригера. Функция может принимать два параметр: путь до значения и значение по умолчанию:

`var message = qnext.getValue("update.message.text", "Нет текста")`
### qnext.date

Здесь собраны функции для работы с датой.
#### qnext.date.format

Функция форматирующая вывод даты, например чтобы показать дату регистрации пользователя в вашем боте:
::: tip
var registerDate = qnext.getValue("client.createdAt");<br>out.result = qnext.date.format(registerDate, "dd.mm.yyyy hh:MM")<br>
:::

Вывод будет таким: `23.09.2020 06:24`. Подробнее про функцию date.format можно почитать в [документации](https://www.npmjs.com/package/dateformat).
#### qnext.date.toLocal

Локальное время бота, т.е. время в часовом поясе бота. Если вызвать без аргументов, тогда функция вернет текущее время. Если передать в качестве аргумента дату, тогда эта дата будет конвертирована в часовой пояс бота.
::: tip
var currentDate = qnext.date.toLocal();<br>out.result = qnext.date.format(currentDate, "dd.mm.yyyy hh:MM")<br>
:::
#### qnext.date.toUtc

Дата по Гринвичу `GMT 0`. Если вызвать без аргументов, тогда функция вернет текущее время. Если передать в качестве аргумента дату, тогда эта дата будет конвертирована в часовой пояс `GMT 0`.
::: tip
var utcDate = qnext.date.toUtc();<br>out.result = qnext.date.format(utcDate, "dd.mm.yyyy hh:MM")<br>
:::
### qnext.time

В объекте `qnext.time` собраны функции для работы с временем.
#### qnext.time.toHMS

Принимает время в миллисекундах, и выводит в формате `чч:мм:сс`.
::: tip
var msec = 320000 // миллисекунды<br>var text = qnext.time.toHMS(msec); // 00:05:20<br>
:::
#### qnext.time.toHM

Выводит время в формате `чч:мм`.
#### qnext.time.toMS

Выводит время в формате `мм:сс`.
#### qnext.time.span

qnext.time.span - это объект со своим набором функций и свойство. У него много различных свойств и функций, все они описаны на странице [QNext. Scripts. Span](/docs-test/ph/QNext-Scripts-Span-01-30)
### qnext.html

Это объект, который содержит в себе различные вспомогательные функция для обработки html-разметки.
* `qnext.html.link` - получить ссылку с текстом

Следующие скрипт покажет имя пользователя с t.me... ссылкой на него:
::: tip
var user = qnext.getValue("user");<br>out.result = qnext.html.link(user.name, "http://t.me/"+user.username)<br>
:::
* `qnext.html.hiddenLink` - скрытая ссылка на фото/видео. Используется если необходимо показать превью на фото/видео, без отображения самой ссылки.
::: tip
var user = qnext.getValue("user");<br>out.result = qnext.html.hiddenLink("http://t.me/"+user.username)<br>
:::
* `qnext.html.italic` - наклонный текст
* `qnext.html.bold` - жирный текст
* `qnext.html.code` - моноширинный текст
* `qnext.html.pre` - моноширинный многострочный текст
* `qnext.html.underline` - подчеркнутый текст
* `qnext.html.strike` - зачеркнутый текст

Все эти функции работают одинаково, надо одним параметром передать текст, к которому будет применено указанное форматирование. 
* `qnext.html.encode` - кодирует теги < > в символы &lt; и &gt; чтобы игнорировать разметку.
* `qnext.html.decode` - делает обратное действие, символы &lt; и &gt; преобразует в < >
* `qnext.html.entities.apply` - применяет telegram разметку к тексту и создает текст с html разметкой.

Метод `entities.apply` возвращает на выходе такой же форматированный текст, каким он был отправлен в телеграмм. 
::: tip
var text = qnext.getValue("update.message.text")<br>var entities = qnext.getValue("update.message.entities")<br>out.htmlCode = qnext.html.entities.apply(text, entities, "html");<br>out.mdCode = qnext.html.entities.apply(text, entities, "markdown");<br>
:::


### qnext.constants

`qnext.constants.NewLine` - переход на новую строку


#### qnext.telegram

В скриптах можно вызвать telegram api метод, с помощью функции:
::: tip
qnext.telegram.api(methodName, body, token)<br>
:::
* **methodName** - название метода из telegram bot api
* **body** - объект содержащий параметры для передачи в telegram bot api
* **token** - токен бота, с помощью которого необходимо отправить запрос в telegram bot api. Параметр не обязательный, если его не передать, будет использован токен текущего бота.

Например чтобы отправить текстовое сообщение от имени текущего бота, воспользуйтесь методом:
::: tip
var body = {<br>  chat_id: 1234567,<br>  text: "Hello, World!"<br>}<br>qnext.telegram.api("sendMessage", body)<br>
:::
::: tip
⚠️ Методы telegram.api доступны только в скриптах с включенным асинхронным режимом.
:::

Полный список методов api и их параметров читайте в документации [telegram bot api](https://core.telegram.org/bots/api).


#### qnext.fetch

qnext.fetch - это функция, которая делает http запрос, под капотом используется nodejs модуль [node-fetch](https://www.npmjs.com/package/node-fetch). Функция принимает 3 параметра:
* url - ссылка которую необходимо дернуть
* sendOptions - опции, передаваемые в функцию fetch, список принимаемых параметров можете посмотреть в документации модуля [node-fetch](https://www.npmjs.com/package/node-fetch).
* resultOptions - опции влияющие на результат загрузки.

Объект resultOptions может иметь следующие поля:
* type - тип результата: text, json, blob ...





[⬅️QNext. Скрипты](/docs-test/ph/QNextBot-Scripts-10-29)