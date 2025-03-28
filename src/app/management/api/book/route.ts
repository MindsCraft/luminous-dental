import { NextRequest, NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'bookings.db');
const db = new sqlite3.Database(dbPath);

// Initialize other tables
db.run(\`CREATE TABLE IF NOT EXISTS clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  medical_history TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)\`);

db.run(\`CREATE TABLE IF NOT EXISTS staff (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL,
  availability TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)\`);

// Ensure bookings table exists with all columns
db.run(\`CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  client_id INTEGER,
  staff_id INTEGER,
  room TEXT,
  status TEXT DEFAULT 'pending'
)\`, (err) => {
  if (err) {
    console.log('Bookings table exists, checking columns...');
    // Handle column additions if needed (as in migrate.js)
  }
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, date, time, client_id, staff_id, room } = await request.json();

    if (!name || !email || !date || !time) {
      return NextResponse.json({ success: false, message: 'All required fields are needed' }, { status: 400 });
    }

    let newClientId = client_id;
    if (!newClientId) {
      const clientResult = await new Promise((resolve, reject) => {
        db.run(
          'INSERT INTO clients (name, email) VALUES (?, ?)',
          [name, email],
          function (err) {
            if (err) reject(err);
            else resolve(this.lastID);
          }
        );
      });
      newClientId = clientResult;
    }

    const existing = await new Promise((resolve) => {
      db.get('SELECT * FROM bookings WHERE date = ? AND time = ?', [date, time], (err, row) => {
        if (err) resolve(null);
        else resolve(row);
      });
    });

    if (existing) {
      return NextResponse.json({ success: false, message: 'This time slot is already booked' });
    }

    await new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO bookings (name, email, date, time, client_id, staff_id, room) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, email, date, time, newClientId, staff_id || null, room || null],
        (err) => (err ? reject(err) : resolve(null))
      );
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in POST /api/book:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
