import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

export async function GET() {
  const dbPath = path.resolve(process.cwd(), 'bookings.db');
  const db = new sqlite3.Database(dbPath);

  const bookings = await new Promise<any[]>((resolve, reject) => {
    db.all('SELECT * FROM bookings', [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });

  db.close();

  const events = bookings.map((booking) => ({
    title: `Appointment with ${booking.name}`,
    start: `${booking.date}T${booking.time}`,
    end: `${booking.date}T${new Date(new Date(`${booking.date}T${booking.time}`).getTime() + 60*60*1000).toISOString().slice(11, 19)}`, // 1-hour duration
  }));

  return NextResponse.json(events);
}
