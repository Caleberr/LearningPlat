// Utility for form validation - Single Responsibility Principle
export class FormValidator {
    static validateEmail(email) {
        if (!email.trim()) {
            return 'Email is required';
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return 'Please enter a valid email address';
        }
        return null;
    }

    static validatePassword(password) {
        if (!password) {
            return 'Password is required';
        }
        if (password.length < 6) {
            return 'Password must be at least 6 characters long';
        }
        if (!/\d/.test(password)) {
            return 'Password must contain at least one number';
        }
        return null;
    }

    static validateRequiredField(value, fieldName) {
        if (!value || !value.trim()) {
            return `${fieldName} is required`;
        }
        return null;
    }

    static validatePasswordMatch(password, confirmPassword) {
        if (!confirmPassword) {
            return 'Please confirm your password';
        }
        if (password !== confirmPassword) {
            return 'Passwords do not match';
        }
        return null;
    }

    static validateSignupForm(formData) {
        const errors = {};
        
        const usernameError = this.validateRequiredField(formData.username, 'Username');
        if (usernameError) errors.username = usernameError;
        
        const firstNameError = this.validateRequiredField(formData.firstName, 'First name');
        if (firstNameError) errors.firstName = firstNameError;
        
        const lastNameError = this.validateRequiredField(formData.lastName, 'Last name');
        if (lastNameError) errors.lastName = lastNameError;
        
        const emailError = this.validateEmail(formData.email);
        if (emailError) errors.email = emailError;
        
        const passwordError = this.validatePassword(formData.password);
        if (passwordError) errors.password = passwordError;
        
        const confirmPasswordError = this.validatePasswordMatch(formData.password, formData.confirmPassword);
        if (confirmPasswordError) errors.confirmPassword = confirmPasswordError;
        
        if (!formData.userType) {
            errors.userType = 'Please select a user type';
        }
        
        return errors;
    }

    static validateLoginForm(formData) {
        const errors = {};
        
        const usernameError = this.validateRequiredField(formData.username, 'Username');
        if (usernameError) errors.username = usernameError;
        
        const passwordError = this.validateRequiredField(formData.password, 'Password');
        if (passwordError) errors.password = passwordError;
        
        return errors;
    }
}