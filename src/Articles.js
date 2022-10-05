import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Articles() {
  const user = useContext(UserContext);
  if (!user.isLogin) {
    return <h2>You are not logged In</h2>;
  }

  return (
    <ul className="articles">
      {user.data.map((article, index) => (
        <li key={index}>
          <Link to={"articles/" + article.slug}>
            <h3>{article.title}</h3>
          </Link>
          <small>{article.author}</small>
        </li>
      ))}
    </ul>
  );
}

export default Articles;
