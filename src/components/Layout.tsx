import NavBar from './Navbar';
import Footer from './Footer';
import { navbarPropsData } from "/Documents and Settings/Usuario/Downloads/Lanchonete Quevedo/src/lib/data.ts";

import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col webkit-scrollbar">
      <NavBar {...navbarPropsData} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}