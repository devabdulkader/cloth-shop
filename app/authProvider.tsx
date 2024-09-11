
"use client";
import { ReactNode, useState, useEffect } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
interface AuthContextType {
  accountType: string | null;
  handleLogout: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  userId: string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}
interface DecodedToken {
  id: string; 
}

export const AuthContext = createContext<AuthContextType>({
  accountType: null,
  handleLogout: () => { },
  isLoggedIn: false,
  setIsLoggedIn: () => { },
  userId: null,
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accountType, setAccountType] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();
  const token = Cookies.get("accessKey");

  

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        console.log(decodedToken?.id)
        setUserId(decodedToken?.id)
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, [token]);

  const handleLogout = () => {
    Cookies.remove("accessKey");
    Cookies.remove("user")
    setIsLoggedIn(false);
    setUserId(null);
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


