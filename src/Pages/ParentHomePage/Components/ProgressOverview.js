import React from 'react';
import './ProgressOverview.css';

function ProgressOverview({ progressData }) {
    return (
        <div className="progress-overview">
            <div className="progress-header">
                <h4>{progressData.subject}</h4>
                <span className="grade-badge">{progressData.grade}</span>
            </div>
            <p className="child-name">{progressData.child}</p>
            <div className="progress-bar-container">
                <div className="progress-bar">
                    <div 
                        className="progress-fill" 
                        style={{ width: `${progressData.progress}%` }}
                    ></div>
                </div>
                <span className="progress-percentage">{progressData.progress}%</span>
            </div>
        </div>
    );
}

export default ProgressOverview;