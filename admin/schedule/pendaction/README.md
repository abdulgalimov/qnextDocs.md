## ОД (отложенные действия)

**ОД** - Отложенное действие, которое можно запустить после выполнения пользователем любого действия, связанного с ботом.

Имеет 3 режима работы:

![](./1.png)

| Название | Описание |
| --- | --- |
| **Относительное время** | ОД будет выполнено через N времени после запуска |
| **Абсолютное время** | Выбрать день, в который будет срабатывать ОД |
| **В указанный день недели** | выбрать дни, в которые будут срабатывать ОД |


— **Настройки**
* Тех. название - название которое будет видно в списке ОД.

* Режим работы:

| Режим | Описание |
| --- | --- |
| **Режим по умолчанию** | запускает ОД, при попытке повторного запуска ОД ничего не произойдет | 
| **Режим замены** | запускает ОД, при повторном запуске перезапускает работающее ОД |
| **Режим добавления** | запускает ОД, при повторном запуске создает еще одно ОД, не отменяя ранее запущенные |

— **Триггер** - главный раздел, здесь необходимо указывать все реакции, которые должно выполнить ОД. Подробнее о реакциях [**можно узнать здесь**](/docs/admin/other/reactions).

— **Дубликат** - создание точной копии ОД.