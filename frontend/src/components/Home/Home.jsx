import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import Boy from "../../assets/boy.jpg";

const Home = ({ user }) => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social user={user} />
          {user?.img === "" ? (
            <img className="home__img" src={Boy} alt="userimage" />
          ) : (
            <img className="home__img" src={user?.img} alt="userimage" />
          )}

          <Data user={user} />
        </div>
      </div>
    </section>
  );
};

export default Home;
