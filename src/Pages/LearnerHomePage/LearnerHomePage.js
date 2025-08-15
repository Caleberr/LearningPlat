import './LearnerHomePage.css';
import CourseCard from './Components/CourseCard';
import ProgressCard from './Components/ProgressCard';
import AchievementCard from './Components/AchievementCard';
import ActivityCard from './Components/ActivityCard';
import {useState} from "react";

const LearnerHomePage = () => {

    const [learnerInfo, setLearnerInfo] = useState({
        name: "John Doe",
        level: "Beginner",
        points: 1250,
        coursesCompleted: 3,
    });

    const [courses, setCourses] = useState([
        { id: 1, title: "Introduction to Cybersecurity", progress: 75, difficulty: "Beginner" },
        { id: 2, title: "Network Security Basics", progress: 45, difficulty: "Intermediate" },
        { id: 3, title: "Ethical Hacking Fundamentals", progress: 0, difficulty: "Advanced" },
    ]);

    const [achievements, setAchievements] = useState([
        { id: 1, title: "First Course Completed", icon: "🏆", earned: true },
        { id: 2, title: "Week Streak", icon: "🔥", earned: true },
        { id: 3, title: "Quiz Master", icon: "🧠", earned: false },
    ]);

    const [recentActivities, setRecentActivities] = useState([
        { id: 1, activity: "Completed lesson: Password Security", time: "2 hours ago" },
        { id: 2, activity: "Started course: Network Security Basics", time: "1 day ago" },
        { id: 3, activity: "Earned achievement: First Course Completed", time: "3 days ago" },
    ]);

    return ( 
        <div>
            {/* LEARNER HOMEPAGE */}
            <div className="homepage-container">
                <div className="homepage-content">
                    
                    {/* Welcome Section */}
                    <div className="welcome-section">
                        <h1 className="welcome-title">Welcome back, {learnerInfo.name}!</h1>
                        <p className="welcome-subtitle">Continue your cybersecurity learning journey</p>
                        
                        <div className="stats-row">
                            <div className="stat-item">
                                <span className="stat-number">{learnerInfo.points}</span>
                                <span className="stat-label">Points</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">{learnerInfo.coursesCompleted}</span>
                                <span className="stat-label">Courses Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">{learnerInfo.level}</span>
                                <span className="stat-label">Level</span>
                            </div>
                        </div>
                    </div>

                    {/* My Courses Section */}
                    <div className="section">
                        <h2 className="section-title">My Courses</h2>
                        <div className="courses-grid">
                            {courses.map(course => (
                                <CourseCard 
                                    key={course.id}
                                    title={course.title}
                                    progress={course.progress}
                                    difficulty={course.difficulty}
                                    onClick={() => console.log(`Navigate to course ${course.id}`)}
                                />
                            ))}
                        </div>
                        <button className="browse-btn">Browse All Courses</button>
                    </div>

                    {/* Progress Overview */}
                    <div className="section">
                        <h2 className="section-title">Progress Overview</h2>
                        <div className="progress-grid">
                            <ProgressCard 
                                title="Weekly Goal"
                                current={4}
                                target={7}
                                unit="lessons"
                                color="#667eea"
                            />
                            <ProgressCard 
                                title="Monthly Progress"
                                current={12}
                                target={20}
                                unit="hours"
                                color="#4CAF50"
                            />
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="section">
                        <h2 className="section-title">Achievements</h2>
                        <div className="achievements-grid">
                            {achievements.map(achievement => (
                                <AchievementCard 
                                    key={achievement.id}
                                    title={achievement.title}
                                    icon={achievement.icon}
                                    earned={achievement.earned}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="section">
                        <h2 className="section-title">Recent Activity</h2>
                        <div className="activity-list">
                            {recentActivities.map(activity => (
                                <ActivityCard 
                                    key={activity.id}
                                    activity={activity.activity}
                                    time={activity.time}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LearnerHomePage;