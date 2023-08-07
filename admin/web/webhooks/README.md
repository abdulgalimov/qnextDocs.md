# Webhook

**Webhook** — механизм оповещения системы (бота в нашем случае) о событиях. С его помощью можно создать ссылку бота, 
которую может выполнить любой внешний ресурс.

В тригере вебхука есть параметр: 
```plain
${request...}
```

Который содержит в себе тип запроса (GET/POST), переданные параметры (query, body) и заголовки (headers). 
В тригере также можно ответить на запрос, с помощью реакции 
 ⚡️[webhookResponse](/docs/admin/web/webhookresponse)

::: details Подробнее
 
```plain
    "request": {
      "url": "/bin/webhooks/12345/123/VmnLVY813dwytJ3R",
      "method": "GET",
      "body": {},
      "query": {},
      "headers": {
        "host": "qnext.app",
        "x-forwarded-for": "46.148.235.145",
        "x-forwarded-proto": "https",
        "x-forwarded-port": "443",
        "connection": "close",
        "content-type": "application/json",
        "qnextbotid": "5622",
        "accept": "*/*",
        "user-agent": "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)",
        "accept-encoding": "gzip,deflate"
      }
```
:::

