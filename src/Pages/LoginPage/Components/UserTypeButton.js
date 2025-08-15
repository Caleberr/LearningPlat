import { useState } from 'react';


const UserTypeButton = ({label, onClick, isSelected, activeColor}) => {
    const[SelectedStyle, setSelectedStyle] = useState({
        backgroundColor: activeColor,
        color: 'white',
        border: `1px solid ${activeColor}`,

    });

    const [unSelectedStyle, setUnSelectedStyle] = useState({
        backgroundColor: 'white',
        color: activeColor,
        border: `1px solid ${activeColor}`,
    })

    return(
        <button type="button" className="user-type-btn" onClick = {onClick} style = {isSelected ? SelectedStyle : unSelectedStyle}>
            {label}
        </button>
    )
}

export default UserTypeButton;
