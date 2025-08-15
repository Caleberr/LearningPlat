import './LoginPage.css';
import { useState } from 'react';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';

// Main component now only handles routing between forms - Single Responsibility Principle
const LoginPage = () => {
    const [isSignup, setIsSignup] = useState(true);

    const switchToLogin = () => {
        setIsSignup(false);
    };

    const switchToSignup = () => {
        setIsSignup(true);
    };

    return (
        <div>
            {isSignup ? (
                <SignupForm onSwitchToLogin={switchToLogin} />
            ) : (
                <LoginForm onSwitchToSignup={switchToSignup} />
            )}
        </div>
    );
};

export default LoginPage;