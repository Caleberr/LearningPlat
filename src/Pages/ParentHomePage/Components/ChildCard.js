import React from 'react';
import './ChildCard.css';

function ChildCard({ childData }) {
    return (
        <div className="child-card">
            <div className="child-header">
                <h3>{childData.name}</h3>
                <div className="progress-indicator">
                    <span>{childData.overallProgress}%</span>
                </div>
            </div>
            <div className="child-details">
                <p><strong>Grade:</strong> {childData.grade}</p>
                <p><strong>School:</strong> {childData.school}</p>
                <p><strong>Courses:</strong> {childData.currentCourses} active</p>
                <p className="recent-activity"><strong>Recent:</strong> {childData.recentActivity}</p>
            </div>
            <div className="child-actions">
                <button className="btn-primary">View Details</button>
                <button className="btn-secondary">Contact Teacher</button>
            </div>
        </div>
    );
}

export default ChildCard;