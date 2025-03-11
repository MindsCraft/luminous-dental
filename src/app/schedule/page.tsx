"use client";

import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import PageHeader from '@/components/PageHeader';

export default function SchedulePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/bookings')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching bookings:', error));
  }, []);

  const headerData = {
    title: "Clinic Schedule",
    breadcrumbs: [
      { label: "Home", href: "/", current: false },
      { label: "Clinic Schedule", href: "/schedule", current: true },
    ],
  };

  return (
    <>
      <PageHeader {...headerData} />
      <div className="container mx-auto py-12">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
          initialView="dayGridMonth"
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
        />
      </div>
    </>
  );
}
