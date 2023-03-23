import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{background: 'lightgray', padding: 16, fontsize: 24}}>
        header
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;