import React, { useState } from 'react';
import './TeacherHomePage.css';
import ClassCard from './Components/ClassCard';
import StudentCard from './Components/StudentCard';
import AssignmentCard from './Components/AssignmentCard';
import AnnouncementCard from './Components/AnnouncementCard';

function TeacherHomePage() {
    const [teacherInfo] = useState({
        firstName: 'John',
        lastName: 'Smith',
        subject: 'Cybersecurity',
        totalClasses: 5,
        totalStudents: 127,
        pendingAssignments: 8
    });

    const [classes] = useState([
        { id: 1, name: 'Network Security Fundamentals', students: 28, nextClass: '2024-01-15 10:00 AM' },
        { id: 2, name: 'Ethical Hacking Basics', students: 25, nextClass: '2024-01-15 2:00 PM' },
        { id: 3, name: 'Cryptography Essentials', students: 22, nextClass: '2024-01-16 9:00 AM' },
        { id: 4, name: 'Incident Response', students: 30, nextClass: '2024-01-16 11:00 AM' }
    ]);

    const [recentStudents] = useState([
        { id: 1, name: 'Alice Johnson', class: 'Network Security', lastActive: '2 hours ago', progress: 85 },
        { id: 2, name: 'Bob Wilson', class: 'Ethical Hacking', lastActive: '4 hours ago', progress: 72 },
        { id: 3, name: 'Carol Davis', class: 'Cryptography', lastActive: '1 day ago', progress: 91 },
        { id: 4, name: 'David Brown', class: 'Incident Response', lastActive: '3 hours ago', progress: 68 }
    ]);

    const [assignments] = useState([
        { id: 1, title: 'Network Vulnerability Assessment', class: 'Network Security', dueDate: '2024-01-20', submissions: 18, total: 28 },
        { id: 2, title: 'Penetration Testing Lab', class: 'Ethical Hacking', dueDate: '2024-01-22', submissions: 12, total: 25 },
        { id: 3, title: 'Encryption Implementation', class: 'Cryptography', dueDate: '2024-01-25', submissions: 20, total: 22 },
        { id: 4, title: 'Incident Response Plan', class: 'Incident Response', dueDate: '2024-01-18', submissions: 25, total: 30 }
    ]);

    const [announcements] = useState([
        { id: 1, title: 'New Lab Equipment Available', content: 'Updated penetration testing tools are now available in Lab 3.', date: '2024-01-12' },
        { id: 2, title: 'Guest Speaker Next Week', content: 'Industry expert will discuss real-world cybersecurity challenges.', date: '2024-01-10' },
        { id: 3, title: 'Assignment Extension', content: 'Network Security assignment deadline extended to January 22nd.', date: '2024-01-08' }
    ]);

    return (
        <div className="teacher-homepage">
            <div className="teacher-header">
                <div className="welcome-section">
                    <h1>Welcome back, {teacherInfo.firstName}!</h1>
                    <p>Ready to inspire and educate your students today?</p>
                </div>
                <div className="teacher-stats">
                    <div className="stat-item">
                        <span className="stat-number">{teacherInfo.totalClasses}</span>
                        <span className="stat-label">Active Classes</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{teacherInfo.totalStudents}</span>
                        <span className="stat-label">Total Students</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{teacherInfo.pendingAssignments}</span>
                        <span className="stat-label">Pending Reviews</span>
                    </div>
                </div>
            </div>

            <div className="teacher-content">
                <div className="main-content">
                    <section className="classes-section">
                        <h2>Your Classes</h2>
                        <div className="classes-grid">
                            {classes.map(classItem => (
                                <ClassCard key={classItem.id} classData={classItem} />
                            ))}
                        </div>
                    </section>

                    <section className="assignments-section">
                        <h2>Assignment Overview</h2>
                        <div className="assignments-grid">
                            {assignments.map(assignment => (
                                <AssignmentCard key={assignment.id} assignmentData={assignment} />
                            ))}
                        </div>
                    </section>
                </div>

                <div className="sidebar-content">
                    <section className="recent-students-section">
                        <h3>Recent Student Activity</h3>
                        <div className="students-list">
                            {recentStudents.map(student => (
                                <StudentCard key={student.id} studentData={student} />
                            ))}
                        </div>
                    </section>

                    <section className="announcements-section">
                        <h3>Announcements</h3>
                        <div className="announcements-list">
                            {announcements.map(announcement => (
                                <AnnouncementCard key={announcement.id} announcementData={announcement} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default TeacherHomePage;