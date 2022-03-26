## QNext. Макрос git

[⬅️QNext. Макросы](/docs-test/ph/macros)



Макрос git позволит вам работать с подключенными git-репозиториями. Макрос может выполнять различные функции в зависимости от параметра **type**, который может принимать следующие значения:

* [type: repoContent](#type:-repocontent)
### type: repoContent

Макрос с типом repoContent покажет содержимое файла. Этот тип макроса имеет следующие параметры:
* repoId - ID вашего репозитория
* filename - путь до файла, если файл лежит в каталоге, необходимо указать и каталог в формате `myDirectory/myFile.txt`.
* sourceType - тип ресурса

Следующие макрос вернет содержимое файла myFile.txt в виде текста:
::: tip
!{git| <br>  type: repoContent;<br>  repoId: 123,<br>  filename: myFile.txt;<br>  sourceType: text;<br>}<br>
:::
### sourceType

Параметр `sourceType` указывает на тип загружаемого ресурса, может принимать следующие значения:
* text - содержимое файла будет загружено как обычный текст
* object - содержимое файла будет загружено как объект, работает с файлами формата `.json` `.yml` и `.yaml`. Также дополнительно потребуется параметр `key`, чтобы указать какую переменную из этого объекта необходимо вытащить. 

Например если у вас в файле `locales.yaml` лежит файл следующего содержания:
::: tip
texts:<br>  hello: Привет<br>  by: Пока<br>
:::

Тогда чтобы показать содержимое переменной texts.hello, воспользуйтесь макросом:
::: tip
!{git| <br>  type: repoContent;<br>  repoId: 123,<br>  filename: locales.yaml;<br>  sourceType: object;<br>  key: texts.hello;<br>  defaultValue: Строка не найдена;<br>}<br>
:::





[⬅️QNext. Макросы](/docs-test/ph/macros)


  
[Original](https://telegra.ph/QNext-Macros-git-01-29)