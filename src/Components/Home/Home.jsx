import React from "react";
import Social from "./Social";
import "./Home.css";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import profileImage from "../../assets/profile.JPG";
const Home = () => {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />

            <div
              className="home__img"
              style={{ backgroundImage: `url(${profileImage})` }}
            ></div>

            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </div>
  );
};

export default Home;
