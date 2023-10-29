migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("njs4a2bfgtjasan")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_svzFFKf` ON `likes` (\n  `post`,\n  `user`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("njs4a2bfgtjasan")

  collection.indexes = []

  return dao.saveCollection(collection)
})
