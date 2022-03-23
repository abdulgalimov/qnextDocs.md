---
sidebar: auto
---

## QNext. Переменные


### Формы
* Чистый формат результатов формы(только заполненные данные)

${formResult.fieldsText} 
* Текст поля(переменная доступна в триггере этого поля) 

${fieldValue.text}
* Путь до поля в форме

${formResult.data.Name.text} - текста 

${formResult.data.Поле.number} - числа 


### Профили 

!!! ⚡️loadProfile !!!

${profile.Name.value} 
* Отображение записанной в профиле web-ссылки в формате html:
 _(<a href="https://site>название</a>)_

${profile.ИмяПараметра.value| html; } 


### Контент
* Путь до Контента и кнопки через поля формы selectContent/selectButton(устанавливать в триггере Финиш)

formResult.data.НазваниеПоля.content - путь до контента

formResult.data.НазваниеПоля.button - путь до кнопки 




### Прочее
* Невидимый символ (или как скрыть переменную, если она пустая)

${exec.1|notFound:&#8288;} - 1 пробел (разметка HTML)

${exec.1| notFound: \s} - 1 пробел

${exec.1| notFound: \0} - пустая строка
* Текст поста(сообщения) 

${update.message.text}
* Ответ JS 

${scriptResult.out.input}



[Qnext. Каталог полезное](/docs-test/ph/QNext-admin-lifehack-06-13)

[Qnext. Документация](/docs-test/ph/QNext-admin-documentation-05-08)