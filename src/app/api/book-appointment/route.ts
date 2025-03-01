// src/app/api/book-appointment/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();  // Get the form data sent from the frontend
    // For simplicity, we're logging it. Later, we can store it in a DB.
    console.log('Appointment Data:', data);

    // Simulate saving to a database (use a real database in production)
    // Save data in a JSON file, or directly in a real database.

    return NextResponse.json({ message: 'Appointment successfully booked!' }, { status: 200 });
  } catch (error) {
    console.error('Error booking appointment:', error);
    return NextResponse.json({ error: 'Failed to book appointment' }, { status: 500 });
  }
}
