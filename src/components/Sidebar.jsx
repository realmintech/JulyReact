import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside style={{ backgroundColor: "green", color: "white", width:"300px", padding:"20px" }}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="profile">Profile</Link>
        </div>
        <div>
          <Link to="users">Users</Link>
        </div>
        <div>
          <Link to="settings">Setting</Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
