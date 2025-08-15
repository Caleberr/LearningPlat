import CryptoJS from 'crypto-js';

// Service for encryption operations - Single Responsibility Principle
export class EncryptionService {
    constructor() {
        this.secretKey = process.env.REACT_APP_SECRET_KEY || 'YourVerySecretKey123!';
    }

    encryptString(text) {
        try {
            // Format the string as expected by the API: Date|data|Time
            const currentDate = new Date().toLocaleDateString();
            const currentTime = new Date().toLocaleTimeString();
            const stringToEncrypt = `${currentDate}|${text}|${currentTime}`;
            const encrypted = CryptoJS.AES.encrypt(stringToEncrypt, this.secretKey).toString();
            return encrypted;
        } catch (error) {
            console.error('Encryption failed:', error);
            throw new Error('Failed to encrypt data');
        }
    }

    createSignupPayload(formData) {
        const encryptedData = {
            username: this.encryptString(formData.username || ''),
            firstName: this.encryptString(formData.firstName || ''),
            lastName: this.encryptString(formData.lastName || ''),
            usertype: this.encryptString(formData.userType || ''),
            password: this.encryptString(formData.password || '')
        };

        // Simple console log for testing
        console.log('Encrypted data to send to API:', encryptedData);
        return encryptedData;
    }

    async registerUser(encryptedData) {
        try {
            console.log('=== SENDING TO API ===');
            console.log('Encrypted data:', encryptedData);
            console.log('JSON payload:', JSON.stringify(encryptedData, null, 2));
            
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(encryptedData)
            });

            console.log('=== API RESPONSE ===');
            console.log('Status:', response.status);
            console.log('Status Text:', response.statusText);
            console.log('Headers:', Object.fromEntries(response.headers.entries()));

            // Always try to get the response body for debugging
            let responseText;
            try {
                responseText = await response.text();
                console.log('Raw response body:', responseText);
            } catch (e) {
                console.log('Could not read response body:', e);
            }

            if (!response.ok) {
                let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                
                if (responseText) {
                    try {
                        const errorData = JSON.parse(responseText);
                        console.log('Parsed error data:', errorData);
                        errorMessage = errorData.error || errorData.message || errorMessage;
                        if (errorData.details) {
                            errorMessage += ` - Details: ${errorData.details}`;
                        }
                    } catch (parseError) {
                        console.log('Response is not JSON, raw text:', responseText);
                        errorMessage += ` - Server response: ${responseText.substring(0, 200)}`;
                    }
                }
                
                console.error('=== API ERROR ===');
                console.error('Error message:', errorMessage);
                throw new Error(errorMessage);
            }

            // Parse successful response
            let result;
            try {
                result = JSON.parse(responseText);
                console.log('=== SUCCESS ===');
                console.log('Parsed result:', result);
            } catch (parseError) {
                console.error('Could not parse success response as JSON:', responseText);
                throw new Error('Invalid JSON response from server');
            }
            
            return {
                success: true,
                userId: result.data?.id || result.userId || result.id || 'Unknown',
                message: result.message || 'Registration successful'
            };
        } catch (error) {
            console.error('=== REGISTRATION FAILED ===');
            console.error('Error:', error);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
            throw new Error(error.message || 'Failed to register user. Please try again.');
        }
    }

    // Legacy method for backward compatibility
    createLoginPayload(formData) {
        // API expects encryptedUsername and encryptedPassword
        return {
            encryptedUsername: this.encryptString(formData.username || ''),
            encryptedPassword: this.encryptString(formData.password || '')
        };
    }

    async loginUser(formData) {
        const payload = this.createLoginPayload(formData);
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const raw = await response.text();

            if (!response.ok) {
                let msg = `HTTP ${response.status}`;
                try {
                    const data = JSON.parse(raw);
                    msg = data.message || data.error || msg;
                } catch {
                    msg = `${msg} - ${raw.slice(0, 200)}`;
                }
                throw new Error(msg);
            }

            try {
                return JSON.parse(raw);
            } catch {
                throw new Error('Invalid JSON response from server');
            }
        } catch (error) {
            throw new Error(error.message || 'Login request failed');
        }
    }

    async extractPassword(encryptedText) {
        try {
            const response = await fetch('/api/echo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ encryptedText })
            });
            
            const data = await response.json();
            return data.password;
        } catch (error) {
            console.error('Password extraction failed:', error);
            throw new Error('Failed to extract password');
        }
    }
}