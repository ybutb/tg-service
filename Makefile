DOCKER_REGISTRY=tg-service

docker-build:
	@docker build -t $(DOCKER_REGISTRY) .

install:
	@docker-compose up install

update:
	@docker-compose up update

test: update
	@docker-compose up test

start:
	@docker run -it --rm -P \
 		-v $(shell pwd):/usr/src/app -w /usr/src/app $(DOCKER_REGISTRY) \
 		npm run run

ssh:
	@docker exec -it $(DOCKER_REGISTRY) sh