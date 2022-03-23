---
sidebar: auto
---

## QNext. реакция breakGroup

**breakGroup** - работает по принципу реакции ⚡️break, только завершаются выполнения всех дальнейших реакций в группе.

Например у вас есть группа реакций:



⚡️groupReaction

— message text 1 

— breakGroup

— message text 2

⚡️message text 3



 В этом случае выполнятся реакции message с текстом text 1 и text 3. Все реакции внутри groupReaction после breakGroup будут проигнорированы.



[QNext. Перечень реакции](/docs-test/ph/QNext-admin-reaction-about-05-01)