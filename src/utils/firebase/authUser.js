import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useQuery } from '@tanstack/react-query';
import { auth, db } from './';



export const useUserDetails = (userId) => {
    return useQuery({
        queryKey: ['userDetails', userId],
        queryFn: () => fetchUserDetails(userId),
        enabled: !!userId,
        refetchInterval: 6000, 
    }
    );
};

export const fetchUserDetails = async (userId) => {
    if (!userId) {
        throw new Error('No user ID provided');
    }

    const userDocRef = doc(db, 'users', userId);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
        return userDocSnap.data();
    } else {
        throw new Error('User details not found');
    }
};


export const useAuthUser = () => {
    return useQuery({
        queryKey: ['authUser'],
        queryFn: () =>
            new Promise((resolve, reject) => {
                const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                    if (currentUser) {
                        resolve(currentUser);
                    } else {
                        resolve(null);  
                    }
                    unsubscribe();  
                }, reject);  
            }),
        refetchOnWindowFocus: false,
        refetchInterval: 6000,  
    });
};
