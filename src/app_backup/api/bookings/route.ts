import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

export async function GET() {
  const dbPath = path.resolve(process.cwd(), 'bookings.db');
  const db = new sqlite3.Database(dbPath);

  const bookings = await new Promise<any[]>((resolve, reject) => {
    db.all(`
      SELECT b.*, c.name AS client_name, s.name AS staff_name
      FROM bookings b
      LEFT JOIN clients c ON b.client_id = c.id
      LEFT JOIN staff s ON b.staff_id = s.id
    `, [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });

  db.close();

  const events = bookings.map((booking) => ({
    id: booking.id,
    title: `Appointment with ${booking.client_name || booking.name} (${booking.staff_name || 'Unassigned'})`,
    start: `${booking.date}T${booking.time}`,
    end: `${booking.date}T${new Date(new Date(`${booking.date}T${booking.time}`).getTime() + 60*60*1000).toISOString().slice(11, 19)}`,
    extendedProps: {
      clientEmail: booking.email,
      room: booking.room,
      status: booking.status,
    },
  }));

  return NextResponse.json(events);
}
