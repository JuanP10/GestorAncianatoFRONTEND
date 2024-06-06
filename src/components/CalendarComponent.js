import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../App.css';

const localizer = momentLocalizer(moment);

const initialEvents = [
  {
    id: 1,
    title: 'Curso de manejo de medicamentos',
    start: new Date(2024, 5, 8),
    end: new Date(2024, 5, 8),
    description: 'Clases de organización de inventario y control de medicación'
  },
  {
    id: 2,
    title: 'Resumen de medicamentos donados',
    start: new Date(2024, 5, 22),
    end: new Date(2024, 5, 22),
    description: 'Clase de seguimiento y tiempo de evaluación'
  },
  // Agrega más eventos aquí
];

const CalendarComponent = () => {
  const [events, setEvents] = useState(initialEvents);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '', description: '' });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleExpand = (event) => {
    if (expandedEvent && expandedEvent.id === event.id) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(event);
    }
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const eventId = events.length ? events[events.length - 1].id + 1 : 1;
    const eventToAdd = {
      id: eventId,
      title: newEvent.title,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
      description: newEvent.description,
    };
    setEvents([...events, eventToAdd]);
    setNewEvent({ title: '', start: '', end: '', description: '' });
    setIsFormVisible(false);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
    setExpandedEvent(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectEvent={toggleExpand}
        views={['month']}
        popup
      />
      {expandedEvent && (
        <div className="event-details">
          <h2>{expandedEvent.title}</h2>
          <p>{expandedEvent.description}</p>
          <button className="delete-button" onClick={() => handleDeleteEvent(expandedEvent.id)}>Eliminar evento</button>
        </div>
      )}
      <button className="toggle-form-button" onClick={toggleFormVisibility}>
        {isFormVisible ? 'Cancelar' : 'Agregar Evento'}
      </button>
      {isFormVisible && (
        <form className="event-form" onSubmit={handleAddEvent}>
          <input
            type="text"
            name="title"
            placeholder="Título del evento"
            value={newEvent.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="start"
            value={newEvent.start}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="end"
            value={newEvent.end}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Descripción del evento"
            value={newEvent.description}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="add-button">Agregar evento</button>
        </form>
      )}
    </div>
  );
};

export default CalendarComponent;
