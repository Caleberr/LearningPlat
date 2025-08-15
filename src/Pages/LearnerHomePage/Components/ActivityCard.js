const ActivityCard = ({activity, time}) => {
    return(
        <div className="activity-card">
            <div className="activity-content">
                <p className="activity-text">{activity}</p>
                <span className="activity-time">{time}</span>
            </div>
        </div>
    )
}

export default ActivityCard;