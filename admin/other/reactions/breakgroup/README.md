# breakGroup

**breakGroup** - работает по принципу реакции ⚡️break, только завершаются выполнения всех дальнейших реакций в группе.

Например у вас есть группа реакций:



⚡️**groupReaction**

— **sendMessage** text 1 

— **breakGroup**

— **sendMessage** text 2

⚡️**sendMessage** text 3



 В этом случае выполнятся реакции message с текстом text 1 и text 3. Все реакции внутри groupReaction после breakGroup будут проигнорированы.



