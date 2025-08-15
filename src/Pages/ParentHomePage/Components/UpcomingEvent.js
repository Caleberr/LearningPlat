import React from 'react';
import './UpcomingEvent.css';

function UpcomingEvent({ eventData }) {
    return (
        <div className="upcoming-event">
            <div className="event-date">
                <span className="date">{eventData.date.split('-')[2]}</span>
                <span className="month">{new Date(eventData.date).toLocaleDateString('en-US', { month: 'short' })}</span>
            </div>
            <div className="event-details">
                <h4>{eventData.title}</h4>
                <p><strong>Time:</strong> {eventData.time}</p>
                <p><strong>Child:</strong> {eventData.child}</p>
            </div>
        </div>
    );
}

export default UpcomingEvent;