/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4m0h261q7rv5hqo",
    "created": "2023-10-24 07:42:45.191Z",
    "updated": "2023-10-24 07:42:45.191Z",
    "name": "verre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hg0rglpt",
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
  const collection = dao.findCollectionByNameOrId("4m0h261q7rv5hqo");

  return dao.deleteCollection(collection);
})
