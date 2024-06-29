import React from "react";
import scss from "./Hero.module.scss";
import heroimg1 from "../../assets/Rectangle 5.png";
import heroimg2 from "../../assets/Frame 25.png";
import morgen from "../../assets/morgen.png";
import kaseimg1 from "../../assets/Group 5.png";
import kaseimg2 from "../../assets/Group 6.png";
import kaseimg3 from "../../assets/Group 7.png";
import kaseimg4 from "../../assets/Group 8.png";

import boximg1 from "../../assets/Frame 16.png";
import boximg2 from "../../assets/Frame 17.png";
import boximg3 from "../../assets/Frame 18.png";
import boximg4 from "../../assets/Frame 19.png";

import bren from "../../assets/Group 4.png";

const Hero = () => {
  return (
    <>
      <section id={scss.hero}>
        <div className="container">
          <div className={scss.content}>
            <p>Рекламное агенство ADVUP</p>
            <div className={scss.herotext}>
              <h1>
                Новый поток клиентов <br /> Вашему продукту
              </h1>
              <img src={heroimg1} alt="" />
              <button>Приступим</button>
            </div>
            <div className={scss.heroimage}>
              <img src={heroimg2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id={scss.kase}>
        <div className="container">
          <img className={scss.brend} src={bren} alt="" />
          <div className={scss.content}>
            <h2>Наши кейсы</h2>
            <div className={scss.big}>
              <div className={scss.bigimg}>
                <img src={morgen} alt="" />
              </div>
              <div className={scss.bigtext}>
                <div className={scss.bigp}>
                  <p>🔥</p>
                  <p>Игры</p>
                  <p>Коллабарация</p>
                </div>
                <h1>
                  Игровой проект <br /> War Thunder X ДУЛО
                </h1>
                <p>
                  Разнообразный и богатый опыт консультация с профессионалами из
                  IT играет важную роль в формировании всесторонне
                  сбалансированных нововведений. Значимость этих проблем
                  настолько очевидна, что новая модель организационной.
                </p>
                <button>Подробнее</button>
              </div>
            </div>
            <div className={scss.reyt}>
              <div className={scss.rey}>
                <div className={scss.reybox}></div>
                <div className={scss.reytext}>
                  <p>просмотры</p>
                  <h1>20.000+</h1>
                </div>
              </div>

              <div className={scss.reyline}></div>

              <div className={scss.rey}>
                <div className={scss.reybox}></div>
                <div className={scss.reytext}>
                  <p>Лайков</p>
                  <h1>20.000+</h1>
                </div>
              </div>

              <div className={scss.reyline}></div>

              <div className={scss.rey}>
                <div className={scss.reybox}></div>
                <div className={scss.reytext}>
                  <p>охваты</p>
                  <h1>20.000+</h1>
                </div>
              </div>
            </div>
            <div className={scss.kaseblock}>
              <div className={scss.kasebox}>
                <div className={scss.ic}></div>
                <img src={kaseimg1} alt="" />
                <img src={kaseimg2} alt="" />
                <img src={kaseimg3} alt="" />
                <img src={kaseimg4} alt="" />
                <div className={scss.ic}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={scss.block}>
        <div className="container">
          <h1>Наши преимущества</h1>
          <div className={scss.box}>
            <img className={scss.boximg1} src={boximg1} alt="" />
            <img className={scss.boximg2} src={boximg2} alt="" />
          </div>
          <div className={scss.box}>
            <img className={scss.boximg3} src={boximg3} alt="" />
            <img className={scss.boximg4} src={boximg4} alt="" />
          </div>
        </div>
      </section>

      <section id={scss.final}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.finaltext}>
              <h1>Оставить заявку</h1>
              <p>
                Рекламные агентства имеют опыт работы в разных отраслях и <br />{" "}
                знают, как эффективно привлекать целевую аудиторию.
              </p>
            </div>

            <div className={scss.finalbtn}>
              <h4>Кто по жизни?</h4>
              <div className={scss.btn}>
                <button className={scss.btn1}>Блогер</button>
                <button className={scss.btn2}>Рекламодатель</button>
              </div>
            </div>

            <div className={scss.finint}>
              <div className={scss.finbox}>
                <h4>Ваше имя</h4>
                <input placeholder="Введите ваше имя" type="text" />
              </div>

              <div className={scss.finbox}>
                <h4>Почта</h4>
                <input placeholder="Введите электронную почту" type="text" />
              </div>

              <div className={scss.finbox}>
                <h4>Телефон</h4>
                <input placeholder="Введите ваш номер телефона" type="text" />
              </div>

              <div className={scss.finbox}>
                <h4>Комментарий</h4>
                <input
                  className={scss.intfin}
                  placeholder="Введите ваш номер телефона"
                  type="text"
                />
              </div>

              <div className={scss.finish}>
                <button>Отправить</button>
                <p>
                  Нажав на кнопку, вы соглашаетесь <br /> на обработку
                  персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
