# !{attachment|...}

Макрос `!{attachment}` позволит вам прикрепить медиа-ресурсы к реакциям ⚡️sendMessage и ⚡️sendMenu. Макрос можно записать тремя разными способами, используя параметры fileId, path, или url

## fileId
```plain 
!{attachment|
  fileId: Путь до id ресурса;
  type: Тип ресурса;
}
```
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


## path

Это сокращенный вариант предыдущей записи:
```plain 
!{attachment| path: Путь до файла}
```

Параметр path, должен ссылаться на **Объект**, которые содержит в себе описанные выше два поля: **fileId** и **type**.


## url

С помощью следующей записи можно прикрепить невидимую ссылку в виде превью:
```plain 
!{attachment|
  url: http ссылка;
  type: link;
}
```

Обратите внимание, параметр type должен иметь значение link, в будущем возможно будут и другие варианты. 


