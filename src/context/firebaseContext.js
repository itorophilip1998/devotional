import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../utils/firebase'; // Adjust the path to your Firebase configuration

// Create a Context for Auth
const AuthContext = createContext(null);

// Create a Provider component
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        // Function to fetch user details from Firestore
        const fetchUserDetails = async (userId) => {
            try {
                const userDocRef = doc(db, 'users', userId);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    setUserDetails(userDocSnap.data());
                } else {
                    setUserDetails(null);
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        // Set up an authentication state observer
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                // Fetch user details initially
                fetchUserDetails(currentUser.uid);

                // Set up an interval to fetch user details every minute
                const intervalId = setInterval(() => {
                    fetchUserDetails(currentUser.uid);
                },  1000); // 1 minute

                // Clean up the interval and auth observer on unmount
                return () => {
                    clearInterval(intervalId);
                    unsubscribe();
                };
            } else {
                setUser(null);
                setUserDetails(null);
            }
        });

        // Clean up the subscription on unmount
        return () => {
            unsubscribe();
        };
    }, []);

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
