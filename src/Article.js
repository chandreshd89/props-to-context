import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Article() {
  const user = useContext(UserContext);

  if (!user.isLogin) {
    throw new Error("Auth Failed");
  }
  return (
    <>
      <Link to="/articles">
        <h4 style={{ marginBottom: "1rem" }}>👈 Go back to articles</h4>
      </Link>
      <h1>
        The slug of the article is::: <b>{user.slug}</b>!
      </h1>
    </>
  );
}

export default Article;
