// Root.tsx
import { Link, Outlet } from "react-router-dom";

export default function BaseRoute() {
  return (
    <div>
      <h1>밭to밥</h1>
      {/* 네비게이션 링크 추가 */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "10px" }}>
          About
        </Link>
        <Link to="/profile">Profile</Link>
      </nav>

      {/* 하위 라우트들이 여기에 렌더링됨 */}
      <Outlet />
    </div>
  );
}
