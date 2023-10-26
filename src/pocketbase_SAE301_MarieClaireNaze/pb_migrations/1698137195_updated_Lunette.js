/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("19tqwaonfprelo6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqwd1dz8",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("19tqwaonfprelo6")

  // remove
  collection.schema.removeField("qqwd1dz8")

  return dao.saveCollection(collection)
})
