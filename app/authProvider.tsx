
"use client";
import { ReactNode, useState, useEffect } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

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


