import { createContext, useContext, useEffect, useState } from "react";

interface UserData {
  userId: string;
  username: string;
  email: string;
  number?: string;
  description?: string;
  picture?: string;
  createdAt?: string;
  lastLogin?: string;
  timePlayed?: number;
  level?: number;
  exp?: number;
  state?: boolean;
  friends?: string[];
}

interface AuthContextType {
    user: UserData | null;
    token: string | null;
    login: (token: string, user: UserData) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserData | null>(null);
    const [token, setToken] = useState<string | null>(null);

    //Cargar Sesion
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");

        if (savedToken && savedUser) {
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }
    }, []);

    //Guardar Sesion
    const login = (token: string, user: UserData) => {
        setToken(token);
        setUser(user);

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
    };

    //Cerrar Sesion
    const logout = () => {
        setToken(null);
        setUser(null);

        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
    return ctx;
}