import React, { useEffect } from "react";
import "./header.styles.scss";

export default function Header() {
  useEffect(() => {
    const toggleMenu = document.querySelector(".toggle_nav_content");
    const showMenu = document.querySelector(".menu");
    const list = document.querySelectorAll(".nav_list");

    list.forEach((element) => {
      element.addEventListener("click", () => {
        showMenu.classList.toggle("active");
        toggleMenu.classList.toggle("active");
      });
    });
  }, []);

  const handleToggleMenu = () => {
    const toggleMenu = document.querySelector(".toggle_nav_content");
    const showMenu = document.querySelector(".menu");

    toggleMenu.classList.toggle("active");
    showMenu.classList.toggle("active");
  };

  return (
    <header className="header">
      <div className="nav_container">
        <div className="nav_logo">Yurtik</div>
        <div className="toggle_nav_content" onClick={handleToggleMenu}></div>
        <div className="menu">
          <ul>
            <li className="nav_list">
              <a href="#Home">Home</a>
            </li>
            <li className="nav_list">
              <a href="#About">About</a>
            </li>
            <li className="nav_list">
              <a href="#Skills">Skills</a>
            </li>
            <li className="nav_list">
              <a href="#Projects">Projects</a>
            </li>
            <li className="nav_list">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
