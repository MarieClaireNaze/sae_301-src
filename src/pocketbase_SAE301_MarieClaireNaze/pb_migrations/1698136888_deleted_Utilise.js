/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wqfefd8ifowofml");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "wqfefd8ifowofml",
    "created": "2023-10-24 07:47:40.829Z",
    "updated": "2023-10-24 07:47:40.829Z",
    "name": "Utilise",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ogr2hann",
        "name": "id_cadre",
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
        "id": "ivayav63",
        "name": "id_verre",
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
      },
      {
        "system": false,
        "id": "wodzdhfb",
        "name": "id_materiel",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "kybm2ol8e302524",
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
})
