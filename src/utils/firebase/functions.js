import { db } from "./";
import { signInWithEmailAndPassword, sendPasswordResetEmail, signOut, getAuth, confirmPasswordReset, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getCustomErrorMessage } from "./errors";
import { v4 as uuidv4 } from 'uuid';

const uniqueId = uuidv4();

export const signUp = async (email, password, userData) => {
    const auth = getAuth();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;
        const user = userCredential.user;
        const userDoc = {
            id: userId,
            email: email,
            username: userData.username,
            createdAt: new Date(),
        };
        await setDoc(doc(db, 'users', userId), userDoc);
        await sendEmailVerification(user);
        return {
            status: 'success',
            message: 'Account created successfully, Please check your email inbox for email account verification ',
            data: { ...userData, userId },
        };
    } catch (error) {
        return {
            status: 'error',
            message: getCustomErrorMessage(error),
        };
    }
};

export const signIn = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const token = await user.getIdToken();
        localStorage.setItem('authUser', token);

        return {
            status: 'success',
            message: 'LoggedIn successfully',
            data: user,
        };
    } catch (error) {
        return {
            status: 'error',
            message: getCustomErrorMessage(error),
        };
    }
};



export const createSubscriptionDocument = async (userId, subscriptionData) => {
    try {
       
        const subscriptionsRef = doc(db, 'subscriptions', uniqueId);
        await setDoc(subscriptionsRef, subscriptionData); 
        return {
            status: 'success',
            message: 'Subscription initiated successfully!',
            data: subscriptionData,
        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message || 'Failed to initiate subscription!',
        };
    }
};
export const createContactUsDocument = async (contactData) => {
    try { 
        const contactRef = doc(db, 'contactUs', uniqueId);
 
        await setDoc(contactRef, contactData);
 
        return {
            status: 'success',
            message: "We will get back to you within an hour!",
            data: contactData,
        };
    } catch (error) { 
        return {
            status: 'error',
            message: error.message || "An error occurred while submitting your request. Please try again later.",
        };
    }
};

export const forgotPassword = async (email) => {
    try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email);
        return {
            status: 'success',
            message: 'Password reset email sent successfully, please check your email inbox',
        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message || 'Failed to send password reset email',
        };
    }
};

export const resetPassword = async (oobCode, newPassword) => {
    try {
        const auth = getAuth();
        await confirmPasswordReset(auth, oobCode, newPassword);
        return {
            status: 'success',
            message: 'Password reset successfully',
        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message || 'Failed to reset password',
        };
    }
};


export const signOutAuth = async () => {
    const auth = getAuth();
    try {
        await signOut(auth);
        localStorage.removeItem('authUser');
        return {
            status: 'success',
            message: 'User signed out successfully',
        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message || 'Failed to sign out',
        };
    }
};

