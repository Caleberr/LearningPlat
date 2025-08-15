import React, { useState } from 'react';
import './ParentHomePage.css';
import ChildCard from './Components/ChildCard';
import ProgressOverview from './Components/ProgressOverview';
import MessageCard from './Components/MessageCard';
import UpcomingEvent from './Components/UpcomingEvent';

function ParentHomePage() {
    const [parentInfo] = useState({
        firstName: 'Sarah',
        lastName: 'Johnson',
        totalChildren: 2,
        activeAlerts: 1
    });

    const [children] = useState([
        { 
            id: 1, 
            name: 'Emma Johnson', 
            grade: '10th Grade', 
            school: 'Cyber Academy High',
            overallProgress: 88,
            currentCourses: 4,
            recentActivity: 'Completed Network Security Quiz'
        },
        { 
            id: 2, 
            name: 'Alex Johnson', 
            grade: '8th Grade', 
            school: 'Tech Middle School',
            overallProgress: 92,
            currentCourses: 3,
            recentActivity: 'Started Python Programming Module'
        }
    ]);

    const [progressData] = useState([
        { subject: 'Cybersecurity', child: 'Emma', progress: 85, grade: 'A-' },
        { subject: 'Programming', child: 'Alex', progress: 94, grade: 'A+' },
        { subject: 'Digital Literacy', child: 'Emma', progress: 78, grade: 'B+' },
        { subject: 'Web Development', child: 'Alex', progress: 89, grade: 'A-' }
    ]);

    const [messages] = useState([
        { 
            id: 1, 
            from: 'Ms. Rodriguez - Cybersecurity Teacher', 
            subject: 'Emma\'s Excellent Performance', 
            preview: 'Emma has shown outstanding progress in network security concepts...',
            date: '2024-01-12',
            isRead: false
        },
        { 
            id: 2, 
            from: 'Mr. Chen - Programming Instructor', 
            subject: 'Alex\'s Project Submission', 
            preview: 'Alex submitted an impressive Python project ahead of schedule...',
            date: '2024-01-11',
            isRead: false
        },
        { 
            id: 3, 
            from: 'School Administration', 
            subject: 'Parent-Teacher Conference', 
            preview: 'Reminder: Parent-teacher conferences are scheduled for next week...',
            date: '2024-01-10',
            isRead: true
        }
    ]);

    const [upcomingEvents] = useState([
        { id: 1, title: 'Parent-Teacher Conference', date: '2024-01-18', time: '3:00 PM', child: 'Emma' },
        { id: 2, title: 'Science Fair Presentation', date: '2024-01-20', time: '10:00 AM', child: 'Alex' },
        { id: 3, title: 'Cybersecurity Workshop', date: '2024-01-22', time: '2:00 PM', child: 'Emma' },
        { id: 4, title: 'Programming Competition', date: '2024-01-25', time: '9:00 AM', child: 'Alex' }
    ]);

    return (
        <div className="parent-homepage">
            <div className="parent-header">
                <div className="welcome-section">
                    <h1>Welcome, {parentInfo.firstName}!</h1>
                    <p>Stay connected with your children's learning journey</p>
                </div>
                <div className="parent-stats">
                    <div className="stat-item">
                        <span className="stat-number">{parentInfo.totalChildren}</span>
                        <span className="stat-label">Children</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{parentInfo.unreadMessages}</span>
                        <span className="stat-label">New Messages</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{parentInfo.upcomingEvents}</span>
                        <span className="stat-label">Upcoming Events</span>
                    </div>
                </div>
            </div>

            <div className="parent-content">
                <div className="main-content">
                    <section className="children-section">
                        <h2>Your Children</h2>
                        <div className="children-grid">
                            {children.map(child => (
                                <ChildCard key={child.id} childData={child} />
                            ))}
                        </div>
                    </section>

                    <section className="progress-section">
                        <h2>Academic Progress</h2>
                        <div className="progress-grid">
                            {progressData.map((progress, index) => (
                                <ProgressOverview key={index} progressData={progress} />
                            ))}
                        </div>
                    </section>
                </div>

                <div className="sidebar-content">
                    <section className="messages-section">
                        <h3>Recent Messages</h3>
                        <div className="messages-list">
                            {messages.map(message => (
                                <MessageCard key={message.id} messageData={message} />
                            ))}
                        </div>
                    </section>

                    <section className="events-section">
                        <h3>Upcoming Events</h3>
                        <div className="events-list">
                            {upcomingEvents.map(event => (
                                <UpcomingEvent key={event.id} eventData={event} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ParentHomePage;