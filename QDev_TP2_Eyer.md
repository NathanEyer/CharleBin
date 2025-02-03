**Question 1:**

- Création du repository GitHub  
- Ajout d’une clé SSH  
- git remote \- pour voir tous les remotes (origin ici)  
- git remote set-url origin [git@github.com](mailto:git@github.com):NathanEyer/CharleBin.git  
- git  push origin main

**Question 2:**

- Changement du name sur GitHub, puis commit dans origin/main

Le changement n’est pas présent dans le repository local, mais un simple git pull permet de récupérer les modifications. 

**Question 3:**  
\- git status  
\- git switch main  
\- git switch \-C supprimer-footer  
J’ai ensuite supprimé le footer  
\- git add bootstrap.php  
\- git commit \-m "Suppression du footer"  
\- git push \-u origin supprimer-footer  
Ensuite, il m’a suffit de valider sur GitHub, sans merge à la fin. 

**Question 4:**  
À l’aide de Copilot, j’ai généré un Readme.md et un Contributing.md. Nous n’avons pas eu le temps de nous occuper des pr