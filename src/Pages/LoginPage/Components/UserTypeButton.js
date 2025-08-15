import { useState } from 'react';

function UserTypeButton({ userType, isSelected, onSelect }) {
    const [selectedStyle] = useState({
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
    });

    const [unSelectedStyle] = useState({
        background: 'white',
        color: '#333',
        border: '2px solid #e1e5e9'
    });

    return(
        <button type="button" className="user-type-btn" onClick={onSelect} style={isSelected ? selectedStyle : unSelectedStyle}>
            {userType}
        </button>
    )
}

export default UserTypeButton;
