import { useState } from 'react';
import InputField from './InputField';
import { ErrorMessage, SuccessMessage } from './MessageComponents';
import { FormValidator } from '../utils/formValidation';
import { EncryptionService } from '../services/encryptionService';
import { Navigate } from 'react-router-dom';

const LoginForm = ({ onSwitchToSignup }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const encryptionService = new EncryptionService();

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
        if (errors.form) setErrors(prev => ({ ...prev, form: null }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccessMessage('');

        const validationErrors = FormValidator.validateLoginForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setSubmitting(true);
            const result = await encryptionService.loginUser(formData);
            if (result?.success && result?.match) {
                setSuccessMessage('Login successful! Redirecting...');
                Navigate('/Home/Learner');
            } else {
                setErrors({ form: result?.message || 'Invalid username or password' });
            }
        } catch (err) {
            setErrors({ form: err.message || 'Login failed. Please try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">LOG IN</h1>
                <p className="login-subtitle">Log in to continue learning!</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <SuccessMessage message={successMessage} />
                    <ErrorMessage error={errors.form} />

                    <div>
                        <InputField 
                            label="Username" 
                            type="text" 
                            placeholder="Enter your username" 
                            onChange={(e) => handleInputChange('username', e.target.value)} 
                            required
                        />
                        <ErrorMessage error={errors.username} />
                    </div>

                    <div>
                        <InputField 
                            label="Password" 
                            type="password" 
                            placeholder="Enter your password" 
                            onChange={(e) => handleInputChange('password', e.target.value)} 
                            required
                        />
                        <ErrorMessage error={errors.password} />
                    </div>

                    <button type="submit" className="login-btn" disabled={submitting}>
                        {submitting ? 'Logging in...' : 'Log In'}
                    </button>

                    <button
                        type="button"
                        className="link-button"
                        onClick={onSwitchToSignup}
                    >
                        Don't have an account? Sign up here.
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;