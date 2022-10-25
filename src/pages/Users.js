import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/tableContext";

function Users({ users }) {
  const { showUserPost } = useContext(Context);

  return (
    <div className="ms-5 col-5">
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th className="bg-light">
              <h3>Users</h3>
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            const userId = user.id;
            return (
              <tr key={userId}>
                <td
                  key={userId}
                  onClick={() => {
                    showUserPost({ userId });
                  }}
                >
                  <Link to="/userposts" style={{ textDecoration: "none" }}>
                    {user.name}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
