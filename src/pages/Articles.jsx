import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <Outlet />
      <ul>
        <ArticleItem id = {1} />
        <ArticleItem id = {2} />
        <ArticleItem id = {3} />
      </ul>
    </>
  );
};

const ArticleItem = ({ id }) => {
  const acticeStyle = {
    color: 'green',
    fontsize: 21,
  };

  return (
    <li>
      <NavLink
       to = {`/articles/${id}`}
       style = {({ isActive }) => (isActive ? acticeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  )
}

export default Articles