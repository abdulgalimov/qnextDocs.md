


[🏠Главная](/docs/_test/userbot)


* [common](#common)
   * [getMe](#getme)
* [Messages](#messages)
   * [messages.sendMessage](#messages-sendmessage)
   * [messages.forwardMessages](#messages-forwardmessages)
   * [messages.reportSpam](#messages-reportspam)
   * [messages.getChats](#messages-getchats)
   * [messages.getFullChat](#messages-getfullchat)
   * [messages.getCommonChats](#messages-getcommonchats)
* [Channels](#channels)
   * [channels.toggleSlowMode](#channels-toggleslowmode)
   * [channels.deleteMessages](#channels-deleteMessages)
* [Stats](#stats)
   * [stats.getMegagroupStats](#stats-getmegagroupstats)
   * [stats.getBroadcastStats](#stats-getbroadcaststats)
   * [stats.loadAsyncGraph](#stats-loadasyncgraph)

##  [Регистрация и подключение юзербота](/docs/_test/userbot/createuserbot)

##  [Шаблоны и полезные подсказки](/docs/_test/userbot/sample)

## [Юзерботы работают на yaml](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)
## common
## getMe

Получить информацию о себе (юзер бот)
```yaml 
method: getMe
```
## Messages
##  messages.sendMessage

Отправить сообщение юзеру в личку или в чат/канал
```yaml 
method: messages.sendMessage
peer: InputPeer
text: Текст для отправки
silent: false
noWebPage: false
background: false
clearDraft: false
scheduleDate: Unixtime дата отправки
replyToMessageId: Id сообщения
```
* peer: [InputPeer](/docs/_test/userbot/inputpeer)
## messages.forwardMessages

Переслать сообщение
```yaml 
method: messages.forwardMessage
fromPeer: InputPeer
toPeer: InputPeer
id: числовой id сообщения или массив
silent: false
background: false
scheduleDate: Unixtime дата отправки
```
* peer: [InputPeer](/docs/_test/userbot/inputpeer)

пример:
```yaml 
method: messages.forwardMessages
fromPeer:
 constructor: inputPeerUser
 userId: 1234567
 accessHash: "qwe...asd"
toPeer:
 constructor: inputPeerUser
 userId: 7654321
 accessHash: "abcd...xyz"
id:
 - 22005
 - 22006
silent: true
background: false
```


##  messages.reportSpam

Сообщить о спаме от нового пользователя
```yaml 
method: messages.reportSpam
peer: InputPeer
```
* peer: [InputPeer](/docs/_test/userbot/inputpeer)



## messages.getChats

Получить информацию о чате
```yaml 
method: messages.getChats
chatId: -1234567890
```

_или_
```yaml 
method: messages.getChats
chatIdList: [-1234567890]
```
## messages.getFullChat

Получить полную информацию о чате
```yaml 
method: messages.getFullChat
chatId: -1234567890
```


## messages.getCommonChats

Найти общие с пользователем чаты
```yaml 
method: messages.getCommonChats
user: InputUser
limit: 10
maxId: 0
```
* user: [InputUser](/docs/_test/userbot/inputuser)


## Channels
## channels.toggleSlowMode
```yaml 
method: channels.toggleSlowMode
channel: InputChannel
seconds: 1
```
* channel: [InputChannel](/docs/_test/userbot/inputchannel)

## channels.deleteMessages
```yaml 
method: channels.deleteMessages
channel: InputChannel
id: <список id сообщений через запятую>
```

## Stats
## stats.getMegagroupStats
```yaml 
method: stats.getMegagroupStats
channel: InputChannel
dark: true
```
* channel: [InputChannel](/docs/_test/userbot/inputchannel)
## stats.getBroadcastStats
```yaml 
method: stats.getBroadcastStats
channel: InputChannel
dark: true
```
* channel: [InputChannel](/docs/_test/userbot/inputchannel)
## stats.loadAsyncGraph
```yaml 
method: stats.loadAsyncGraph
token: "abc...xyz"
x: 0.5
```







[🏠Главная](/docs/_test/userbot)


  

