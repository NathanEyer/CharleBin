**TD3 Question 1:**

J’ai installé et testé trois linters : PHP Lint, PHP CodeSniffer (PHPCS) et PHP Mess Detector (PHPMD).

- Installation de PHP CodeSniffer :  
  **"composer require \--dev 'squizlabs/php\_codesniffer=3.\*'"**  
- Vérification de l’installation de PHPCS :  
  **"./vendor/bin/phpcs \--version"**

\=\> PHP\_CodeSniffer version 3.11.3

- Installation de PHP Mess Detector :  
  **"composer require \--dev 'phpmd/phpmd=@stable'"**  
- Vérification de l’installation de PHPMD :  
  **"./vendor/bin/phpmd \--version"**

\=\> PHPMD 2.15.0

- Test de PHP Lint sur tous les fichiers PHP :  
  **"php \-l $(find . \-type f \-name '\*.php')"**  
- Test de PHPCS sur le projet :  
  **"./vendor/bin/phpcs \--extensions=php ./lib/"**  
- Test de PHPMD avec les règles de code :  
  **"./vendor/bin/phpmd ./lib ansi codesize,unusedcode,naming"**

\=\> Found 73 violations and 0 errors in 632ms

- PHP CodeSniffer (PHPCS) :  
  Standard PSR-12, indentations de 4 espaces, longueur des lignes à 120 caractères.  
  Commande : **"./vendor/bin/phpcs \--standard=PSR12 \--extensions=php ./lib/"**  
- PHP Mess Detector (PHPMD) :  
  Règles codesize, unusedcode, naming pour vérifier la complexité, le code inutilisé et le respect des conventions de nommage.  
  Commande : **"./vendor/bin/phpmd ./lib ansi codesize,unusedcode,naming"**  
- PHP Lint :  
  Test de la syntaxe de tous les fichiers PHP :  
  Commande : **"php \-l $(find . \-type f \-name '\*.php')"**

Ajout de la cible dans le Makefile :

J’ai ajouté une nouvelle cible lint dans le Makefile pour lancer les trois linters simultanément :

lint:

        find ./lib \-type f \-name '\*.php'

        ./vendor/bin/phpcs \--standard=PSR12 \--extensions=php ./lib/

        ./vendor/bin/phpmd ./lib ansi codesize,unusedcode,naming

Et ensuite j’ai exécuté “make lint”. 

Enfin, j’ai corrigé plus de 5 erreurs remontées par les linters, concernant notamment la longueur des lignes, les commentaires manquants et des méthodes trop complexes.

**Question 2:**

j'ai installé un **pre-commit hook** afin d'effectuer automatiquement certaines actions avant chaque commit. Voici les étapes que j'ai suivies :

1. **Installation de PHP CS Fixer et PHP Mess Detector** : Comme pour l'exercice précédent, j'ai utilisé Composer pour installer PHP CS Fixer et PHP Mess Detector en mode développement dans le projet.  
   * Installation de PHP CS Fixer : "composer require \--dev 'friendsofphp/php-cs-fixer'"  
   * Installation de PHP Mess Detector : "composer require \--dev 'phpmd/phpmd=@stable'"  
2. **Configuration du pre-commit hook** : J'ai ajouté un script de pre-commit dans le répertoire `.git/hooks`. Ce script s'exécute automatiquement avant chaque commit pour :  
   * Utiliser PHP CS Fixer ou Prettier pour corriger automatiquement le code.  
   * Ajouter les fichiers corrigés au staging area.  
   * Utiliser PHP Mess Detector pour empêcher un commit si des violations sont détectées.  
3. **Contenu du script pre-commit** : Le script que j'ai ajouté dans `.git/hooks/pre-commit` ressemble à ceci :  
   * Le script vérifie si des fichiers ont été modifiés.  
   * Si des fichiers ont été modifiés, il lance PHP CS Fixer pour corriger le code et ajoute les fichiers corrigés au staging area.  
   * Ensuite, il lance PHP Mess Detector sur ces fichiers. Si des violations sont trouvées, le commit est annulé et un message d'erreur est affiché.  
4. **Test du pre-commit hook** : Après avoir ajouté ce script, j'ai testé en effectuant un commit. Si PHP CS Fixer trouve des erreurs corrigibles, il les fixe et les ajoute au staging area. Si PHP Mess Detector détecte des violations, le commit est annulé.  
5. **Validation et commit des modifications** : Une fois le script vérifié, j'ai commité les modifications du script dans le projet pour que le pre-commit hook soit actif et qu'il soit utilisé par tous les contributeurs du projet.

### **Possibilité d'ignorer le pre-commit hook :**

Si je veux ignorer le pre-commit hook et forcer un commit sans que les linters s'exécutent, je peux utiliser l'option `--no-verify` de la commande `git commit`, comme ceci :

* "git commit \--no-verify"

Cela permet de contourner le pre-commit hook, mais ce n'est pas recommandé, car cela pourrait introduire des erreurs dans le code.

**Question 3:**

j'ai configuré une action GitHub afin d'intégrer les linters dans le processus d'intégration continue et de protéger la branche `main`. Voici les étapes que j'ai suivies :

1. **Création d'une action GitHub pour le linting** : J'ai ajouté une action GitHub pour exécuter les linters automatiquement sur chaque pull request. Cette action empêche le merge si des erreurs de lint sont trouvées. J'ai créé un fichier `.github/workflows/lint.yml` dans le projet avec les paramètres suivants :  
   * L'action s'exécute à chaque pull request sur la branche `main`.  
   * Elle vérifie le code, installe PHP, puis exécute les linters (PHP Lint, PHP CodeSniffer et PHP Mess Detector).  
   * Si des erreurs sont détectées, l'action échoue et empêche le merge de la pull request.  
2. **Protéger la branche `main`** : J'ai configuré les paramètres de protection de la branche `main` dans les paramètres du projet GitHub. Cela empêche quiconque de pousser directement sur `main` sans passer par une pull request, garantissant ainsi que l'action de linting s'exécute à chaque modification.  
3. **Test de l'intégration** : J'ai créé une pull request avec des erreurs de lint pour tester si l'action empêchait bien le merge. Lorsque des erreurs ont été détectées, l'action a échoué et le merge a été bloqué jusqu'à ce que les erreurs soient corrigées.

Ainsi, l'intégration continue assure que le code respecte les règles de qualité avant d'être fusionné dans la branche principale, évitant ainsi des erreurs potentielles.

