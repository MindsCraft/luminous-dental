import { NextRequest, NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

export async function POST(request: NextRequest) {
  const dbPath = path.resolve(process.cwd(), 'bookings.db');
  const db = new sqlite3.Database(dbPath);

  // Create table if it doesn't exist
  await new Promise<void>((resolve, reject) => {
    db.run(`CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      date TEXT NOT NULL,
      time TEXT NOT NULL
    )`, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

  const { name, email, date, time } = await request.json();

  if (!name || !email || !date || !time) {
    db.close();
    return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
  }

  // Check for slot conflict
  const existing = await new Promise((resolve) => {
    db.get('SELECT * FROM bookings WHERE date = ? AND time = ?', [date, time], (err, row) => {
      if (err) resolve(null);
      else resolve(row);
    });
  });

  if (existing) {
    db.close();
    return NextResponse.json({ success: false, message: 'This time slot is already booked' });
  }

  // Insert new booking
  await new Promise((resolve, reject) => {
    db.run('INSERT INTO bookings (name, email, date, time) VALUES (?, ?, ?, ?)',
      [name, email, date, time],
      function(err) {
        if (err) reject(err);
        else resolve(this.lastID);
      }
    );
  });

  db.close();
  return NextResponse.json({ success: true });
}
