## QNext. Прочее полезное

▪️Случайный выбор: 

🔡слова

!{random|type:text;words:текст1, текст2}

🔢числа: !{random|type:number:min:1; max:99}

▪️Произвольно вводимый текст (используется например при создании нового контента из шаблона)

 !{template|text: Текст}

▪️Ссылка на результаты формы 

!{makeLink| type: formResult}

▪️Количество пользователей бота 

!{usersCount| type: all} - все 

 !{usersCount| type: list; usersListId: 00} - из списка 

▪️Список столбиком мен-ссылок проголосовавших за кнопку(со значком) 

 !{vote|type: users ; 

userView: name;

userLink: default;

splitterUser: \n;

userPrefix: значок;

contentId: 00;

button: 00} 

▪️Специальные значения  

client.isStartedUser - пользователь запустил бота

client.isNewUser - новый пользователь бота 

▪️Название кнопки, за которую проголосовал пользователь с указанным id(без указания id - покажет инициатора) 

!{vote|type: user; notFound: Не голоса; userId: 129999262}  

▪️Отображение кода переменной/макроса 

${var.open} - вместо "${" для перемінної

!{macros.open} - вместо "!{" для макроса 

▪️Текст страницы меню 

${menuItem.title} 

▪️Ссылка на пост 

!{linkToMessage| title: Пост} 

▪️Ссылка на инициатора 

!{user|text:СвоеИмя}  

▪️Предыдущая реакция 

${reactionResult.response} 

▪️Запись профиля в ⚡️runScript 

⚡️loadProfile 

qnext.getValue("profile.Name.Value")

▪️Абзац 

!{html| type: br} 

▪️Пробел 

!{html| type: space} 



▪️Ссылка на пользователя бота 

https://t.me/ИмяБота?start=user_0000000 



[Qnext. Каталог полезное](/docs-test/admin/lifehack)

[Qnext. Документация](/docs-test/)
  
[Original](https://telegra.ph/QNext-admin-other-06-20)