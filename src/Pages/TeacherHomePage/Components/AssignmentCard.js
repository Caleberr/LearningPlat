import React from 'react';
import './AssignmentCard.css';

function AssignmentCard({ assignmentData }) {
    const submissionRate = Math.round((assignmentData.submissions / assignmentData.total) * 100);
    
    return (
        <div className="assignment-card">
            <div className="assignment-header">
                <h3>{assignmentData.title}</h3>
                <span className="assignment-class">{assignmentData.class}</span>
            </div>
            <div className="assignment-details">
                <p><strong>Due:</strong> {assignmentData.dueDate}</p>
                <p><strong>Submissions:</strong> {assignmentData.submissions}/{assignmentData.total}</p>
                <div className="submission-progress">
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${submissionRate}%` }}
                        ></div>
                    </div>
                    <span className="progress-text">{submissionRate}%</span>
                </div>
            </div>
            <div className="assignment-actions">
                <button className="btn-review">Review Submissions</button>
            </div>
        </div>
    );
}

export default AssignmentCard;