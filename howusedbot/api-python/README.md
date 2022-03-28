## @HowUsedBot - API.Python

[⬅️ @HowUsedBot - API](/docs-test/howusedbot/api)



Пример запроса в @HowUsedBot api с помощью python. Для начала вы должны установить библиотеку `requests`:
```js 
pip3 install requests
```

Далее при поступлении любого `update` от telegram api(по longpoll или webhook) вы должны выполнить следующий запрос:
```js 
import requests

api_url = "https://qnext.app/bin/webhooks/6438/181/4opQGmB6OlHqqPRM"
bot_id = "Ваш Bot Id"
api_token = "Ваш Api Token"


def send_event(user_id, event_name):
    data = {
        "botId": bot_id,
        "apiToken": api_token,
        "requestType": "event",
        "userId": user_id,
        "event": event_name
    }

    result = requests.post(api_url, data)
    print(result.text)


send_event(you_user_id, "common")
```

⚠️Не забудьте заменить:
* bot_id
* api_token
* you_user_id



[⬅️ @HowUsedBot - API](/docs-test/howusedbot/api)
  

