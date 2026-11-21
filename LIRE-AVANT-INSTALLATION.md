# TVB CI AUTO — Corrections SEO ciblées (21 novembre 2026)

## Ce qui a été vérifié dans le ZIP GitHub
- robots.txt autorise l'exploration et indique un sitemap valide.
- sitemap.xml contient 41 URL : la page d'accueil et 40 fiches véhicules. Les 40 fichiers HTML correspondants existent à la racine.
- 32 liens de la page d'accueil pointaient vers une version sans .html, tandis que le sitemap et les URL canoniques utilisent .html.
- La page d'accueil avait deux meta descriptions et aucune balise canonical.
- La canonical de kia-sportage-2021.html avait une majuscule différente du vrai nom du fichier.
- 4 références d'images étaient incorrectes ou manquantes dans les pages Sportage.
- Deux fiches Jetour différentes partageaient le même titre HTML.
- Le script commun pouvait générer une erreur sur les pages sans élément #year.

## Fichiers corrigés à transférer dans GitHub (à la racine)
1. index.html — canonical, description unique, 32 liens véhicules avec .html
2. kia-sportage-2021.html — canonical corrigée, trois miniatures inexistantes retirées
3. kia-sportage-2022.html — chemin de la photo principale corrigé
4. jetour-x70-plus-2026-import.html — titre distinct pour l'offre import
5. script.js — contrôle de présence de #year

Les autres fichiers, images, robots.txt et sitemap.xml ne doivent pas être supprimés ou remplacés. Ne transférez pas ce fichier README si vous ne le souhaitez pas.

## Important avant déploiement
- Vérifiez que le ZIP source correspond à la dernière version du dépôt GitHub. Si vous avez modifié des annonces depuis son téléchargement, réconciliez les changements avant remplacement.
- Vérifiez la disponibilité des annonces, notamment Kia Sportage 2021 et Nissan Rogue Sport 2021 : elles figurent dans le sitemap mais pas dans les liens du catalogue. Ne les remettez pas en vente sans vérification.
- Vérifiez que https://auto.tvbci.com/ et https://auto.tvbci.com/sitemap.xml renvoient bien HTTP 200, et que les pages de véhicules sont accessibles.
- Dans Google Search Console, inspectez d'abord la page d'accueil et le sitemap, puis demandez une nouvelle indexation après déploiement.
- La correction des fichiers n'assure pas l'indexation par Google ; le problème de traitement temporaire du sitemap observé dans Search Console doit être contrôlé en ligne.
- Cette analyse est fondée sur le ZIP fourni. La réponse HTTP du site en ligne n'a pas pu être vérifiée depuis cet environnement.
