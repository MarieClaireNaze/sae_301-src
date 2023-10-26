/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5t7blwj78yave1k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pynbfnfp",
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
  const collection = dao.findCollectionByNameOrId("5t7blwj78yave1k")

  // remove
  collection.schema.removeField("pynbfnfp")

  return dao.saveCollection(collection)
})
