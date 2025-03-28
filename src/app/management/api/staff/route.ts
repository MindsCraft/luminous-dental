import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'bookings.db');
const db = new sqlite3.Database(dbPath);

db.run(\`CREATE TABLE IF NOT EXISTS staff (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL,
  availability TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)\`);

export async function GET() {
  try {
    const staff = await new Promise<any[]>((resolve, reject) => {
      db.all('SELECT * FROM staff', [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    return NextResponse.json(staff);
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error fetching staff' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, role, availability } = await request.json();
    await new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO staff (name, email, role, availability) VALUES (?, ?, ?, ?)',
        [name, email, role, JSON.stringify(availability)],
        (err) => (err ? reject(err) : resolve(null))
      );
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error adding staff' }, { status: 500 });
  }
}
