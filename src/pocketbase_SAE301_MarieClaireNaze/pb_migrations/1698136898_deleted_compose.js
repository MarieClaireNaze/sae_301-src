/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fnbhktrdz32iusi");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "fnbhktrdz32iusi",
    "created": "2023-10-24 07:46:37.562Z",
    "updated": "2023-10-24 07:46:37.562Z",
    "name": "compose",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "h2qd2isj",
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
        "id": "62qvoftr",
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
})
