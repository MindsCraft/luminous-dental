const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(process.cwd(), 'bookings.db');
const backupPath = path.resolve(process.cwd(), 'bookings_backup.db');
fs.copyFileSync(dbPath, backupPath); // Backup before proceeding

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  // Create a temporary table with new schema
  db.run(`CREATE TABLE bookings_temp (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    client_id INTEGER,
    staff_id INTEGER,
    room TEXT,
    status TEXT DEFAULT 'pending',
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (staff_id) REFERENCES staff(id)
  )`);

  // Copy existing data
  db.run(`INSERT INTO bookings_temp (id, name, email, date, time)
          SELECT id, name, email, date, time FROM bookings`);

  // Drop the old table
  db.run(`DROP TABLE bookings`);

  // Rename the new table
  db.run(`ALTER TABLE bookings_temp RENAME TO bookings`);

  console.log('Bookings table recreated with foreign keys.');
});

db.close();
