// Reusable message components - Single Responsibility Principle

export const ErrorMessage = ({ error }) => {
    if (!error) return null;
    return (
        <div className="error-message" style={{
            color: 'red', 
            fontSize: '12px', 
            marginTop: '4px',
            fontWeight: '500'
        }}>
            {error}
        </div>
    );
};

export const SuccessMessage = ({ message }) => {
    if (!message) return null;
    return (
        <div className="success-message" style={{
            color: 'green', 
            fontSize: '14px', 
            marginBottom: '16px', 
            padding: '8px', 
            backgroundColor: '#f0f8f0', 
            borderRadius: '4px',
            border: '1px solid #d4edda'
        }}>
            {message}
        </div>
    );
};