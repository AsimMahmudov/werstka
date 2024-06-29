import React from "react";
import scss from "./Footer.module.scss";

import footlogo from "../../../assets/Group 22.png";
import footlogo2 from "../../../assets/Group 33.png";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.footer1}>
            <div className={scss.footbox1}>
              <img src={footlogo} alt="" />
              <p>
                С другой стороны рамки и место обучения кадров позволяет <br />{" "}
                оценить значение направлений прогрессивного развития!
              </p>
            </div>
            <div className={scss.footbox2}>
              <p>Остались вопросы?</p>
              <button>Почта</button>
            </div>
          </div>
          <div className={scss.footer2}>
            <a href="">Блогерам</a>
            <a href="">Рекламодателям</a>
            <a href="">Пользовательское соглашение</a>
            <a href="">Наши кейсы</a>
            <a href="">Помощь</a>
          </div>
          <div className={scss.footer3}></div>
          <div className={scss.footer4}>
            <p>© 2024 Elcho911. All rights reserved.</p>
            <img src={footlogo2} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
