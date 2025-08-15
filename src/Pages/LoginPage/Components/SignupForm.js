import { useState } from 'react';
import InputField from './InputField';
import UserTypeButton from './UserTypeButton';
import { ErrorMessage, SuccessMessage } from './MessageComponents';
import { FormValidator } from '../utils/formValidation';
import { EncryptionService } from '../services/encryptionService';

const SignupForm = ({ onSwitchToLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: ''
    });
    
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const encryptionService = new EncryptionService();

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccessMessage('');
        setIsLoading(true);
        
        const validationErrors = FormValidator.validateSignupForm(formData);
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsLoading(false);
            return;
        }
        
        try {
            // Register user with API
            const encryptedPayload = encryptionService.createSignupPayload(formData);
            const result = await encryptionService.registerUser(encryptedPayload);
            
            if (result.success) {
                setSuccessMessage(`Account created successfully! User ID: ${result.userId}. You can now log in.`);
                
                // Reset form after successful registration
                setFormData({
                    username: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    userType: ''
                });
                
                // Automatically switch to login after 3 seconds
                setTimeout(() => {
                    onSwitchToLogin();
                }, 3000);
            } else {
                setErrors({ general: 'Registration failed. Please try again.' });
            }
        } catch (error) {
            setErrors({ general: error.message || 'Registration failed. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">SIGN UP</h1>
                <p className="login-subtitle">Create an account to start learning!</p>
                
                <form className="login-form" onSubmit={handleSubmit}>
                    <SuccessMessage message={successMessage} />
                    {errors.general && <ErrorMessage error={errors.general} />}
                    
                    <div>
                        <InputField 
                            label="Username" 
                            type="text" 
                            placeholder="Enter your username" 
                            value={formData.username}
                            onChange={(e) => handleInputChange('username', e.target.value)} 
                            required
                            disabled={isLoading}
                        />
                        <ErrorMessage error={errors.username} />
                    </div>
                    
                    <div>
                        <InputField 
                            label="First Name" 
                            type="text" 
                            placeholder="Enter your first name" 
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)} 
                            required
                            disabled={isLoading}
                        />
                        <ErrorMessage error={errors.firstName} />
                    </div>
                    
                    <div>
                        <InputField 
                            label="Last Name" 
                            type="text" 
                            placeholder="Enter your last name" 
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)} 
                            required
                            disabled={isLoading}
                        />
                        <ErrorMessage error={errors.lastName} />
                    </div>
                    
                    <div>
                        <InputField 
                            label="Email" 
                            type="email" 
                            placeholder="Enter your email" 
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)} 
                            required
                            disabled={isLoading}
                        />
                        <ErrorMessage error={errors.email} />
                    </div>
                    
                    <div>
                        <InputField 
                            label="Password" 
                            type="password" 
                            placeholder="Enter your password (must contain at least one number)" 
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)} 
                            required
                            disabled={isLoading}
                        />
                        <ErrorMessage error={errors.password} />
                    </div>
                    
                    <div>
                        <InputField 
                            label="Confirm Password" 
                            type="password" 
                            placeholder="Confirm your password" 
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange('confirmPassword', e.target.value)} 
                            required
                            disabled={isLoading}
                        />
                        <ErrorMessage error={errors.confirmPassword} />
                    </div>

                    <div className="user-type-section">
                        <p className="user-type-label">I am a: *</p>
                        <div className="user-type-buttons">
                            <UserTypeButton 
                                userType="Learner" 
                                onSelect={() => handleInputChange('userType', 'Learner')} 
                                isSelected={formData.userType === 'Learner'} 
                                activeColor="green" 
                            />
                            <UserTypeButton 
                                userType="Teacher" 
                                onSelect={() => handleInputChange('userType', 'Teacher')} 
                                isSelected={formData.userType === 'Teacher'} 
                                activeColor="blue" 
                            />
                            <UserTypeButton 
                                userType="Parent"
                                isSelected={formData.userType === 'Parent'} 
                                onSelect={() => handleInputChange('userType', 'Parent')} 
                                activeColor="orange" 
                            />
                        </div>
                        <ErrorMessage error={errors.userType} />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="login-btn"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </button>

                    <button 
                        type="button"
                        className="link-button"
                        onClick={onSwitchToLogin}
                        disabled={isLoading}
                    >
                        Already have an account? Log in here.
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;