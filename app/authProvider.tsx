
"use client";
import { ReactNode, useState, useEffect, useId } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
interface AuthContextType {
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
  handleLogout: () => { },
  isLoggedIn: false,
  setIsLoggedIn: () => { },
  userId: null,
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();
  const token = Cookies.get("accessKey") ;


  console.log({useId})

  useEffect(() => {
    if (token) {
      try {
        const decodedToken =  jwtDecode<DecodedToken>(token) ;
        setUserId(decodedToken.id);
        console.log({decodedToken})
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
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ handleLogout, isLoggedIn, setIsLoggedIn, userId }}
    >
      {children}
    </AuthContext.Provider>

  )
};

export default AuthProvider;


