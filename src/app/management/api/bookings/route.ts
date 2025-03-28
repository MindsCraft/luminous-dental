import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'bookings.db');
const db = new sqlite3.Database(dbPath);

export async function GET() {
  const bookings = await new Promise<any[]>((resolve, reject) => {
    db.all('SELECT b.*, c.name as client_name, s.name as staff_name FROM bookings b LEFT JOIN clients c ON b.client_id = c.id LEFT JOIN staff s ON b.staff_id = s.id', [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });

  const events = bookings.map((booking) => ({
    title: \`Appointment with \${booking.client_name || booking.name}\`,
    start: \`\${booking.date}T\${booking.time}\`,
    end: \`\${booking.date}T\${new Date(new Date(\`\${booking.date}T\${booking.time}\`).getTime() + 60 * 60 * 1000).toISOString().slice(11, 19)}\`,
    extendedProps: { staff: booking.staff_name, room: booking.room, status: booking.status },
  }));

  return NextResponse.json(events);
}
