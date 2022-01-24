import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import { api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  id: string;
  name: string;
}

interface AuthState {
  accessToken: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserContextData {
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const useAuth = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem("@Doit:accessToken");
    const user = localStorage.getItem("@Doit:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    await api
      .post("/login", { email, password })
      .then((response) => {
        const { accessToken, user } = response.data;

        localStorage.setItem("@Doit:accessToken", accessToken);
        localStorage.setItem("@Doit:user", JSON.stringify(user));

        setData({ accessToken, user });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("Doit:accessToken");
    localStorage.removeItem("@Doit:user");

    setData({} as AuthState);
  }, []);

  return (
    <UserContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useAuth };
