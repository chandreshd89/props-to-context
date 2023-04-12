import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Card() {
  const user = useContext(UserContext);
  console.log(user.avatarURL);
  return (
    <div className="card">
      <div className="card-info">
        <img
          src={user.userInfo.avatarURL}
          alt="Avatar"
          style={{ width: "50%", height: "50%" }}
        />
        <h4>
          <b>{user.userInfo.name}</b>
        </h4>
      </div>
      <p>{user.userInfo.description}</p>
    </div>
  );
}
