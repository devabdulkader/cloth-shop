








"use client";

import { createContext, ReactNode, useState, useEffect } from "react";
import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";
import { useRouter } from "next/navigation";

// Define the shape of the AuthContext
interface AuthContextType {
  accountType: string | null;
  handleLogout: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userId: string | null;
}

// Define the type for the token payload (you can extend this based on the actual token structure)
interface TokenPayload {
  _id: string;
  accountType: string;
}

// Define the props type for the AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Create the context with default values
export const AuthContext = createContext<AuthContextType>({
  accountType: null,
  handleLogout: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  userId: null,
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accountType, setAccountType] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();
  const token = Cookies.get("accessKey");
  // console.log(token,"......")

  useEffect(() => {
    if (token) {
      try {
        // const decodedToken = jwtDecode<TokenPayload>(token); // Specify TokenPayload as the decode type
        setIsLoggedIn(true);
        // setUserId(decodedToken._id);
        // setAccountType(decodedToken.accountType);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, [token]);

  const handleLogout = () => {
    Cookies.remove("accessKey");
    // localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setAccountType(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider
    value={{ accountType, handleLogout, isLoggedIn, setIsLoggedIn, userId }}
  >
    {children}
  </AuthContext.Provider>

  )
};

export default AuthProvider;
















// 'use client'
// import {createContext} from 'react'
// import { ReactNode, useState, useContext } from "react";
// import { useRouter } from "next/navigation";

// // Define the shape of the AuthContext
// interface AuthContextType {
//   handleUserLogout: () => void;
//   isLoggedIn: boolean;
//   setIsLoggedIn: (value: boolean) => void;
//   // Add other context values if needed
// }

// // Create the context with default values
// export const AuthContext = createContext<AuthContextType>({
//   handleUserLogout: () => {},
//   isLoggedIn: false,
//   setIsLoggedIn: () => {},
// });

// // Define the props type for the AuthProvider
// interface AuthProviderProps {
//   children: ReactNode;
// }

// const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const router = useRouter();

//   const handleUserLogout = () => {
//     try {
//       // Perform any necessary logout actions (e.g., clear tokens, update server)
//       setIsLoggedIn(false);
//       router.push("/");
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ handleUserLogout, isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;