import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import Boy from "../../assets/boy.jpg";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((store) => store.user);
  console.log(user);
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social user={user?.user} />
          {user?.user?.img === "" ? (
            <img className="home__img" src={Boy} alt="userimage" />
          ) : (
            <img className="home__img" src={user?.user?.img} alt="userimage" />
          )}

          <Data user={user?.user} />
        </div>
      </div>
    </section>
  );
};

export default Home;
