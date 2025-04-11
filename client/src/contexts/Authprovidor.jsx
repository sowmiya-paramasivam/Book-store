import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged, GoogleAuthProvider,signInWithPopup, signInWithEmailAndPassword, signOut} from "firebase/auth";


export const AuthContext = createContext();
  const auth =getAuth(app)
  const googleprovider = new GoogleAuthProvider();

const Authprovidor = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
    
    const createuser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginwithgoogle = ()=>{
       setLoading(true);
       return signInWithPopup(auth,googleprovider)
    }

    const login = (email, password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const logout =() =>{
      return signOut(auth)
    }

    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth,currentuser =>{
     setUser(currentuser)
     setLoading(false);
      })
      return () =>{
        return unsubscribe();
      }
  }, []);
  

    const authinfo ={
        user,
        loading,
        createuser,
        loginwithgoogle,
        login,
        logout
    }
  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default Authprovidor
