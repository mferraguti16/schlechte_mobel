# express framework minimalist de NODE.js

## => Simplifier le routage et les réponses du server

## On importe le module Express

const express = require('express')

## express() crée une application Express

## const app = express() : On crée une instance de l'application Express

const app = express()

## On définit une route pour gérer les requêtes HTTP GET sur le chemin (route) racine ('/')

app.get("/",

## Fonction de rappel (callback) qui prend deux paramètres, request et response

## On écoute la request => (smtg.get)

## Et ce qu'on renvoie au client => (response.smtg)

    function (requete, reponse) {

## On envoie une réponse avec le message 'Bienvenue sur le site Schlechte Mobel!' au client

        response.send('Bienvenue sur le site Schlechte Mobel!')
    }
)

## On définit une route pour gérer les requêtes POST sur le chemin ('/userRegistration')

## (request, response) : Fonction de rappel (callback) pour gérer la requête et la réponse

app.post("/userRegistration", (request, response) => {

## response.sendStatus(200) : On envoie un statut HTTP 200 (OK) au client pour indiquer que la requête a été traitée avec succès

    response.sendStatus(200);

## response.end() : On termine la réponse

    response.end();
})

## app.listen() démarre le serveur sur le port 9090 et affiche un message lorsque le serveur est opérationnel

## app.listen(9090) : On démarre le serveur et on l'écoute sur le port 9090

## Fonction de rappel qui affiche un message lorsque le serveur est opérationnel

app.listen(9090, function() {
    console.log('Mon serveur écoute sur le port 9090')
})

## Champs obligatoire pour la DB

FK = Foreign Key
La liste complète de tous les champs de données obligatoires pour la DB par Table:

***Data dynamique***

- **users**
  - name
  - surname
  - email
  - password
- **furnitures**
  - category : FK category_id
  - material : FK material_id
  - condition : FK condition_id
  - color_main : FK color_id
  - dimensions
  - price

***Data figée***

- **categories**
  - name
- **conditions**
  - name
- **materials**
  - name
- **roles**
  - name

## Functionnal queries

Filepath: [queries.js](./queries.js);
More docs: [Docs](http://localhost:9090)

**getFurnituresByCategory(categoryId, maxNumberResponse = 10)**  
Fait la requête au server, return un array d'objets Meuble avec comme catégorie l'id fournie

**getFurnitureById(id)**
Requête pour chopper 1 seul meuble

**getAllFurnitures(startingId, maxNumberResponse = 10)**
Requête DB pour récupérer tous les meubles, *limit* en query params

**getFurnituresByColor(colorId, maxNumberResponse = 10)**
Cherche la colorId dans les couleurs principales ou secondaires, *limit* en query params

**getFurnituresByCondition(conditionId, maxNumberResponse = 10)**
Requête DB basée sur la condition du meuble par ID, *limit* en query params

**getFurnituresByPrice(minPrice = 1, maxPrice = 5000, maxNumberResponse = 10)**
Requête DB avec un range de prix. 3 query params *min*, *max* et *limit*

**getFurnituresByCondition(conditionId, maxNumberResponse = 10)**
Requête DB basée sur la condition du meuble par ID, *limit* en query params

**getFurnituresByPrice(minPrice = 1, maxPrice = 5000, maxNumberResponse = 10)**
Requête DB avec un range de prix. 3 query params *min*, *max* et *limit*

state_id SERIAL ( => auto-implémentation)
double quote = PG nom de colonne, simple quote string

ALTER = modifie table
