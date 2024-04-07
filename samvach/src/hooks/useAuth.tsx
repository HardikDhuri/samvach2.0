import Keycloak from "keycloak-js";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const client = new Keycloak({
      url: import.meta.env.VITE_KEYCLOCK_URL,
      realm: import.meta.env.VITE_KEYCLOCK_REALM,
      clientId: import.meta.env.VITE_KEYCLOCK_CLIENT,
    });

    client.init({onLoad: "login-required"}).then((res) => setIsLogin(res));

  }, []);

  return isLogin;
};
