/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "19tqwaonfprelo6",
    "created": "2023-10-24 07:44:06.389Z",
    "updated": "2023-10-24 07:44:06.389Z",
    "name": "Lunette",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ghvkec89",
        "name": "cadre",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "5t7blwj78yave1k",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "2c2ivest",
        "name": "verre",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "4m0h261q7rv5hqo",
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
  const collection = dao.findCollectionByNameOrId("19tqwaonfprelo6");

  return dao.deleteCollection(collection);
})
