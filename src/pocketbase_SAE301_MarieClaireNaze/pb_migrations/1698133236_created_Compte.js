/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7o1mzumkqifuc6m",
    "created": "2023-10-24 07:40:36.795Z",
    "updated": "2023-10-24 07:40:36.795Z",
    "name": "Compte",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tequsoje",
        "name": "email_utilisateur",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qwvnr9th",
        "name": "mot_de_passe",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gletk2z0",
        "name": "id_utilisateur",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "cbdksavmri0r0rr",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7o1mzumkqifuc6m");

  return dao.deleteCollection(collection);
})
