import { ReactNode, createContext, useMemo, useState } from "react";

export const AuthUser = createContext<any>(null);

export function AuthUserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  return <AuthUser.Provider value={contextValue}>{children}</AuthUser.Provider>;
}
