# Скрипты
## Общие сведения

О том как пользоваться скриптами в конструкторе ботов [QNextBot](http://t.me/qnextbot).

Скрипты в **QNextBot**, это код написанный на JavaScript, который выполняется в изолированной песочнице. Это означает что в коде доступны все базовые возможности языка JavaScript но нет возможности использовать внешние модули, такие как отправка запроса в сеть или обращение базе данных. _Возможно в будущем появится api для таких возможностей._

Выполнить скрипт можно двумя способами:
* макрос !{script| code: ...}
* реакция ⚡️runScript

Основное отличие в том, что результат макрос сразу же будет отображен на том месте, где был написан сам макрос. Макросы можно использовать для быстрой вставки в текст, например математического расчета. В макросе нельзя использовать длинный текст кода с использованием фигурных скобок { }. Если вам необходимо Написать сложный скрипт, используйте реакцию ⚡️runScript.

## Использование макроса !{script}
Создайте реакцию ⚡️message с текстом:

`Результат: !{script| code: 5 * 6}`

Вы увидите результат умножения 30.  Макрос выводит результат последнего выражения в скрипте.

Если в ходе произошла ошибка, вместо результата будет отображен текст ошибки. Если вы не хотите своим пользователям показывать текст JavaScript-ошибки, вы можете передать параметр `errorText`:
```plain 
Результат: !{script|
    code: 5 * a;
    errorText: Ошибка в коде;
}
```

Как видите, в qnext-макросах символ точка запятая ";" используется по умолчанию как разделитель параметров. Это значит что если вы в коде будете использовать символ ; вы получите ошибку. Чтобы этого избежать, необходимо макросу указать что разделителем параметров должен выступать другой символ, например символ |:
```plain 
Результат: !{script|ps(|)
  code: var a = 5;
        var b = 6;
        a * b; |
  errorText: Ошибка в коде|
}
```

Если вам необходимо написать сложный скрипт с такими инструкциями как if, for используя фигурные скобки, воспользуйтесь реакцией ⚡️runScript.


## Использование реакции runScrip
С помощью реакции runScript у вас будет больше возможности, вы сможете получить на выходе любое значение и сразу несколько, а не только результат последнего выражения как в макросе. Создайте реакцию runScript с кодом:
```js 
var a = 20;
var b = 10;
out.sum = a + b;
out.diff = a - b;
out.multiply = a * b
```

А следом реакцию message с текстом:
```plain 
Сумма: ${scriptResult.out.sum}
Разница: ${scriptResult.out.diff}
Произведение: ${scriptResult.out.multiply}
```

Вы получите такой вывод:
```plain 
Сумма: 30
Разница: 10
Произведение: 200
```

Как видите в любом месте скрипта вы можете вывести наружу значение с помощью переменной out, например `out.x = 123`. А потом использовать это значение с помощью переменной `${scriptResult.out.x}`.

Вы можете использовать любые конструкции языка JavaScript, если написать скрипт:
```js 
var a = 20;
var b = 10;
if (a > b) {
 out.result = "a > b"
} else {
 out.result = "a < b"
}
```

И попытаться вывести результат `${scriptResult.out.result}`,  вы получите на выходе строку `a > b`.

## Объект qnext
Для облегчения работы в скриптах доступен специальный объект qnext, у которого есть множество различных свойств и методов для упрощения работы в коде. Например если вы хотите в коде получить имя пользователя, вызвавшего эту реакцию, можно воспользоваться функцией `qnext.getValue()`:

`out.result = "Имя пользователя: " + qnext.getValue("user.name");`

Функция `qnext.getValue` возвращает значение переменной имеющейся в тригере. В качестве аргумента этой функции необходимо передать путь до переменной.
::: tip ℹ️
Если вы не помните путь до переменной воспользуйтесь реакций ⚡️log и найдите необходимую переменную на странице просмотра логов: [**Логи**](/docs/admin/other/reactions/log)
:::

У объекта qnext доступны множество различных вспомогательных объектов и функций, все они описаны на странице [QNext. Скрипты. Объект qnext](/docs/ext/script/object-qnext).


## Асинхронный режим
Под асинхронным режимом понимается возможность использовать в коде конструкции вида `async/await`. Чтобы реакция не завершилась до окончания выполнения async функции, включите галочку ☑️`asyncMode` в настройках реакции ⚡️`runScript` и после окончания выполнения вашего кода, вызовите функцию `qnext.onFinish()`:
```js 
async function run() {
  // здесь ваш асинхронный код
  qnext.onFinish();
}
run();
```

Если функцию `qnext.onFinish` не вызвать, то скрипт будет завершен аварийно по таймауту. В функцию `qnext.onFinish` можно передать что угодно, и это будет записано в переменную `${scriptResult.out.finish}`.

Если вы используете макрос, тогда в настройках макроса необходимо указать параметр `asyncMode`:
```plain 
!{script|
  asyncMode;
  code: Вашкод... 
}
```

⚠️В асинхронном режими скрипт работает намного дОльше чем точно такой же скрипт не в асинхронном режиме.


## Экспорт значений
Для экспорта значений из скрипта, вы можете воспользоваться объектом `out`. Все переменные записанные в объект `out`, будут доступны в триере после выполнения скрипта в переменной `${scriptResult.out.VarName}`. Например если выполнить скрипт с кодом:
```js 
var a = 10 + 20;
out.a = a;
```

Тогда после этого скрипта вы можете создать реакцию message и вывести значение переменной a используя переменную `${scriptResult.out.a}`.

Если вам необходимо выполнить несколько скриптов подряд, а потом вывести значения из разных скриптов, вам необходимо между скриптами вытаскивать промежуточные значения и записывать их в локальные переменные ${localVar}, потому что следующая реакция runScript перезапишет значения out из предыдущей реакции. Делать реакции localVarSet для каждой такой переменной может быть не всегда удобно, поэтому вы можете сделать автоматический экспорт значения в локальную переменную. Для этого надо в скрипте присвоить значение объекту `exports`. Все переменные из этого объекта сразу попадут в объект ${localVar}:
```js 
var a = 10 + 20;
exports.a = a;
```

После такого скрипта, будет доступна переменная `${localVar.a}`.

## Ограничения
### Время

⚠️Время выполнения скрипта ограничение 10 секундами.
### setInterval и setTimeout

Функции `setInterval` и `setTimeout`  доступны только в [асинхронном режиме](#асинхронныи-режим).
