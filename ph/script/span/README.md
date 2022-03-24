---
sidebar: auto
---

## QNext. Работа с объектом span

[⬅️QNext. Скрипты. Объект qnext](/docs-test/ph/script/object-qnext).

span - это объект позволяющий манипулировать временем. Создать такой объект можно следующими способами:
::: tip
const span1 = qnext.time.span.new(60 * 60 * 24 * 1000)<br>const span2 = qnext.time.span.sec(60 * 60 * 24)<br>const span3 = qnext.time.span.min(60 * 24)<br>const span4 = qnext.time.span.hour(24)<br>const span5 = qnext.time.span.day(1)<br>
:::

Все 5 объектов содержат время равное количеству миллисекунд в 1 сутках. Первый способ принимает на входе миллисекунды, остальные соответственно секунды, минуты, часы и дни.

Также вы можете создать span-объект используя строку вида `hh:mm:ss`, для этого используйте одну из следующих конструкций:
::: tip
const spanTime1 = qnext.time.span.parseTime("12:25:10")<br>const spanTime2 = qnext.time.span.parseTime("12:25")<br>
:::


### span.add...

После создания объекта span, у него доступны методы для добавление времени к уже имеющемуся:
::: tip
const span = qnext.time.span.new(0);<br>span.addMs(1) // добавить миллисекунды<br>span.addSec(1) // добавить секунды<br>span.addMin(1) // добавить минуты<br>span.addHour(1) // добавить часы<br>span.addDay(1) // добавить дни<br>
:::
### span.set...

Вы так же можете заменить время с помощью следующих функций:
::: tip
const span = qnext.time.span.new(0);<br>span.setMs(1) // указать новое время в миллисекундах<br>span.setSec(1) // указать новое время в секундах<br>span.setMin(1) // указать новое время в минутах<br>span.setHour(1) указать новое время в часах<br>span.setDay(1) указать новое время в днях<br>
:::
### span.decompose

Извлечь время можно в различных форматах.
::: tip
const span = qnext.time.span.new(0);<br>span.addDay(2);<br>span.addHour(2);<br>span.addMin(30);<br>out.time = span.decompose();<br>
:::

Функция decompose вернет объект такого вида:
::: tip
{<br>  days: 1,<br>  hours: 2,<br>  minutes: 30,<br>  seconds: 0,<br>  ms: 0,<br>}<br>
:::
### span.view
::: tip
const span = qnext.time.span.new(0);<br>span.addHour(2);<br>span.addMin(30);<br>out.time = span.view("hh:mm"); // 02:30<br>
:::

Конструкция вернет время в указанном формате, можно использовать любой форма, например если написать так: 
::: tip
out.time = span.view("Время dd:hh:mm:ss:SS");<br>
:::

То будет получен результат:

`Время 00:02:30:00:00`
### span.locale

Данная функция вернет время с локализацией пользователя:
::: tip
const span = qnext.time.span.new(0);<br>span.addHour(2);<br>span.addMin(30);<br>out.time = span.locale(); // 2ч. 30мин.<br>
:::





[⬅️QNext. Скрипты. Объект qnext](/docs-test/ph/script/object-qnext).

[Original](https://telegra.ph/QNext-Scripts-Span-01-30)