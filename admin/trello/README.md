# Trello
• [Макрос trello](/docs-test/ext/macros/trello)


Trello — облачная программа для управления проектами небольших групп.
Бот сможет просматривать доски, списки и карточки. Можно подписаться на обновления всей доски, конкретного списка или карточки. У каждой подписки есть свой триггер, который выполняется в момент когда Trello сообщает об изменениях в какой либо модели. 

## Подключаем Trello к боту

Trello — 🧰Аккаунты — ➕ Добавить — Укажите срок жизни доступа: без срока годности —  выбираем все доступы (скриншот ниже)

![](./1.png)

Ранее нужно создать аккаунт в Trello

![](./2.png)

Проходим авторизацию аккаунта 🧰

![](./3.png)

![](./4.png)

После успешной авторизации в вашем боте придёт уведомление

![](./5.png)

Ставим галочку для получения уведомлений в логах

![](./6.png)
## Настройка рабочего места аккаунта в браузере                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

![](./7.png)

Далее ничего сложного )

![](./8.png)

После создания рабочего места, нужно создать доску

![](./9.png)

Процесс создания доски, на самой странице описано что и как. После создания доски мы получаем такой результат:

![](./10.png)
## Первый update в логах

⚙️Настройки — 🔗Триггеры — 🔗Триггер Аккаунта — ⚡️Реакции — ⚡️log

![](./11.png)

Создаем карточку на сайте Trello

![](./12.png)

Смотрим логи 
**Что такое логи ?** [Ответ](/docs-test/ext/reactions/log) 

![](./13.png)
* [trelloApiRequest](/docs-test/admin/trello/trelloapirequest)
* [trelloAddComment](/docs-test/admin/trello/trelloaddcomment)
* [trelloCreateCard](/docs-test/admin/trello/trellocreatecard)
* [trelloGetCard](/docs-test/admin/trello/trellogetcard)
* [trelloCreateCardAttachment](/docs-test/admin/trello/trellocreatecardattachment)
* [trelloUpdateCard](/docs-test/admin/trello/trelloupdatecard)
