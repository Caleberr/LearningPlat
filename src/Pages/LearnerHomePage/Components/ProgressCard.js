const ProgressCard = ({title, current, target, unit, color}) => {
    const percentage = (current / target) * 100;
    
    return(
        <div className="progress-card">
            <h3 className="progress-card-title">{title}</h3>
            <div className="progress-stats">
                <span className="progress-current">{current}</span>
                <span className="progress-separator">/</span>
                <span className="progress-target">{target} {unit}</span>
            </div>
            <div className="circular-progress">
                <div className="progress-circle" style={{background: `conic-gradient(${color} ${percentage * 3.6}deg, #e1e5e9 0deg)`}}>
                    <div className="progress-inner">
                        <span className="progress-percentage">{Math.round(percentage)}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressCard;