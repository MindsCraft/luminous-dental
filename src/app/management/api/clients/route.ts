import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'bookings.db');
const db = new sqlite3.Database(dbPath);

db.run(\`CREATE TABLE IF NOT EXISTS clients (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  medical_history TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)\`);

export async function GET() {
  try {
    const clients = await new Promise<any[]>((resolve, reject) => {
      db.all('SELECT * FROM clients', [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
    return NextResponse.json(clients);
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error fetching clients' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, medical_history } = await request.json();
    await new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO clients (name, email, phone, medical_history) VALUES (?, ?, ?, ?)',
        [name, email, phone, medical_history],
        (err) => (err ? reject(err) : resolve(null))
      );
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error adding client' }, { status: 500 });
  }
}
