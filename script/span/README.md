
[⬅️QNext. Скрипты. Объект qnext](/docs-test/script/object-qnext).

span - это объект позволяющий манипулировать временем. Создать такой объект можно следующими способами:
```js 
const span1 = qnext.time.span.new(60 * 60 * 24 * 1000)
const span2 = qnext.time.span.sec(60 * 60 * 24)
const span3 = qnext.time.span.min(60 * 24)
const span4 = qnext.time.span.hour(24)
const span5 = qnext.time.span.day(1)
```

Все 5 объектов содержат время равное количеству миллисекунд в 1 сутках. Первый способ принимает на входе миллисекунды, остальные соответственно секунды, минуты, часы и дни.

Также вы можете создать span-объект используя строку вида `hh:mm:ss`, для этого используйте одну из следующих конструкций:
```js 
const spanTime1 = qnext.time.span.parseTime("12:25:10")
const spanTime2 = qnext.time.span.parseTime("12:25")
```


## span.add...

После создания объекта span, у него доступны методы для добавление времени к уже имеющемуся:
```js 
const span = qnext.time.span.new(0);
span.addMs(1) // добавить миллисекунды
span.addSec(1) // добавить секунды
span.addMin(1) // добавить минуты
span.addHour(1) // добавить часы
span.addDay(1) // добавить дни
```
## span.set...

Вы так же можете заменить время с помощью следующих функций:
```js 
const span = qnext.time.span.new(0);
span.setMs(1) // указать новое время в миллисекундах
span.setSec(1) // указать новое время в секундах
span.setMin(1) // указать новое время в минутах
span.setHour(1) указать новое время в часах
span.setDay(1) указать новое время в днях
```
## span.decompose

Извлечь время можно в различных форматах.
```js 
const span = qnext.time.span.new(0);
span.addDay(2);
span.addHour(2);
span.addMin(30);
out.time = span.decompose();
```

Функция decompose вернет объект такого вида:
```js 
{
  days: 1,
  hours: 2,
  minutes: 30,
  seconds: 0,
  ms: 0,
}
```
## span.view
```js 
const span = qnext.time.span.new(0);
span.addHour(2);
span.addMin(30);
out.time = span.view("hh:mm"); // 02:30
```

Конструкция вернет время в указанном формате, можно использовать любой форма, например если написать так: 
```js 
out.time = span.view("Время dd:hh:mm:ss:SS");
```

То будет получен результат:

`Время 00:02:30:00:00`
## span.locale

Данная функция вернет время с локализацией пользователя:
```js 
const span = qnext.time.span.new(0);
span.addHour(2);
span.addMin(30);
out.time = span.locale(); // 2ч. 30мин.
```





[⬅️QNext. Скрипты. Объект qnext](/docs-test/script/object-qnext).
  

