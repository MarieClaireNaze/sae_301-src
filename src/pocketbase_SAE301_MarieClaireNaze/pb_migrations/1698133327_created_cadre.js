/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5t7blwj78yave1k",
    "created": "2023-10-24 07:42:07.230Z",
    "updated": "2023-10-24 07:42:07.230Z",
    "name": "cadre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p7dl0ggg",
        "name": "couleur",
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
  const collection = dao.findCollectionByNameOrId("5t7blwj78yave1k");

  return dao.deleteCollection(collection);
})
