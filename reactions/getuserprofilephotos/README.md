
getUserProfilePhotos - получить аватарку(ки) пользователя

![](./1.png)

Пользователь - указываем ID пользователя, чьи аватарки надо загрузить.

offset - порядковый номер первой загружаемой фотографии

limit - количество загружаемых аватарой

Информация будет доступна в переменной:

_${userPhotosResult}_

![](./2.png)

**ОСОБЕННОСТИ**:

Можно загрузить не более 100 аватарок за 1 запрос


::: tip ℹ️
[**getUserProfilePhotos  method bot.api**](https://core.telegram.org/bots/api#getuserprofilephotos)
:::






