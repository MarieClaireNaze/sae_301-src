/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kybm2ol8e302524",
    "created": "2023-10-24 07:43:11.154Z",
    "updated": "2023-10-24 07:43:11.154Z",
    "name": "Materiaux",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z58pde7x",
        "name": "libelle_materiel",
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
  const collection = dao.findCollectionByNameOrId("kybm2ol8e302524");

  return dao.deleteCollection(collection);
})
