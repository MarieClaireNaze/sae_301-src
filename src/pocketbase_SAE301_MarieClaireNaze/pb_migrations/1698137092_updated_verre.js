/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4m0h261q7rv5hqo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wz0yze4n",
    "name": "libelle",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxb20rus",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d2nbn1nf",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4m0h261q7rv5hqo")

  // remove
  collection.schema.removeField("wz0yze4n")

  // remove
  collection.schema.removeField("rxb20rus")

  // remove
  collection.schema.removeField("d2nbn1nf")

  return dao.saveCollection(collection)
})
