/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "88hlhrsq0e2kamd",
    "created": "2023-10-24 08:42:55.283Z",
    "updated": "2023-10-24 08:42:55.283Z",
    "name": "Compose",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2fv7d0yv",
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
      },
      {
        "system": false,
        "id": "aeu0mdyx",
        "name": "id_lunette",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "19tqwaonfprelo6",
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
  const collection = dao.findCollectionByNameOrId("88hlhrsq0e2kamd");

  return dao.deleteCollection(collection);
})
