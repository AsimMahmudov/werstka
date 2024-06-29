import React, { useEffect, useState } from "react";
import scss from "../header/Header.module.scss";
import logo from "../../../assets/Group 22.svg";
import BurgerMenu from "./BurgerMenu";

const links = [
  {
    name: "Блогерам",
    href: "/",
  },
  {
    name: "Рекламодателям",
    href: "/",
  },
  {
    name: "Кейсы",
    href: "/",
  },
  {
    name: "Контакты",
    href: "/",
  },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={logo} alt="logo" />
          </div>

          {isMobile ? (
            <>
              <button className={scss.bur} onClick={() => setIsOpen(!isOpen)}>
                Burger
              </button>
              <BurgerMenu links={links} isOpen={isOpen} />
            </>
          ) : (
            <>
              <div className={scss.nav}>
                <ul>
                  {links.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={scss.buutons}>
                <button>Оставить заявку</button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
