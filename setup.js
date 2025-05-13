const sqlite3 = require('sqlite3').verbose();

// Create and set up the database
const db = new sqlite3.Database('./db/database.sqlite');

// Create a results table
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS results (id INTEGER PRIMARY KEY AUTOINCREMENT, runner_id TEXT, finish_time TEXT)");
  console.log("Database setup complete.");
  db.close();
});
