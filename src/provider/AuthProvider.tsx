import AuthContext, { UserType } from "../context/AuthContext";
import { useState } from "react";
import axiosApi, { axiosTokenApi } from "../utils/axios";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType>({
    email: null,
    password: null
  });

  const signin = (newUser: UserType, callback: VoidFunction):Promise<boolean> => {
    return axiosApi
      .post(``, newUser) //login api router
      .then(res => {
        setUser({
          email: newUser.email,
          password: ''
        });

        localStorage.setItem('access_token', res.data.access_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);

        callback();
        return true;
      })
      .catch(() => {
        setUser({
          email: null,
          password: null
        });
        return false;
      });
  };

  const signout = (callback: VoidFunction) => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser({
      email: null,
      password: null
    });
    callback();
  };

  const checkToken = async (): Promise<boolean | undefined> => {
    const access_token: string | null = localStorage.getItem('access_token');
    const refresh_token: string | null = localStorage.getItem('refresh_token');

    if (access_token === null || refresh_token === null) {
      return false;
    }

    const resetUserAndTokens = () => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      setUser({
        email: null,
        password: null
      });
    };

    const payload = {
      access_token: access_token
    };

    return axiosTokenApi
      .post(``, payload) //token checout api router
      .then(res => {
        setUser({
          email: res.data.email,
          password: ''
        });
        return true;
      })
      .catch(err => {
        if (err.response && err.response.status !== 403) {
          axiosApi
            .post(``, { refresh_token })  //get refrech token api router
            .then(res => {
              axiosTokenApi
                .post(``, {access_token: res.data.access_token})  //token checout api router
                .then(res => {
                  setUser({
                    email: res.data.email,
                    password: ''
                  });
                  return true;
                })
                .catch(() => {
                  resetUserAndTokens();
                  return false;
                });
            })
            .catch(() => {
              resetUserAndTokens();
              return false;
            });
        } else {
          resetUserAndTokens();
          return false;
        }
      });
  }

  const value = { user, signin, signout, checkToken };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}