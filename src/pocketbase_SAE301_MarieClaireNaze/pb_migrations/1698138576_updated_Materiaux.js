/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kybm2ol8e302524")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "imojj6fw",
    "name": "prix",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kybm2ol8e302524")

  // remove
  collection.schema.removeField("imojj6fw")

  return dao.saveCollection(collection)
})
