## @HowUsedBot - API.NodeJS

[⬅️ @HowUsedBot - API](/docs-test/howusedbot/api)



Пример запроса в @HowUsedBot api с помощью NodeJS. Для начала вы должны установить модуль `node-fetch`:
```js 
npm install node-fetch

```

Далее при поступлении любого `update` от telegram api(по longpoll или webhook) вы должны выполнить следующий метод:
```js 
const fetch = require('node-fetch')

const apiUrl = "https://qnext.app/bin/webhooks/6438/181/4opQGmB6OlHqqPRM";
const botId = "Ваш BotId"
const apiToken = "Ваш Api Token"

const extraParameters = ['registerTime', 'param_1', 'param_2', 'param_3'];
function sendEvent(userId, event, options=null) {
  const body = {
    botId,
    apiToken,
    requestType: 'event',
    userId,
    event,
  };
  if (options) extraParameters.map(key => {
    body[key] = options[key];
  })
  //
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'},
  };
  return fetch(apiUrl, fetchOptions)
    .then(res => res.json())
    .then(res => {
      console.log('result', res);
    });
}

sendEvent(yourUserId, 'common')

```



⚠️Не забудьте заменить:
* bot_id
* api_token
* you_user_id



[⬅️ @HowUsedBot - API](/docs-test/howusedbot/api)
  
[Original](https://telegra.ph/HowUsedBot-Api-Nodejs-03-10)