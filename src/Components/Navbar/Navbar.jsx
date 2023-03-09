import React, { useContext } from "react";
import { contextCategory } from "../../App";
import "./Navbar.css";

function Navbar() {
  const Category = useContext(contextCategory);

  function menuOpenCloseMenu() {
    const menu = document.querySelector(".mobile-nav");
    menu.classList.toggle("menu-active");
  }

  function changeCategory(category) {
    Category.setCategory(category);
  }

  return (
    <>
      <nav className="navbar">
        <p className="nav-logo">DailyFix</p>
        <ul className="nav-links">
          <li onClick={() => changeCategory("all")}>All</li>
          <li onClick={() => changeCategory("sports")}>Sports</li>
          <li onClick={() => changeCategory("world")}>World</li>
          <li onClick={() => changeCategory("technology")}>Technology</li>
          <li onClick={() => changeCategory("startup")}>Startup</li>
          <li onClick={() => changeCategory("entertainment")}>Entertainment</li>
          <li className="more-news-link">
            More <i className="fa-solid fa-caret-down"></i>
            <div className="more-news-container">
              <ul>
                <li onClick={() => changeCategory("business")}>Business</li>
                <li onClick={() => changeCategory("miscellaneous")}>
                  Miscellaneous
                </li>
                <li onClick={() => changeCategory("politics")}>Politics</li>
                <li onClick={() => changeCategory("science")}>Science</li>
                <li onClick={() => changeCategory("automobile")}>Automobile</li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="menu-icon">
          <i className="fa-solid fa-bars" onClick={menuOpenCloseMenu}></i>
        </div>
      </nav>
      <div className="mobile-nav-container">
        <nav className="mobile-nav">
          <div className="mobile-nav-elements">
            <ul onClick={menuOpenCloseMenu}>
              <li onClick={() => changeCategory("all")}>All</li>
              <li onClick={() => changeCategory("sports")}>Sports</li>
              <li onClick={() => changeCategory("world")}>World</li>
              <li onClick={() => changeCategory("startup")}>Startup</li>
              <li onClick={() => changeCategory("politics")}>Politics</li>
              <li onClick={() => changeCategory("science")}>Science</li>
              <li onClick={() => changeCategory("business")}>Business</li>
              <li onClick={() => changeCategory("technology")}>Technology</li>
              <li onClick={() => changeCategory("automobile")}>Automobile</li>
              <li onClick={() => changeCategory("entertainment")}>
                Entertainment
              </li>
              <li onClick={() => changeCategory("miscellaneous")}>
                Miscellaneous
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
