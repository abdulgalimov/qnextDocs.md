* [Google таблицы](#google)
* [trello](#trello) (в процессе написания)
* [WEB](#web)
* [Глобальные переменные](#глобальные-переменные)
* [Голосование](#голосование)
* [Динамические переменные](#динамические-переменные)
* [Контент](#контент)
* [Локальные переменные](#локальные-переменные)
* [Магазин](#магазин)
* [Переключатели](#переключатели)
* [Пользователи](#пользователи)
* [Пригласительные ссылки](#пригласительные-ссылки)
* [Профиль](#профиль)
* [Рассылки](#рассылки)
* [Списки пользователей](#списки-пользователеи)
* [Телеграм клавиатура](#телеграм-клавиатура)
* [Форма](#форма)
* [Чат](#чат)
* [Прочее](#прочее)

[QNext. Документация](/docs-test/)


## [Google](/docs-test/admin/google-about)
* [**googleWrite** ](/docs-test/reactions/googlewrite)- записать в гугл-таблицу
## [Trello](/docs-test/admin/trello-about)

_в процессе написания_
* [trelloApiRequest](/docs-test/reactions/trelloapirequest)
* [trelloAddComment](/docs-test/reactions/trelloaddcomment)
* [trelloCreateCard](/docs-test/reactions/trellocreatecard)
* [trelloGetCard](/docs-test/reactions/trellogetcard)
* [trelloCreateCardAttachment](/docs-test/reactions/trellocreatecardattachment)
* [trelloUpdateCard](/docs-test/reactions/trelloupdatecard)
## [WEB](/docs-test/admin/web-about)
 * [**httpRequest** ](/docs-test/reactions/httprequest)- Выполнить HTTP-запрос (get, post)
 * [**webhookResponse** ](/docs-test/reactions/webhookresponse)- Ответ для webhook's
 * [**weblinkRedirect**](/docs-test/reactions/redirecturl) - перенаправление на другой адрес
 * [**WeblinkResponse**](/docs-test/reactions/weblinkresponse) - Ответ на web запрос
## [Глобальные переменные](/docs-test/admin/globalvariables-about)
 * [**globalVarDel** ](/docs-test/reactions/globalvardel)- Удалить глобальную переменную
 * [**globalVarSet** ](/docs-test/reactions/globalvarset)- Сохранить глобальную переменную
 * [**loadGlobalVar** ](/docs-test/reactions/loadglobalvariable)- Загрузить глобальные переменные
## [Голосование](/docs-test/admin/vote-about)
 * [**loadVote** ](/docs-test/reactions/loadvote)- Загрузить голос в опросе
 * [**loadVoteResults** ](/docs-test/reactions/loadvoteresults)- Загрузить результаты голосования
 * [**takePollUsers** ](/docs-test/reactions/takepollusers)- Загрузить проголосовавших в опросе
 * [**vote** ](/docs-test/reactions/vote)- голосование
 * [**voteAdd** ](/docs-test/reactions/voteadd)- Добавить голос
 * [**voteCancel** ](/docs-test/reactions/votecancel)- Отменить голос
 * [**voteSwitch** ](/docs-test/reactions/voteopen)- Открыть/закрыть голосование
 * [**voteRevoke** ](/docs-test/reactions/voterevoke)- Очистить (сбросить) голосование
## [Динамические переменные](/docs-test/reactions/dynamicvariable)
 * [**DynamicVarDel** ](/docs-test/reactions/cleardynamicvariable)- Удалить значение динамической переменной
 * [**loadDynamicVar** ](/docs-test/reactions/readdynamicvariable)- Прочитать динамическую переменную
 * [**DynamicVarSet** ](/docs-test/reactions/writedynamicvariable)- Записать динамическую переменную
## [Контент](/docs-test/admin/content-about)
 * [**loadContent** ](/docs-test/reactions/loadcontent)- Загрузить Контент
 * [**loadRandomContent** ](/docs-test/reactions/loadrandomcontent)- Выбрать случайный контент
 * [**sendContent** ](/docs-test/reactions/sendcontent)- Отправить Контент
 * [**refreshContent** ](/docs-test/reactions/refreshcontent)- Обновить контент
## [Локальные переменные](/docs-test/reactions/localvar)
 * [**localVarAdd** ](/docs-test/reactions/localvaradd)- Добавить значение в локальную переменную
 * [**localVarDel**  ](/docs-test/reactions/localvardel)- Удалить локальную переменную
 * [**localVarSet** ](/docs-test/reactions/localvarset)- Установить локальную переменную
## [Магазин](/docs-test/admin/stores-about)

_в процессе написания_
 * [openStoreCarts ](/docs-test/reactions/openstorecarts)- Показать Мою корзину в магазине
 * [openStoreCategory ](/docs-test/reactions/openstorecategory)- Показать Категорию в магазине
 * [openStoreOrders ](/docs-test/reactions/openstoreorders)- Показать Мои заказы в магазине
 * [openStoreProduct ](/docs-test/reactions/openstoreproduct)- Показать Продукт в магазине
 * [orderCheckout ](/docs-test/reactions/ordercheckout)- Начать оформление заказа в магазине
 * [sendStore ](/docs-test/reactions/sendstore)- Отправить магазин
 * [sendStoreOrder ](/docs-test/reactions/sendstoreorder)- Показать полученный заказ в магазине
## [Переключатели](/docs-test/admin/switch-about)
 * [**voteSwitch** ](/docs-test/reactions/voteopen)- Открыть/закрыть голосование
 * [**profileSwitch** ](/docs-test/reactions/profileswitch)- Изменить статус профиля bool
 * [**scheduleSwitch**  ](/docs-test/reactions/scheduleon)- Изменить состояние расписания
 * [**reactionOnSwitch**](/docs-test/reactions/reactionswitch) - Изменить состояние реакции
## [Пользователи](/docs-test/admin/users-about)
 * [**takeAdmins** ](/docs-test/reactions/takeadmins)- Загрузить админов
 * [**takeMentions** ](/docs-test/reactions/takementions)- Получить всех упомянутых в тексте людей и чаты
 * [**takeAuthorUser** ](/docs-test/reactions/takeauthoruser)- Получить пользователя инициатора действия
 * — [takeButtonUsers](/docs-test/reactions/takebuttonusers) - Загрузить проголосовавших за кнопку
 * [**takeRandomUser** ](/docs-test/reactions/takerandomuser)- Загрузить случайного пользователя
 * [**takeReplyUser** ](/docs-test/reactions/takereplyuser)- Загрузить пользователя, которому ответили в...
 * [**takeUsers** ](/docs-test/reactions/takeusers)- взять пользователя(ей)
## [Пригласительные ссылки](/docs-test/admin/invitelink-about)
* [**exportChatInviteLink** ](/docs-test/reactions/exportchatinvitelink) - создать основную пригласительную ссылку
* [**createChatInviteLink** ](/docs-test/reactions/createchatinvitelink)- создать дополнительную пригласительную ссылку

_в разработке_
* [**editChatInviteLink** ](/docs-test/reactions/editchatinvitelink)- изменить пригласительную ссылку
* [**revokeChatInviteLink** ](/docs-test/reactions/revokechatinvitelink)- обновить пригласительную ссылку
* [**loadChatInviteLink** ](/docs-test/reactions/loadchatinvitelink)- получить пригласительную ссылку
## [Профиль](/docs-test/admin/profile-about)
 * [**loadProfile** ](/docs-test/reactions/loadprofile)- Загрузить Профиль пользователя
 * [**profileAdd** ](/docs-test/reactions/profileadd)- Добавить Профиль пользователя
 * [**profileDel** ](/docs-test/reactions/profiledel)- Удалить Профиль пользователя
 * [**profileSet** ](/docs-test/reactions/profileset)- Установить Профиль пользователя
 * [**profileDelAll** ](/docs-test/reactions/profiledelall)- Удалить все Профили пользователя
 * [**profileSet** ](/docs-test/reactions/profileset)- Установить Профиль пользователя
 * [**profileSwitch** ](/docs-test/reactions/profileswitch)- Изменить статус профиля bool
 * [**findProfileValue** ](/docs-test/reactions/findprofilevalue)- Найти значение профиля
 * [**profilesCount** ](/docs-test/reactions/profilescount)- посчитать количество профилей
## [Рассылки](/docs-test/admin/newsletters-about)
 * [**newsletterCancel** ](/docs-test/reactions/newslettercancel)- Отменить рассылку
 * [**newsletterRevoke** ](/docs-test/reactions/newsletterrevoke)- Аннулировать рассылку
 * [**newsletterStart**](/docs-test/reactions/newsletterstart) - Начать рассылку
## [Списки пользователей](/docs-test/admin/userlist-about)
 * [**addToUserList** ](/docs-test/reactions/addtouserlist)- Добавить в список пользователей
 * [**delFromUserList** ](/docs-test/reactions/delfromuserlist)- Удалить из списка пользователей
 * [**takeUserList** ](/docs-test/reactions/takeuserlist)- взять список пользователей
## [Телеграм клавиатура](/docs-test/admin/keyboard-about)
 * [**keyboardAction**](/docs-test/reactions/keyboardaction) - выполнить действие при нажатии на кнопку.
 * [**keyboardHide** ](/docs-test/reactions/keyboardhide)- Скрыть клавиатуру
 * [**keyboardRefresh** ](/docs-test/reactions/keyboardrefresh)- Обновить текущую клавиатуру
 * [**keyboardShow** ](/docs-test/reactions/keyboardshow)- Показать клавиатуру
## [Форма](/docs-test/admin/forms-about)
 * [**formStart** ](/docs-test/reactions/formstart)- Запустить форму
 * [**formCancel** ](/docs-test/reactions/formcancel)- Остановить (прервать) форму
 * [**formResult** ](/docs-test/reactions/formresult)- Показать результат формы
 * [**loadFormResult** ](/docs-test/reactions/loadformresult)- Загрузить результаты формы
 * [**openFormResult** ](/docs-test/reactions/openformresult)- Открыть результаты формы
 * [**takeFormResults** ](/docs-test/reactions/takeformresults)- Получить последние несколько результатов формы
 * [**saveFormVariables** ](/docs-test/reactions/saveformvariables)- сохранить локальную переменную в форме
 * [**writeFormCustom** ](/docs-test/reactions/writeformcustom)- загрузить произвольный параметр формы
## [Чат ](/docs-test/admin/chat-about)

_Все реакции работают как в чате так и в канале_
 * [**approveChatJoinRequest** ](/docs-test/reactions/approvechatjoinrequest)- Одобрить запрос в чат
 * [**banChatMember** ](/docs-test/reactions/kickchatmember)- Заблокировать и удалить участника из чата
 * [**banChatSenderChat** ](/docs-test/reactions/banchatsenderchat)- Заблокировать канал в чате
 * [**chatPermissions** ](/docs-test/reactions/chatpermissions)- Доступы в чат
 * [**declineChatJoinRequest** ](/docs-test/reactions/declinechatjoinrequest)- отклонить запрос на вступление в чат
 * [**deleteChatStickerSet** ](/docs-test/reactions/deletechatstickerset)- Удалить из чата стикер-сет
 * [**exportChatInviteLink**](/docs-test/reactions/exportchatinvitelink) - Создать новую ссылку для приглашения
 * [**getChat** ](/docs-test/reactions/getchat)- Получить информацию о чате
 * [**getChatMember** ](/docs-test/reactions/getchatmember)- Получить информацию об участнике чата
 * [**getChatMemberCount** ](/docs-test/reactions/getchatmembercount)- Получить количество пользователей в чате
 * [**getUserProfilePhotos** ](/docs-test/reactions/getuserprofilephotos)- Получить фотографии из профиля пользователя
 * [**leaveChat** ](/docs-test/reactions/leavechat)- Покинуть чат
 * [**promoteChatMember**](/docs-test/reactions/promotechatmember) - Административные права в чате
 * [**restrictChatMember**](/docs-test/reactions/restrictchatmember) - Ограничить участника чата
 * [**setChatAdminTitle** ](/docs-test/reactions/setchatadmintitle)- Подпись администратора
 * [**setChatDescription** ](/docs-test/reactions/setchatdescription)- Установить описание чата 
 * [**setChatStickerSet** ](/docs-test/reactions/setchatstickerset)- Установить в чате стикер-сет
 * [**setChatTitle** ](/docs-test/reactions/setchattitle)- Установить название чата
 * [**takeChat** ](/docs-test/reactions/takechat)- Загрузить чат для отправки сообщения
 * [**takeChatAdmins** ](/docs-test/reactions/takechatadmins)- Загрузить всех администраторов чата
 * [**takeChatDir** ](/docs-test/reactions/takechatdir)- Загрузить каталог с чатами  для отправки сообщения
* [  **takeChatMembers**](/docs-test/reactions/takechatmembers) - Загрузить участников чата
 * [**takeTechChat**  ](/docs-test/reactions/taketechchat)- Загрузить технический чат
 * [**unbanChatSenderChat**  ](/docs-test/reactions/unbanchatsenderchat)- Разблокировать канал в чате




## Прочее 
 * [**adminMenu** ](/docs-test/reactions/adminmenu)- Меню админа
 * [**alert** ](/docs-test/reactions/alert)- Сообщение в окне
 * [**amocrmApi**](/docs-test/reactions/amocrmapi) - 
 * [**banBotUser** ](/docs-test/reactions/banbotuser)- Забанить/Разбанить юзера в боте
 * [**break** ](/docs-test/reactions/break)- Отменить последующие реакции
 * [**breakGroup** ](/docs-test/reactions/breakgroup)- Отменить последующие реакции в группе
 * [**buttonVisible** ](/docs-test/reactions/buttonvisible)- Показать/скрыть кнопку
 * [**bindTrigger** ](/docs-test/reactions/bindtrigger)- Привязать триггерre
 * [**chartAnnotations** ](/docs-test/reactions/chartannotations)- Аннотации графика (в процессе разработки)
 * [**chartFill** ](/docs-test/reactions/chartfill)- Заполнить график (в процессе разработки)
 * [**deleteMessage** ](/docs-test/reactions/deletemessage)- Удалить сообщение
 * [**exportToExcel** ](/docs-test/reactions/exporttoexcel)- Экспортировать в excel
 * [**feedback** ](/docs-test/reactions/feedback)- Обратная связь
 * [**fix** ](/docs-test/reactions/fix)- Следующие реакции не будут изменять этот пост
 * [**for** ](/docs-test/reactions/for)- Цикл
 * [**forwardMessage** ](/docs-test/reactions/forwardmessage)- Переслать исходное сообщение
 * [getFileBase64 ](/docs-test/reactions/getfilebase64)- Получить base64 файла
 * [**groupReactions** ](/docs-test/reactions/groupreaction)- Группировать реакции
 * [**hide**](/docs-test/reactions/hide) - Скрыть пост
 * [**inlineAnswer** ](/docs-test/reactions/inlineanswer)- ответит на inline запрос
 * — [inlineBrowse ](/docs-test/reactions/inlinebrowse)- Просмотрщик inline-запросов
 * — [loadButton ](/docs-test/reactions/loadbutton)- Загрузить кнопку
 * [**log** ](/docs-test/reactions/log)- Записать в лог текущее состояние
 * [**notification**  ](/docs-test/reactions/notification)- Всплывающее сообщение
 * [**parseDate** ](/docs-test/reactions/parsedate)- Парсинг даты
 * [**pin** ](/docs-test/reactions/pin)- Закрепить сообщение
 * [**redirectToBot** ](/docs-test/reactions/redirecttobot)- Перенаправить пользователя в приват с ботом
 * readStats - Загрузить статистику
 * saveStats - Сохранить статистику
 * [**return** ](/docs-test/reactions/return)- Отменить все последующие триггеры и реакции
 * [**runRegexp** ](/docs-test/reactions/runregexp)- Выполнить регулярное выражение
 * [**runScript** ](/docs-test/reactions/runscript)- Выполнить скрипт
 * [**runTrigger**  ](/docs-test/reactions/runtrigger)- Выполнить Общий триггер
 * [**sendChatAction** ](/docs-test/reactions/sendchataction)- Показать действие бота
 * [**sendDice** ](/docs-test/reactions/senddice)- Отправить кости
 * [**sendLocation** ](/docs-test/reactions/sendlocation)- Отправить гео-позицию
 * [**sendMenu** ](/docs-test/reactions/sendmenu)- Отправить меню
 * [**sendMessage** ](/docs-test/reactions/message)- Отправить сообщение от бота
 * [**sendPayment** ](/docs-test/reactions/sendpayment)- Отправить платежку
 * [sendYandexWallet ](/docs-test/reactions/sendyandexwallet)- Отправить ссылку на оплату yandex кошельком
 * [**setUserLanguage** ](/docs-test/reactions/setuserlanguage)- Установить язык пользователя
 * [takeVariable](/docs-test/reactions/takevariable) - Устарело, используйте реакцию [**For**](/docs-test/reactions/for)
 * [**timeout** ](/docs-test/reactions/timeout)- запустить действие с задержкой.
 * [**uploadToTelegraph**](/docs-test/reactions/uploadtotelegraph) - загрузить файл в Телеграф
 * [**uploadFile** ](/docs-test/reactions/uploadfile)- загрузить файл в Телеграм
 * [**userActionStart** ](/docs-test/reactions/useractionstart)- запускает отложенное действие
 * [**userActionStop** ](/docs-test/reactions/useractionstop)- останавливает отложенное действие
 * [**unpin** ](/docs-test/reactions/unpin)- Открепить пост в чате/канале
 * [**unpinAll** ](/docs-test/reactions/unpinall)- Открепить все посты в чате/канале