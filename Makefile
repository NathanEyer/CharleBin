
lint:
	find ./lib -type f -name '*.php'
        ./vendor/bin/phpcs --standard=PSR12 --extensions=php ./lib/
        ./vendor/bin/phpmd ./lib ansi codesize,unusedcode,naming

