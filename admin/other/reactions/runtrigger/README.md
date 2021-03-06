## runTrigger
**runTrigger** — реакция для запуска общего триггера, ранее созданного в ⚙️Настройках бота в разделе 🔗Триггеры — 🔗Общие Триггеры.

---

**Лайфхак**

Бывает так, что в очень большое количество меню / разделов / контентов, нужно копировать одинаковые кнопки*, но в каждой кнопке, какой-то параметр в реакциях триггера, нужно задавать уникальный (поэтому в общий триггер все реакции перенести не получится). В идеале было бы "клонировать" кнопку копированием, и вставлять в нужное место, после, изменяя нужный параметр... Конечно, если в триггере кнопки одна реакция — особых проблем нет, но если довольно большая последовательность — копировать и вставлять их каждую по очереди будет уже нудно и долго. Есть способ решения такой задачи.  — **"Оберните" всю последовательность реакций в триггере кнопки в одноимённый (с кнопкой) groupReaction и тогда вся последовательность, включая связи, вложения и ограничения будет копироваться за один раз. Это поможет сэкономить кучу времени.**
*Это же относится к триггерам команд и сущностей, в которых нужно "клонировать", а потом редактировать, сразу, длинные последовательности реакций. А вот если реакции одинаковые и не требуют уникальных различий для каждого триггера — целесообразно перенести их в ОТ и вместо длинного набора, запускать только runTrigger.
Профит.

---

Общий триггер может принимать параметры и в нем доступны все переменные созданные до его запуска.

Если в каждой кнопке есть уникальный параметр, то его можно передать в общий триггер и там обработать.

Передаваемый параметр доступен в переменной **${triggerValue}**