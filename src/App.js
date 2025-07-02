import React from 'react';
import "./styles.css";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import EventDetailsPanel from "./components/EventDetailsPanel";

const events = [
  {
    id: "1",
    title: "Ides of March",
    start: new Date("2025-03-15"),
    allDay: true,
    extendedProps: { user: "Josh" },
  },
  {
    id: "2",
    title: "Job Interview",
    start: new Date("2025-03-04T13:00:00Z"),
    extendedProps: { user: "Brandon" },
  },
  {
    id: "3",
    title: "Meeting",
    start: new Date("2025-03-18T10:30:00Z"),
    extendedProps: { user: "Stephen" },
  },
  {
    id: "4",
    title: "Hire Start",
    start: new Date("2025-03-10T08:00:00Z"),
    extendedProps: { user: "Brandon" },
  },
];

export default function App() {
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
  };

  const handleClosePanel = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="App">
      <h1>Simply Made Apps Calendar</h1>
      <div className="calendar-container">
        <FullCalendar
          events={events}
          initialDate={"2025-03-21"}
          initialView="dayGridMonth"
          plugins={[dayGridPlugin]}
          timeZone={"America/Chicago"}
          eventClick={handleEventClick}
        />
        <EventDetailsPanel event={selectedEvent} onClose={handleClosePanel} />
      </div>
    </div>
  );
}
