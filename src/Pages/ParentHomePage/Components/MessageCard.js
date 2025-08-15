import React from 'react';
import './MessageCard.css';

function MessageCard({ messageData }) {
    return (
        <div className={`message-card ${!messageData.isRead ? 'unread' : ''}`}>
            <div className="message-header">
                <h4>{messageData.from}</h4>
                <span className="message-date">{messageData.date}</span>
            </div>
            <h5 className="message-subject">{messageData.subject}</h5>
            <p className="message-preview">{messageData.preview}</p>
            {!messageData.isRead && <div className="unread-indicator"></div>}
        </div>
    );
}

export default MessageCard;