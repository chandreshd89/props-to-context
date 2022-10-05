import Card from "./Card";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Home() {
  const user = useContext(UserContext);

  return (
    <>
      <h1 className="center">🚀 Welcome to Homepage!</h1>
      {user.isLogin ? (
        <Card />
      ) : (
        <p className="center m5">Please Login to display user</p>
      )}
    </>
  );
}

export default Home;
