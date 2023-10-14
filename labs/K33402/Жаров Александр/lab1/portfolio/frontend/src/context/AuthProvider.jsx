import { createContext, useState } from "react";


// Создаем контекст с типом AuthContextType и начальными значениями по умолчанию
const AuthContext = createContext({
  isAuthenticated: true,
  setAuth: () => { },
});

// Создаем компонент провайдера, который предоставляет данные контекста всем дочерним компонентам
export const AuthProvider = ({ children }) => {
  // Используем хук useState для создания переменной isAuthenticated и функции setAuth для ее изменения
  const [isAuthenticated, setAuth] = useState(true);
  
  // Возвращаем контекст провайдера, передавая значения isAuthenticated и setAuth в качестве значения контекста
  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;