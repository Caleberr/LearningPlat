const AchievementCard = ({title, icon, earned}) => {
    return(
        <div className={`achievement-card ${earned ? 'earned' : 'locked'}`}>
            <div className="achievement-icon">{icon}</div>
            <h4 className="achievement-title">{title}</h4>
            {!earned && <div className="lock-overlay">🔒</div>}
        </div>
    )
}

export default AchievementCard;