install:
	bin/composer install

start:
	php -S localhost:8080

test:
	# cd tst && ../vendor/bin/phpunit
	./vendor/bin/phpunit tst

lint:
	find ./lib -type f -name '*.php'
	./vendor/bin/phpcs --standard=PSR12 --extensions=php ./lib/
	./vendor/bin/phpmd ./lib ansi codesize,unusedcode,naming
