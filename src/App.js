// Import necessary dependencies
import React from 'react';
import "./styles.css";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import EventDetailsPanel from "./components/EventDetailsPanel";

// Sample events data with user information
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
  // State to track currently selected event
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  // Handler for when an event is clicked in the calendar
  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
  };

  // Handler to close the event details panel
  const handleClosePanel = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="App">
      <h1>Simply Made Apps Calendar</h1>
      <div className="calendar-container">
        {/* FullCalendar component with event click handling */}
        <FullCalendar
          events={events}
          initialDate={"2025-03-21"}
          initialView="dayGridMonth"
          plugins={[dayGridPlugin]}
          timeZone={"America/Chicago"}
          eventClick={handleEventClick}
        />
        {/* Event details panel that shows when an event is selected */}
        <EventDetailsPanel event={selectedEvent} onClose={handleClosePanel} />
      </div>
    </div>
  );
}
