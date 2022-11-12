import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(["Partidos", "Grupos", "Messi", "Rustico"]);

  return (
    <div>
      <p>
        {menu.map((option) => (
          <Link key={option} to={"/" + option.toLocaleLowerCase()}>
            {option}{" "}
          </Link>
        ))}
      </p>
    </div>
  );
};

export default NavBar;
