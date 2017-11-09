A simple REST API for Telegram bots control.

1. Run `make docker-build`
2. Run `make start`

Has the following endpoints:

1. POST `http://tg-service.com:5858/meme`
1. GET  `http://tg-service.com:5858/getMe`

Header X-AUTH-KEY with the app key should be sent to authenticate and process the request.