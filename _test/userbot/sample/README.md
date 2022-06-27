
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

```plain 
method: messages.sendMessage
peer: 
   constructor: inputPeerChannel
   channelId: -1001.... 
   accessHash: "-501...." 
text: Текст для отправки
```

## Отправить сообщение юзеру
```plain 
method: messages.sendMessage
peer: 
   constructor: inputPeerUser
   userId: 123....
   accessHash: "-136..."
text: Текст для отправки
```

## Отправить сообщение себе в избранное
```plain 
method: messages.sendMessage
peer: 
 constructor: inputPeerSelf
text: Текст для отправки
```

## Пересылка сообщения из чата/канала в чат/канал
```plain 
method: messages.forwardMessages
fromPeer:
 constructor: inputPeerChannel
 channelId: -1001451168153
 accessHash: "-7521564301491443954"
toPeer:
 constructor: inputPeerChannel
 channelId: -1001404256709
 accessHash: "-8957797356081582383"
id: ${update.message.id}
```

## Вступление юзерботом в чат/канал в публичный канал
```plain 
channels.joinChannel
resolve: "ссылка"
```

## Вступление юзерботом в чат/канал в приватный канал
```plain 
method: channels.joinChannel
link: "ссылка"
```