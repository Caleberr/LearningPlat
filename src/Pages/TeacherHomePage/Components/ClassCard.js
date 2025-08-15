import React from 'react';
import './ClassCard.css';

function ClassCard({ classData }) {
    return (
        <div className="class-card">
            <div className="class-header">
                <h3>{classData.name}</h3>
                <span className="student-count">{classData.students} students</span>
            </div>
            <div className="class-info">
                <p><strong>Next Class:</strong> {classData.nextClass}</p>
            </div>
            <div className="class-actions">
                <button className="btn-primary">View Class</button>
                <button className="btn-secondary">Manage</button>
            </div>
        </div>
    );
}

export default ClassCard;