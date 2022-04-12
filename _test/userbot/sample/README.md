


**Инициатор**

number = _${update.message.user.id}_

**Проверка на бота**

bool = _${update.message.user.bot}_

**Проверка на текстовые сообщения**

bool = _${update.message.message}_

**accesHash чата/канала**

_${update.message.channel.accesHash}_

**accesHash инициатора**

_${update.message.user.accesHash}_
## Шаблоны

_upd. нельзя отправлять сообщение состоящее только из цифр, или начинающееся с цифр._
## Отправить сообщение в чат/канал

method: messages.sendMessage

peer: 

   constructor: inputPeerChannel

   channelId: -1001....   == цифры

   accessHash: "-501...."    == строка   (может быть положительный, это нормально)

text: Текст для отправки


## Отправить сообщение юзеру

method: messages.sendMessage

peer: 

   constructor: inputPeerUser

   userId: 123.... == цифры

   accessHash: "-136..." == строка

text: Текст для отправки


## Отправить сообщение себе в избранное

method: messages.sendMessage

peer: 

 constructor: inputPeerSelf

text: Текст для отправки
  
