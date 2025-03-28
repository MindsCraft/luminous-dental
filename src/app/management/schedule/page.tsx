"use client";

import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

export default function SchedulePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/bookings')
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
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
  );
}
