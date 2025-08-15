import './LoginPage.css';
import InputField from './Components/InputField';
import UserTypeButton from './Components/UserTypeButton';
import {useState} from "react";

const LoginPage = () => {
    const [isSignup, setIsSignup] = useState(true);

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    const [SigninInfo, setSigninInfo] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        userType: "",
    })

    // Remove unused handleSubmit function and nested block
    // Lines 24-26 should be removed entirely
    const handleSubmit = () => {
        {/* */}
    }

    return ( 
        <div>
            {isSignup ? (
                // SIGN IN PART
                <div className="login-container">
                    <div className="login-card">
                        <h1 className="login-title">SIGN IN</h1>
                        <p className="login-subtitle">Create an account to start learning!</p>
                        
                        <form className="login-form">
                            {/* User credential fields */}
                            
                            <InputField label = "Username"         type = "text"     placeholder = "Enter your username"   onChange = {(e) => setSigninInfo({...SigninInfo, username: e.target.value})} />
                            <InputField label = "First Name"       type = "text"     placeholder = "Enter your first name" onChange = {(e) => setSigninInfo({...SigninInfo, firstName: e.target.value})} />
                            <InputField label = "Last Name"        type = "text"     placeholder = "Enter your last name"  onChange = {(e) => setSigninInfo({...SigninInfo, lastName: e.target.value})} />
                            <InputField label = "Email"            type = "email"    placeholder = "Enter your email"      onChange = {(e) => setSigninInfo({...SigninInfo, email: e.target.value})} />
                            <InputField label = "Password"         type = "password" placeholder = "Enter your password"   onChange = {(e) => setSigninInfo({...SigninInfo, password: e.target.value})} />
                            <InputField label = "Confirm Password" type = "password" placeholder = "Confirm your password" onChange = {(e) => setSigninInfo({...SigninInfo, confirmPassword: e.target.value})} />

                            <div className="user-type-section">
                                <p className="user-type-label">I am a:</p>
                                <div className="user-type-buttons">
                                    {/* User type buttons */}
                                    
                                    <UserTypeButton label = "Learner" onClick = {() => setSigninInfo({...SigninInfo, userType: "Learner"})} isSelected = {SigninInfo.userType === "Learner"} activeColor = "blue" />
                                    <UserTypeButton label = "Teacher" onClick = {() => setSigninInfo({...SigninInfo, userType: "Teacher"})} isSelected = {SigninInfo.userType === "Teacher"} activeColor = "green" />
                                    <UserTypeButton label = "Parent"  onClick = {() => setSigninInfo({...SigninInfo, userType: "Parent"})}  isSelected = {SigninInfo.userType === "Parent"}  activeColor = "orange" />

                                
                                </div>
                            </div>
                            
                            {/* Submit button */}
                            <button type="submit" className="login-btn">
                                Sign In
                            </button>

                            <a onClick = {() => setIsSignup(false)}> Already have an account? Log in here.</a>
                        </form>
                    </div>
                </div>
            ) : (
                // LOG IN PART
                <div className="login-container">
                    <div className="login-card">
                        <h1 className="login-title">LOG IN</h1>
                        <p className="login-subtitle">Log in to continue learning!</p>
                        
                        <form className="login-form">
                            {/* User credential fields */}
                            
                            <InputField label = "Email"    type = "email"    placeholder = "Enter your email"    onChange = {(e) => setLoginInfo({...loginInfo, email: e.target.value})} />
                            <InputField label = "Password" type = "password" placeholder = "Enter your password" onChange = {(e) => setLoginInfo({...loginInfo, password: e.target.value})} />

                            {/* Submit button */}
                            <button type="submit" className="login-btn">
                                Sign In
                            </button>

                            <a onClick = {() => setIsSignup(true)}> Don't have an account? Sign up here.</a>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginPage;


function LoginPage() {
    // Fix anchor tags - replace with buttons or add href
    <button 
        className="forgot-password-link"
        onClick={() => console.log('Forgot password clicked')}
        type="button"
    >
        Forgot Password?
    </button>
}