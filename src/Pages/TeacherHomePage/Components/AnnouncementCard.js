import React from 'react';
import './AnnouncementCard.css';

function AnnouncementCard({ announcementData }) {
    return (
        <div className="announcement-card">
            <div className="announcement-header">
                <h4>{announcementData.title}</h4>
                <span className="announcement-date">{announcementData.date}</span>
            </div>
            <p className="announcement-content">{announcementData.content}</p>
        </div>
    );
}

export default AnnouncementCard;