# writeFormCustom
**writeFormCustom** - реакция связанная с полем форме: **custom.** 

Позволяет принимать совершенно любой текст или файлы/медиа.

![](./1.png)

По умолчанию, поле не будет принимать какие-либо данные, пока в триггере подготовки поля не указать соответствующую реакцию **writeFormCustom.** 

---

**Пример использования.**

Задача: нам принять данные, только если это:

@username (type: mention)

ссылка (type: utl)

Как нам это реализовать:

Триггер подготовки поля **custom**

**for** ```${update.message.entities}```

— **groupReactions** 

Ограничения:

**string** ```${forItem.value.type}``` = **mention**

  or

```string ${forItem.value.type}=url```

— — **writeFormCustom** ```${update.message.text}```






