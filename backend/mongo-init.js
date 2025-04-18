// mongo-init.js

db = db.getSiblingDB("cluster0"); // switch to cluster0 database

db.createUser({
  user: "pranit",
  pwd: "pranit99",
  roles: [
    {
      role: "readWrite",
      db: "cluster0",
    },
  ],
});

db.createCollection("test");
