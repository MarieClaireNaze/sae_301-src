/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("88hlhrsq0e2kamd")

  // remove
  collection.schema.removeField("2fv7d0yv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p0gbn8lr",
    "name": "id_user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("88hlhrsq0e2kamd")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("p0gbn8lr")

  return dao.saveCollection(collection)
})
