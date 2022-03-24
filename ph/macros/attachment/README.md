---
sidebar: auto
---

## QNext. Макрос attachment

Макрос !{attachment} позволит вам прикрепить меди ресурсы к реакциям ⚡️sendMessage и ⚡️sendMenu. Макрос можно записать тремя разными способами, используя параметры fileId, path, или url
### fileId
::: tip
!{attachment|<br>  fileId: Путь до id ресурса;<br>  type: Тип ресурса;<br>}<br>
:::
* fileId - id файла, длинная строка, которую присылает телеграм при отправке медиа ресурса
* type - тип медиа ресурса.

Параметр **type** может принимать одно из следующих значений:
* photo
* audio
* video
* video_note
* animation
* document
* voice
* sticker


### path

Это сокращенный вариант предыдущей записи:
::: tip
!{attachment| path: Путь до файла}<br>
:::

Параметр path, должен ссылаться на **Объект**, которые содержит в себе описанные выше два поля: **fileId** и **type**.


### url

С помощью следующей записи можно прикрепить невидимую ссылку в виде превью:
::: tip
!{attachment|<br>  url: http ссылка;<br>  type: link;<br>}<br>
:::

Обратите внимание, параметр type должен иметь значение link, в будущем возможно будут и другие варианты. 





[⬅️QNext. Макросы](/docs-test/ph/macros)

 

[Original](https://telegra.ph/QNext-Macros-attachment-10-16)