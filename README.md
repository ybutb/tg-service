A simple REST API service for Telegram bots control.

1. Run `make docker-build`.
2. Run `make start`.

Has the following endpoints:

1. POST `https://tg-service.com:8081/meme`

Header X-AUTH-KEY with the app key should be sent to authenticate and process the request.