import React from 'react';
import { motion } from 'framer-motion';

const EventDetailsPanel = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="event-details-panel"
      style={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'white',
        padding: '1rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        zIndex: 1000,
        width: '300px',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}
    >
      <div className="panel-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <h3 style={{ margin: 0 }}>{event.title}</h3>
        <button
          onClick={onClose}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          &times;
        </button>
      </div>
      <div className="panel-content">
        <p><strong>Owner:</strong> {event.extendedProps.user}</p>
        <p><strong>Date:</strong> {new Date(event.start).toLocaleDateString()}</p>
        {event.allDay ? (
          <p><strong>Type:</strong> All Day Event</p>
        ) : (
          <p><strong>Time:</strong> {new Date(event.start).toLocaleTimeString()}</p>
        )}
      </div>
    </motion.div>
  );
};

export default EventDetailsPanel;
