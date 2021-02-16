import React, {createContext, useCallback, useContext, useState} from 'react';
import api from '../services/api'

interface AuthState {
  token: string;
  user: Object;
}

interface SignInCredentials {
  email: string;
  password: string
}

interface AuthContextData {
  user: Object;
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@LigPop:token')
    const user = localStorage.getItem('@LigPop:user')

    if (token && user) return {token, user: JSON.parse(user)}
    return { } as AuthState
  })

  const signIn = useCallback(async ({email, password}: SignInCredentials) => {
    const response = await api.post<{token: string, user: Object}>('sessions', {
      email,
      password
    })
    const { token, user } = response.data;
    localStorage.setItem('@LigPop:token', token)
    localStorage.setItem('@LigPop:user', JSON.stringify(user))

    setData({token, user})
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@LigPop:token');
    localStorage.removeItem('@LigPop:user');

    setData({} as AuthState);
  }, [])

  return (
    <AuthContext.Provider value={{user: data.user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  if(!context) throw new Error('useAuth must be used within a AuthProvider');
  return context
}

export { AuthProvider, useAuth };
