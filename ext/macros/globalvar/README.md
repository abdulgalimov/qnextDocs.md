# globalVar
Макрос `!{globalVar}` покажет значение глобальной переменной:
```js 
!{globalVar|
  code: CodeName;
  defaultValue: нет такой переменной
}
```
* code - код глобальной переменной
* defaultValue - значение по умолчанию, если такой глобальной переменной нет.
