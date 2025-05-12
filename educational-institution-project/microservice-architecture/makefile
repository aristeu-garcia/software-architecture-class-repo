INSTITUTION_SERVICE=./institution-core-service
LOG_SERVICE=./logger-service

start-log:
	cd $(LOG_SERVICE) && yarn start

start-institution:
	cd $(INSTITUTION_SERVICE) && yarn start

start-ordered:
	cd $(LOG_SERVICE) && yarn start & \
	sleep 2 && \
	cd $(INSTITUTION_SERVICE) && yarn start

.PHONY: start-log start-institution start-ordered
