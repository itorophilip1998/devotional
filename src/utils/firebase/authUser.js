import { onAuthStateChanged } from 'firebase/auth';  
import { auth } from './';  

const getAuthenticatedUser = (setUser) => { 
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser(currentUser);
        } else {
            setUser(null);
        }
    });
 
    return () => unsubscribe();
};

export default getAuthenticatedUser;
