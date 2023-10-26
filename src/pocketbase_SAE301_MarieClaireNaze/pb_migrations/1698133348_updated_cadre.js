/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5t7blwj78yave1k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4eg5od79",
    "name": "type",
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
  const collection = dao.findCollectionByNameOrId("5t7blwj78yave1k")

  // remove
  collection.schema.removeField("4eg5od79")

  return dao.saveCollection(collection)
})
