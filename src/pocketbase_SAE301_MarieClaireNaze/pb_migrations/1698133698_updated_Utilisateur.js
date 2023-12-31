/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cbdksavmri0r0rr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "75nvvrtl",
    "name": "Photo_de_profil",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cbdksavmri0r0rr")

  // remove
  collection.schema.removeField("75nvvrtl")

  return dao.saveCollection(collection)
})
