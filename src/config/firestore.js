const { Firestore } = require('@google-cloud/firestore');

const { env } = process;

const db = new Firestore({
  projectId: env.PROJECT_ID,
  databaseId: '(default)',
});

module.exports = db;
