/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cbdksavmri0r0rr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i7kkndm3",
    "name": "mail",
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
  const collection = dao.findCollectionByNameOrId("cbdksavmri0r0rr")

  // remove
  collection.schema.removeField("i7kkndm3")

  return dao.saveCollection(collection)
})
