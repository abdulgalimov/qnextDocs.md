# Шаблоны запросов

Инициатор

_${update.message.user.id}_ = number

Проверка на бота

_${update.message.user.bot}_ = bool

Проверка на текстовые сообщения

_${update.message.message}_ = bool

accesHash чата/канала

_${update.message.channel.accesHash}_ = string

accesHash инициатора

_${update.message.user.accesHash}_ = string


_upd. нельзя отправлять сообщение состоящее только из цифр, или начинающееся с цифр._

## Отправить сообщение себе в избранное
```plain 
method: messages.sendMessage
peer: 
 constructor: inputPeerSelf
text: Текст для отправки
```

## Отправить сообщение юзеру
```plain 
method: messages.sendMessage
peer: 
   constructor: inputPeerUser
   userId: 123....
   accessHash: "-1234..."
text: Текст для отправки
```

## Отправить сообщение в чат/канал

```plain 
method: messages.sendMessage
peer: 
   constructor: inputPeerChannel
   channelId: -1001.... 
   accessHash: "-1234...." 
text: Текст для отправки
```

## Пересылка сообщения из чата/канала в чат/канал
```plain 
method: messages.forwardMessages
fromPeer:
 constructor: inputPeerChannel
 channelId: -1001...
 accessHash: "-1234..."
toPeer:
 constructor: inputPeerChannel
 channelId: -1001...
 accessHash: "-1234..."
id: ${update.message.id}
```
где:

**fromPeer** - откуда пересылаем сообщение

**toPeer** - куда пересылаем сообщение

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