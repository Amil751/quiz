import jwtdecode, { JwtPayload } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalData } from "../../Context";
import { useTokenRefresher } from "../../services/useRefreshToken";
import { Login } from "../pages/Login";
export const Protected: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const { refreshToken, auth, setAuth, setRefreshToken } = useGlobalData();
  const token = localStorage.getItem("token");
  const time = Date.now();
  const { mutate } = useTokenRefresher();
 
  if (token) {
    if (token==='undefined') {
      localStorage.removeItem('token')
      navigate('/login')
      console.log('before')
    }
  
      const decode: JwtPayload = jwtdecode(token);
     console.log('decode',decode)
      console.log("token var");
      if (decode.exp && time > decode.exp * 1000) {
        // console.log("token expired");
        localStorage.clear();
        mutate(refreshToken, {
          onSuccess: (res) => {
            console.log("protected route", res.data.status);
            console.log("protected route", res);
            localStorage.setItem("token", res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
          },
          onError: (err: any) => {
            console.log("protected Error", err);
          },
        });
      }
  }

  // console.log(auth);
  return <>{auth ? children : navigate("/login")}</>;
};
