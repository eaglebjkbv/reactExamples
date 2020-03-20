import React from "react";
import { MyContext } from "./context/UserContext";

function Users(props) {
  return (
    <MyContext.Consumer>
      {value => {
        const { users } = value;
        return (
          <div>
            {users.map(user => {
              return <p key={user.id}>{user.name}</p>;
            })}
          </div>
        );
      }}
    </MyContext.Consumer>
  );
}
export default Users;
