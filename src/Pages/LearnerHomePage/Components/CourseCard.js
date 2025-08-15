const CourseCard = ({title, progress, difficulty, onClick}) => {
    return(
        <div className="course-card" onClick={onClick}>
            <h3 className="course-title">{title}</h3>
            <div className="course-info">
                <span className={`difficulty ${difficulty.toLowerCase()}`}>{difficulty}</span>
                <span className="progress-text">{progress}% Complete</span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill" style={{width: `${progress}%`}}></div>
            </div>
        </div>
    )
}

export default CourseCard;