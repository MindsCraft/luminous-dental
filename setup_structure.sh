#!/bin/bash

# Create management folder and subdirectories inside src/app
mkdir -p src/app/management/{dashboard,clients,schedule,staff,components,api/{book,bookings,clients,staff}}

# Move existing pages into management folder, if they exist
[ -d "src/app/dashboard" ] && mv src/app/dashboard src/app/management/dashboard
[ -d "src/app/clients" ] && mv src/app/clients src/app/management/clients
[ -d "src/app/schedule" ] && mv src/app/schedule src/app/management/schedule
[ -d "src/app/staff" ] && mv src/app/staff src/app/management/staff

# Move ManagementLayout component, if it exists
[ -f "src/app/components/ManagementLayout.tsx" ] && mv src/app/components/ManagementLayout.tsx src/app/management/components/ManagementLayout.tsx

# Move API routes, if they exist
[ -d "src/app/api/book" ] && mv src/app/api/book src/app/management/api/book
[ -d "src/app/api/bookings" ] && mv src/app/api/bookings src/app/management/api/bookings
[ -d "src/app/api/clients" ] && mv src/app/api/clients src/app/management/api/clients
[ -d "src/app/api/staff" ] && mv src/app/api/staff src/app/management/api/staff

# Create files with initial content (overwrite existing files)
cat > src/app/management/dashboard/page.tsx << 'EOF'
import ManagementLayout from '@/app/management/components/ManagementLayout';

export default function DashboardPage() {
  return (
    <ManagementLayout>
      <div className="bg-aws-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-light text-aws-navy mb-4">Clinic Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-aws-lightGray rounded-lg">
            <h3 className="text-lg font-medium text-aws-darkGray">Today’s Appointments</h3>
            <p className="text-2xl text-aws-navy">5</p>
          </div>
          <div className="p-4 bg-aws-lightGray rounded-lg">
            <h3 className="text-lg font-medium text-aws-darkGray">New Clients</h3>
            <p className="text-2xl text-aws-navy">2</p>
          </div>
          <div className="p-4 bg-aws-lightGray rounded-lg">
            <h3 className="text-lg font-medium text-aws-darkGray">No-Shows</h3>
            <p className="text-2xl text-aws-navy">0</p>
          </div>
        </div>
      </div>
    </ManagementLayout>
  );
}
EOF

cat > src/app/management/clients/page.tsx << 'EOF'
"use client";

import { useEffect, useState } from "react";
import ManagementLayout from '@/app/management/components/ManagementLayout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('/api/clients')
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ManagementLayout>
      <div className="bg-aws-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-light text-aws-navy">Manage Clients</h2>
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Search clients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-aws-darkGray focus:border-aws-orange"
            />
            <Button className="bg-aws-orange text-aws-navy hover:bg-orange-600">Add Client</Button>
          </div>
        </div>
        <ul className="space-y-2">
          {filteredClients.map((client) => (
            <li key={client.id} className="p-4 bg-aws-lightGray rounded-lg flex justify-between items-center">
              <div>
                <p className="text-aws-navy font-medium">{client.name}</p>
                <p className="text-aws-darkGray text-sm">{client.email}</p>
              </div>
              <Button variant="outline" className="border-aws-orange text-aws-orange hover:bg-orange-100">
                Edit
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </ManagementLayout>
  );
}
EOF

cat > src/app/management/schedule/page.tsx << 'EOF'
"use client";

import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import ManagementLayout from '@/app/management/components/ManagementLayout';

export default function SchedulePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/bookings')
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <ManagementLayout>
      <div className="bg-aws-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-light text-aws-navy mb-4">Clinic Schedule</h2>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
          events={events}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          }}
          displayEventTime={true}
          displayEventEnd={false}
          editable={true}
          eventClick={(info) => alert(`Edit appointment for ${info.event.title}`)}
          eventColor="#FF9900"
          eventTextColor="#252F3E"
        />
      </div>
    </ManagementLayout>
  );
}
EOF

cat > src/app/management/staff/page.tsx << 'EOF'
"use client";

import { useEffect, useState } from "react";
import ManagementLayout from '@/app/management/components/ManagementLayout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function StaffPage() {
  const [staff, setStaff] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('/api/staff')
      .then((res) => res.json())
      .then((data) => setStaff(data));
  }, []);

  const filteredStaff = staff.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ManagementLayout>
      <div className="bg-aws-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-light text-aws-navy">Manage Staff</h2>
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Search staff..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-aws-darkGray focus:border-aws-orange"
            />
            <Button className="bg-aws-orange text-aws-navy hover:bg-orange-600">Add Staff</Button>
          </div>
        </div>
        <ul className="space-y-2">
          {filteredStaff.map((member) => (
            <li key={member.id} className="p-4 bg-aws-lightGray rounded-lg flex justify-between items-center">
              <div>
                <p className="text-aws-navy font-medium">{member.name}</p>
                <p className="text-aws-darkGray text-sm">{member.role}</p>
              </div>
              <Button variant="outline" className="border-aws-orange text-aws-orange hover:bg-orange-100">
                Edit
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </ManagementLayout>
  );
}
EOF

cat > src/app/management/components/ManagementLayout.tsx << 'EOF'
"use client";

import Link from "next/link";
import { useState } from "react";

export default function ManagementLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={\`min-h-screen \${isDarkMode ? 'bg-aws-darkModeBg text-aws-darkModeText' : 'bg-aws-lightGray text-aws-navy'}\`}>
      <header className={\`shadow \${isDarkMode ? 'bg-aws-darkModeBg' : 'bg-aws-navy'}\`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/management/dashboard">
            <h1 className={\`text-2xl font-light \${isDarkMode ? 'text-aws-darkModeText' : 'text-aws-white'}\`}>
              Luminous Dental Admin
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 rounded-full text-sm font-medium bg-aws-orange text-aws-navy hover:bg-orange-600 transition"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <Link href="/logout" className="text-aws-orange hover:underline">Logout</Link>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className={\`w-64 p-4 \${isDarkMode ? 'bg-aws-darkModeBg' : 'bg-aws-navy'} min-h-screen\`}>
          <nav className="space-y-2">
            <Link href="/management/dashboard" className={\`block px-4 py-2 rounded-lg \${isDarkMode ? 'text-aws-darkModeText hover:bg-gray-700' : 'text-aws-white hover:bg-aws-darkGray'}\`}>
              Dashboard
            </Link>
            <Link href="/management/clients" className={\`block px-4 py-2 rounded-lg \${isDarkMode ? 'text-aws-darkModeText hover:bg-gray-700' : 'text-aws-white hover:bg-aws-darkGray'}\`}>
              Clients
            </Link>
            <Link href="/management/schedule" className={\`block px-4 py-2 rounded-lg \${isDarkMode ? 'text-aws-darkModeText hover:bg-gray-700' : 'text-aws-white hover:bg-aws-darkGray'}\`}>
              Schedule
            </Link>
            <Link href="/management/staff" className={\`block px-4 py-2 rounded-lg \${isDarkMode ? 'text-aws-darkModeText hover:bg-gray-700' : 'text-aws-white hover:bg-aws-darkGray'}\`}>
              Staff
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
EOF

cat > src/app/management/api/book/route.ts << 'EOF'
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
EOF

cat > src/app/management/api/bookings/route.ts << 'EOF'
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
EOF

cat > src/app/management/api/clients/route.ts << 'EOF'
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
EOF

cat > src/app/management/api/staff/route.ts << 'EOF'
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
EOF

echo "Folder and file structure created with initial content!"
