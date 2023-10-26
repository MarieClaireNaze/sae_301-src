/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cbdksavmri0r0rr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "emsx55qw",
    "name": "mot_de_passe",
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
  collection.schema.removeField("emsx55qw")

  return dao.saveCollection(collection)
})
