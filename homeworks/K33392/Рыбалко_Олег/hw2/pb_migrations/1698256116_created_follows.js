migrate((db) => {
  const collection = new Collection({
    "id": "6enyzunop466glg",
    "created": "2023-10-25 17:48:36.639Z",
    "updated": "2023-10-25 17:48:36.639Z",
    "name": "follows",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gk5enwzx",
        "name": "follower",
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
      },
      {
        "system": false,
        "id": "jslncpmq",
        "name": "followee",
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
  const collection = dao.findCollectionByNameOrId("6enyzunop466glg");

  return dao.deleteCollection(collection);
})
