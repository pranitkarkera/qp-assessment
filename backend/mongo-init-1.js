// mongo-init.js
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

db = db.getSiblingDB("cluster0");

db.createCollection("test");
