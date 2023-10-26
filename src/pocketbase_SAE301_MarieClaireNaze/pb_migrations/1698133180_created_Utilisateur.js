/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cbdksavmri0r0rr",
    "created": "2023-10-24 07:39:40.588Z",
    "updated": "2023-10-24 07:39:40.588Z",
    "name": "Utilisateur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7nilni3o",
        "name": "Nom",
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
        "id": "butiqgm6",
        "name": "Prenom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("cbdksavmri0r0rr");

  return dao.deleteCollection(collection);
})
