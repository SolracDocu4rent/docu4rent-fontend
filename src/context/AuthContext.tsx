import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';
import { useContext, createContext, useState, useEffect, useMemo, useCallback, ReactNode } from 'react';

import { auth } from '@/firebase/firebase';
import firebaseServiceInstance from '@/services/firebase.service';

const AuthContext = createContext<{
    user: User | null;
    emailSignIn: Function;
    logOut: Function;
  }>({
    user: null,
    emailSignIn: () => {},
    logOut: () => {},
  });

export const AuthContextProvider = ({ children }: { children?: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const emailSignIn = useCallback(async (email: string, password: string): Promise<User> => {
    console.log('email: ', email)
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  }, []);
  
  const logOut = useCallback(async (): Promise<void> => {
    window.sessionStorage.clear();
    signOut(auth);
  }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({
          user,
          emailSignIn,
          logOut,
        }),
        [
          user,
          emailSignIn,
          logOut,
        ]
      )}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
