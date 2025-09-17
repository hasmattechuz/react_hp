// AuthContext.tsx
import { createContext, useState, useEffect, type ReactNode } from "react";

interface User {
  name: string;
  email: string;
  password: string; // ✅ only for demo, not secure
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean; // ✅ track loading
}

// --- Context ---
export const AuthContext = createContext<AuthContextType | null>(null);

// --- Provider ---
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore user from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // --- SIGNUP ---
  const signup = async (name: string, email: string, password: string) => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    // check if user already exists
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      throw new Error("User already exists. Please login.");
    }

    function generateToken(): string {
      return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }

    const newUser: User = {
      name,
      email,
      password,
      token: generateToken(), // simple token generation // ✅ only for demo
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // auto login after signup
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  // --- LOGIN ---
  const login = async (email: string, password: string) => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error("Invalid credentials or account not found.");
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    setUser(foundUser);
  };

  // --- LOGOUT ---
  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const value = { user, login, signup, logout, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
