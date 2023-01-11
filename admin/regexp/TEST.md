












### Универсальная административная регулярка
```plain
/^(?<cmd>(!|\/)[^\s]+)(\s+((?<durationValue>\d+)(?<durationType>d|h)))?(\s+(?<reason>[^\/]+))?$/i
```

_Подходит для задач когда требуется отвечать на сообщение юзера._

```${exec.group.cmd}``` = !cmd

```${exec.group.durationValue}``` = 1

```${exec.group.durationType``` = d

```${exec.group.reason}``` = reason

Учебник: [Регулярные выражения](https://learn.javascript.ru/regexp-introduction)




