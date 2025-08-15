import React from 'react';
import './StudentCard.css';

function StudentCard({ studentData }) {
    return (
        <div className="student-card">
            <div className="student-info">
                <h4>{studentData.name}</h4>
                <p className="student-class">{studentData.class}</p>
                <p className="last-active">Last active: {studentData.lastActive}</p>
            </div>
            <div className="student-progress">
                <div className="progress-circle">
                    <span>{studentData.progress}%</span>
                </div>
            </div>
        </div>
    );
}

export default StudentCard;