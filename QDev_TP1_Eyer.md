**Question 1:**  
J’ai commencé par exécuter la commande git clone git@github.com:floo51/PrivateBin.git. Ensuite, j’ai essayé d’exécuter make install puis make start, mais cela n’a pas fonctionné immédiatement. J’ai donc dû installer le paquet php8.3-xml sous Linux. Une fois ce paquet installé, j’ai exécuté la commande composer update. Après cela, j’ai pu utiliser les commandes make install et make start sans problème.  
Observation des modifications détectées par Git :  
En exécutant la commande git status, aucune modification n’a été détectée. Cela signifie que les fichiers générés ou modifiés par le fonctionnement de PrivateBin sont probablement exclus via le fichier .gitignore.  
Solution pour ignorer des fichiers spécifiques :  
Si je souhaite ne pas suivre certains fichiers ou dossiers, je peux les ajouter dans le fichier .gitignore. Par exemple, je pourrais ignorer les dossiers contenant des données sensibles ou des fichiers de logs.

**Question 2:**  
J’ai commencé par créer une nouvelle branche avec git branch exo2, puis je me suis positionné dessus.  
J’ai modifié le fichier lib/Configuration.php avec l’éditeur nano, ajoutant "30 minutes" dans la liste déroulante.  
J’ai utilisé la commande git restore pour ne pas prendre en compte les modifications dans le fichier composer.lock. Ensuite, j’ai utilisé la commande git add \-p pour choisir quelles modifications ajouter :  
J’ai validé la première modification en entrant y.  
J’ai ignoré la deuxième modification en entrant q.  
Avant de valider les modifications, j’ai effectué plusieurs vérifications :

- git show pour voir les détails du dernier commit.  
- git diff pour voir les modifications non ajoutées.  
- git diff \--staged pour voir les modifications déjà ajoutées.

Enfin, j’ai validé la première modification avec un commit clair, mentionnant l’ajout de "30 minutes" dans la liste déroulante.

