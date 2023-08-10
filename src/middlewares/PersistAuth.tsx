import { AuthUser } from "contexts/AuthUser";
import { useFetch } from "hooks/useFetch";
import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getCookie } from "typescript-cookie";

export default function PersistAuth() {
  const { user, setUser } = useContext(AuthUser);

  const { loading, data } = useFetch({
    url: "https://test.3scorers.com/api/v1/profile/get-profile-by-user-id",
    headers: {
      Authorization: `Bearer ${getCookie("token") || getCookie("accessToken")}`,
    },
    mode: "cors",
  });

  useEffect(() => {
    if (data) {
      console.log({ loading, data });
      setUser({
        from: "persist",
        token: getCookie("token"),
        accessToken: getCookie("accessToken"),
        ...data,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <>{user && <Outlet />}</>;
}
