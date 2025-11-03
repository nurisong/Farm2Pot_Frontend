import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import AdminLogin from "../gate/AdminLogin";
import About from "./About";
import Profile from "./Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogin />, // 로그인 페이지 라우트
  },
  {
    path: "/admin/login",
    element: <AdminLogin />, // 로그인 페이지 라우트
  },
  // 관리자 페이지
  {
    path: "/admin",
    element: <AdminLogin />, // <Outlet /> 포함
    children: [
      { index: true, element: <AdminLogin /> }, // /
      { path: "main", element: <AdminLogin /> }, // /main
      { path: "about", element: <About /> }, // /about
      { path: "profile", element: <Profile /> }, // /profile
    ],
  },
]);

// 루트에 라우터 제공
// !는 이 값은 절대 null이 아니다라고 TypeScript에게 말해주는 문구임
// 이 파일에서는 export만 합니다 (렌더링은 main.tsx에서)
export default function RouteSetup() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
