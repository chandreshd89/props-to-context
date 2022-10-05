import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserInfo() {
  const user = useContext(UserContext);

  return (
    <div className="user-info">
      <img
        className="user-avatar"
        src={user.data.avatarURL}
        width="50"
        height="50"
        alt="User Avatar"
      />
      <p>{user.data.name}</p>
    </div>
  );
}
