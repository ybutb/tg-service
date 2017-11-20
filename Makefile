DOCKER_REGISTRY=tg-service.com

docker-build:
	@docker build -t $(DOCKER_REGISTRY) .

install:
	@docker-compose up install

update:
	@docker-compose up update

test: update
	@docker-compose up test

start:
	@docker-compose up web

stop:
	@docker stop $(DOCKER_REGISTRY)

restart: stop start

ssh:
	@docker exec -it $(DOCKER_REGISTRY) sh