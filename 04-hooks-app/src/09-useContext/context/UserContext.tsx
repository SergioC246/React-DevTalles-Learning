import {
  type PropsWithChildren,
  createContext,
  useState,
} from 'react';
import { users, type User } from '../data/user-mock.data';

type AuthStatus = 'authenticated' | 'not-authenticated';

interface UserContextProps {
  authStatus: AuthStatus;
  user: User | null;
  isAuthenticated: boolean;
  login: (userId: number) => boolean;
  logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUserId = localStorage.getItem('userId');
    if (!storedUserId) return null;
    return users.find((u) => u.id === +storedUserId) ?? null;
  });

  const [authStatus, setAuthStatus] = useState<AuthStatus>(() => {
    const storedUserId = localStorage.getItem('userId');
    if (!storedUserId) return 'not-authenticated';
    const exists = users.some((u) => u.id === +storedUserId);
    return exists ? 'authenticated' : 'not-authenticated';
  });

  const handleLogin = (userId: number) => {
    const foundUser = users.find((u) => u.id === userId);
    if (!foundUser) {
      setUser(null);
      setAuthStatus('not-authenticated');
      return false;
    }

    setUser(foundUser);
    setAuthStatus('authenticated');
    localStorage.setItem('userId', userId.toString());
    return true;
  };

  const handleLogout = () => {
    setAuthStatus('not-authenticated');
    setUser(null);
    localStorage.removeItem('userId');
  };

  return (
    <UserContext.Provider
      value={{
        authStatus,
        isAuthenticated: authStatus === 'authenticated',
        user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};