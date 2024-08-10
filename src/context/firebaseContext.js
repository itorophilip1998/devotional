import React, { createContext } from 'react';
import { useAuthUser, useUserDetails } from '../utils/firebase/authUser';

// Create a Context for Auth
const AuthContext = createContext(null);

// Create a Provider component
const AuthProvider = ({ children }) => {
    const { data: user } = useAuthUser();
    const userId = user?.uid;
    const { data: userDetails } = useUserDetails(userId); 
    
    return (
        <AuthContext.Provider value={{ user, userDetails }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the Auth Context
const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
