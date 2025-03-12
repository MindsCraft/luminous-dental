const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(process.cwd(), 'bookings.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  // Add new columns one at a time
  db.run(`ALTER TABLE bookings ADD COLUMN client_id INTEGER`, (err) => {
    if (err && !err.message.includes('duplicate')) console.error('Error adding client_id:', err);
    else if (err) console.log('client_id already exists, skipping');
  });

  db.run(`ALTER TABLE bookings ADD COLUMN staff_id INTEGER`, (err) => {
    if (err && !err.message.includes('duplicate')) console.error('Error adding staff_id:', err);
    else if (err) console.log('staff_id already exists, skipping');
  });

  db.run(`ALTER TABLE bookings ADD COLUMN room TEXT`, (err) => {
    if (err && !err.message.includes('duplicate')) console.error('Error adding room:', err);
    else if (err) console.log('room already exists, skipping');
  });

  db.run(`ALTER TABLE bookings ADD COLUMN status TEXT DEFAULT 'pending'`, (err) => {
    if (err && !err.message.includes('duplicate')) console.error('Error adding status:', err);
    else if (err) console.log('status already exists, skipping');
  });

  // Note: Foreign keys cannot be added with ALTER TABLE in SQLite
  console.log('Database schema updated successfully. Foreign keys not added due to SQLite limitations.');
});

db.close();
