
Форма - универсальное средство приема данных от пользователей.

![](./1.png)
## Оглавление

[**Настройки**](#настроики)

[**Поля**](#поля)

[**Результаты**](#результаты)

[**Триггеры**](#триггеры)

[**Реакции**](#реакции)








## Настройки
## Ограничения

— Применяются все предлагаемые платформой [**ограничения**](/docs-test/_export/restrictions).
## Тех. название 

—  Название формы которое видно только админам.
## Заголовок 

— Текст, который будет отображаться в шапке каждого поля
## Локализация

—  Изменение текста системных кнопок бота. 

Предусмотрены следующие текста для изменения:
* Отменить форму
* Пропустить
* Далее
* Выбрать
* Предоставить телефон
* Предоставить геопозицию
* Выбрать пользователя
## Результаты

— 
## Нельзя отменить

— Разрешение или запрет пользователю отменять форму
## Не сохранять результаты

— Если вам не нужны результаты пройденных форм, можно отключить их хранение.
## Чистить историю

— Удаление или сохранение пройденных результатов форм.
* ☑️ Чистить историю - пройденные поля будут удаляться
* ◻️ Чистить историю - пройденные поля будут оставаться в чате
## Разрешить команды

— Настройка реакций бота на команды во время прохождения формы: Будет реагировать или нет.
## Разрешить кнопки клавиатуры

— Настройка реакций бота на клавиатуру во время заполнения формы: Будет реагировать или нет.
## Ограничение количества

— Ограничивает количество раз, которое пользователь может запустить и пройти форму.
## Ограничение времени

—
## Версия

—
## Google таблицы

— Подключение и вывод результатов формы в [**Google таблицы.**](/docs-test/_export/admin/google-about)
## Конвертор

— Подключение конвертора для вывода результатов формы в [**Google таблицы**](/docs-test/_export/admin/google-about) или Excel
## Workflows 

—
## Поля

**Общие настройки полей - индивидуальные настройки для каждого поля.**

— Ограничения Поля

— Выключено

— Скрыть в результатах

— Не показывать Web-превью

— Изменить название

— Изменить текст

— Изменить фото

— Карта настроек

— Завершить форму

— Не обязательный

— Статистика

**Поля:**
## choose

— Поле предназначенное для мультивыбора вариантов ответов. Можно выбирать несколько вариантов.

![](./2.png)
## select

— Поле для выбора одного варианта ответа. Можно выбрать только один вариант.

![](./3.png)
## branch

— Поле представляющее из себя форму внутри поля. Внутри каждой кнопки можно создать свои поля со своими кнопками.
## text

— Поле для приема текстовых сообщений.
Пример: _текст, кастомный текст._

Имеет следующие настройки:
* Минимум и Максимум: определяет количество символов которое будет принимать поле.
* Регулярное выражение - регулирование и контроль вводимого текста.
* Форматированный текст - поддержка и сохранение введенного форматированного текста.
## number

— Поле для приема числовых значений.
Пример: _1, 123456, 64562456._

Имеет следующие настройки:
* Минимум и Максимум: определяет диапазон чисел которые будет принимать поле. Например: от 1 до 100.
* Дробное число: позволяет вводить данные типа 110.1, 56.47.
## email

— Поле для приема адресов электронных почт
Пример: mail@mail.ru, ya@ya.ru.

## phone

— Поля для приема телефонных номеров.

Имеет 2 режима работы:
* Предоставление номера с помощью кнопки "Предоставить номер"
* Опция "ввести номер Текстом" - позволяет пользователю отправить номер текстом.
## geo

— Поле для приема геолокации пользователя с помощью кнопки "Отправить геолокацию"
## url

— Поле для приема любого типа ссылок.
Пример: qnext.app, t.me.

## image

— Поле для приема изображений*
**update.message.photo**: jpg, bnp и т.д.
!!! не путайте с файлами


## video

— Поле для приема видео*
**update.message.video**: avi, mp4, mkv и т.д.
!!! не путайте с файлами

## media

— Поле для приема файлов типа медиа*

**update.message.photo**: jpg, bnp и т.д.

**update.message.video**: avi, mp4, mkv и т.д.

update.message.audio: mp3, wav, flac и т.д.
## file

— Поле для приема файлов типа документ*

update.message.document*
## audio

— Поле принимает аудио*
update.message.audio: mp3, wav, flac и т.д.
!!! не путайте с файлами

## voice

— Поле принимает голосовые записи*
Только формат ogg
## duration

— Поле для указания произвольного значения времени

![](./4.png)
##  info

— Поле для отображения информации

![](./5.png)
## date

— Поле для указания даты. 

![](./6.png)


Имеет несколько настроек:
* **Исключения -** Разрешает выбирать только выходные, или только будничные дни.

![](./7.png)
* **Прошлое время -** По умолчанию можно выбрать только настоящее и будущее время. Эта функция позволяет указывать прошлое время
* **Шаблон** - позволяет указывать дату в виде текста с соблюдением формата.
* **Скрыть календарь** - скрывает календарь ввиде кнопок, оставляя возможность ввести дату только цифрами.
## secret

— Устарело. Будет удалено.
## selectContent

— Поле для выбора и загрузки данных контента для дальнейшей работы с этим контентом.
## selectButton

— Поле для выбора и загрузки данных кнопки контента для дальнейшей работы с этой кнопкой из контента.
## mention

— Поле принимает @username пользователей
## sticker

— Поле принимает стикеры
## time

 — Поле для указания времени в формате часы:минуты

![](./8.png)
## list

— Поле для вывода больших списков кнопок с помощью инлайн вывода.

Особое удобство поля в том, что кнопки загрузить с помощью JSON кода:

**Пример работы поля:**

![](./9.png)

![](./10.png)

Особое удобство поля в том, что кнопки загрузить с помощью JSON кода:
![](./11.png)
## pay

—
## hidden 

— Скрытое поле. Удобное поле для передачи данных в форме без отображения содержимого в результатах форм, а так же для пользователя.
## custom

Поле для приема любого типа данных (в том числе смешанных). Может одновременно принимать и ссылки и цифры, или ссылки и юзернеймы. 
Работает с связке с реакцией: [**writeFormCustom**](/docs-test/_export/reactions/writeformcustom)
## user

— Поле для выбора пользователя бота.

Имеет настройки поля: 

**Кандидаты** - позволяет выбрать определенную группу лиц, из которых можно будет выбрать пользователей:

**Типы пользователей:**
* Все пользователи бота
* Список пользователей
* Состоит в списке
* Не состоит в списке
* Контент
* Проголосовал
* Не проголосовал

**Исключения:**

![](./12.png)
## menu

— Поле для выбора ранее созданного раздела меню.




## Результаты

— Отображение всех результатов пройденных форм пользователями.
## Триггеры
## Триггер Старт

— Триггер срабатывает первым и единожды при запуске формы. 
## Триггер Поля До

— Триггер срабатывает перед запуском поля. 

Например, если вам нужно произвести какие-то расчета для дальнейшей работы, или же загрузить какие-то данные.
## Триггер Поля После

— Триггер срабатывает после принятия данных в форме
## Триггер Кнопки

— Триггер срабатывает при нажатии на кнопки (поля типа select, choose, branch)
## Триггер лимита количества

— Триггер срабатывает при превышении лимита количества прохождений формы.
## Триггер лимит времени

— Триггер для ограничения частоты прохождения формы. Если выставить 1 час - форму можно будет проходить не чаще, чем раз в 1 час.
## Триггер Отмена

— Триггер отмены срабатывает после нажатия на кнопку "**Отменить форму**"
## Триггер Финиш

— В триггере финиша работает реакция  [**formResult**](/docs-test/_export/reactions/formresult), которая отображает данные пройденной формы.




## Особенности

***Maximum file size to download is 20 MB**

[**https://core.telegram.org/bots/api#file**](https://core.telegram.org/bots/api#file)




## Реакции

 [**formStart** ](/docs-test/_export/reactions/formstart)- Запустить форму

 [**formCancel** ](/docs-test/_export/reactions/formcancel)- Остановить (прервать) форму

 [**formResult** ](/docs-test/_export/reactions/formresult)- Показать результат формы

 [**loadFormResult** ](/docs-test/_export/reactions/loadformresult)- Загрузить результаты формы

 [**openFormResult**](/docs-test/_export/reactions/openformresult) - Открыть результаты формы

 [**takeFormResults** ](/docs-test/_export/reactions/takeformresults)- Получить последние несколько результатов формы

 [**saveFormVariables** ](/docs-test/_export/reactions/saveformvariables)- сохранить локальную переменную в поле формы

 [**writeFormCustom** ](/docs-test/_export/reactions/writeformcustom)- записать произвольный параметр поля формы




