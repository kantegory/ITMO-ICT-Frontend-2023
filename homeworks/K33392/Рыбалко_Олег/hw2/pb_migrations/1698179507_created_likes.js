migrate((db) => {
  const collection = new Collection({
    "id": "njs4a2bfgtjasan",
    "created": "2023-10-24 20:31:47.059Z",
    "updated": "2023-10-24 20:31:47.059Z",
    "name": "likes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "avglxwf5",
        "name": "post",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "bys1elwhmpq7lct",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "cr13hts6",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("njs4a2bfgtjasan");

  return dao.deleteCollection(collection);
})
