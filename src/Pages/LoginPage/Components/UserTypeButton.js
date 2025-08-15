import { useState } from 'react';

function UserTypeButton({ userType, isSelected, onSelect, activeColor }) {
    // Convert color names to actual hex values
    const getColorCode = (colorName) => {
        const colorMap = {
            'blue': '#2196F3',
            'green': '#4CAF50', 
            'orange': '#FF9800',
            'purple': '#667eea'
        };
        return colorMap[colorName] || colorName;
    };

    const selectedStyle = {
        background: getColorCode(activeColor),
        color: 'white',
        transform: 'translateY(-2px)',
        boxShadow: `0 8px 25px ${getColorCode(activeColor)}30`,
        border: `2px solid ${getColorCode(activeColor)}`
    };

    const unSelectedStyle = {
        background: 'white',
        color: '#333',
        border: '2px solid #e1e5e9'
    };

    return(
        <button 
            type="button" 
            className={`user-type-btn ${userType.toLowerCase()}`}
            onClick={onSelect} 
            style={isSelected ? selectedStyle : unSelectedStyle}
        >
            {userType}
        </button>
    );
}

export default UserTypeButton;
