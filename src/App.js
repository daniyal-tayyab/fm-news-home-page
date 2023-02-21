import { useState } from "react";

import logo from "./images/logo.svg";
import menuIcon from "./images/icon-menu.svg";
import MenuDrawer from "./components/MenuDrawer";

import { newData, cardData } from "./utils/data";
import BlogCard from "./components/BlogCard";

import heroImage from "./images/image-web-3-desktop.jpg";

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className="home">
      <MenuDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className="news-page">
        <header className="news-page__header">
          <div className="logo-box">
            <img src={logo} alt="logo" />
          </div>
          <nav className="news-page__header__navigation">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </nav>
          <img
            className="icon-menu"
            src={menuIcon}
            alt="icon-menu"
            onClick={toggleDrawer}
          />
        </header>
        <main className="news-page__body">
          <div className="news-page__body__content">
            <div className="news-page__body__content__main">
              <div className="news-page__body__content__main__head">
                <img src={heroImage} alt="hero" />
              </div>
              <div className="news-page__body__content__main__content">
                <div className="news-page__body__content__main__content__left">
                  <h4>The Bright Future of Web 3.0?</h4>
                </div>
                <div className="news-page__body__content__main__content__right">
                  <p>
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of
                    people. But it is really fulfilling its possible?
                  </p>
                  <button className="btn">read more</button>
                </div>
              </div>
            </div>
            <div className="news-page__body__content--sidebar">
              <h4>New</h4>
              {newData.map(({ title, description }, index) => (
                <div>
                  <p>{title}</p>
                  <span>{description}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="news-page__body__footer">
            {cardData.map((item, index) => (
              <BlogCard key={index} item={item} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

// <div className="news-page__body__footer">
//   {cardData.map((item, index) => (
//     <BlogCard key={index} item={item} />
//   ))}
// </div>;
