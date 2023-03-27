import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: 'green',
    fontsize: 21,
  };

  return (
    <>
      <Outlet />
      <ul>
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
           to="/articles/2"
           style={({ isActive }) => (isActive ? activeStyle : undefined)}
           >
            게시글 2
           </NavLink>
        </li>
        <li>
          <NavLink
           to = "/articles/3"
           style={({ isActive}) => (isActive ? activeStyle : undefined)}
           >
            게시글 3
           </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Articles;
