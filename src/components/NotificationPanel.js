// src/components/NotificationPanel.js
import React, { useState } from 'react';
import '../App.css';
import Notifications from './Notifications';

const NotificationPanel = () => {
  const [expanded, setExpanded] = useState(null);

  const notifications = [
    { id: 1, title: 'Notificación 1', content: <Notifications /> },
    { id: 2, title: 'Notificación 2', content: 'Contenido de la notificación 2' },
    // Añade más notificaciones aquí
  ];

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="notification-panel">
      {notifications.map((notification) => (
        <div key={notification.id} className="notification">
          <div className="notification-header" onClick={() => toggleExpand(notification.id)}>
            {notification.title}
          </div>
          {expanded === notification.id && (
            <div className="notification-content">
              {notification.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NotificationPanel;
