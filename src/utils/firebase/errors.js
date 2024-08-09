export const getCustomErrorMessage = (error) => {
    const errorCode = error.code;

    const errorMessages = {
        'auth/missing-password': 'Password is required. Please enter your password.',
        'auth/invalid-email': 'The email address is not valid. Please enter a valid email address.',
        'auth/email-already-in-use': 'This email is already in use. Please try logging in or resetting your password.',
        'auth/weak-password': 'The password is too weak. Please use a stronger password.',
        'auth/invalid-credential': 'Invalid Credential: Please use forgot password to recover your account or contact us',
        // Add more custom error messages here based on the Firebase error codes
        default: 'An error occurred. Please try again.',
    };

    return errorMessages[errorCode] || errorMessages.default;
};
