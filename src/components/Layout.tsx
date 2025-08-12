import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col webkit-scrollbar">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}