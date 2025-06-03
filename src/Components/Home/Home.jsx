import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import imageUrl from "../homepageimages.json";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <div className="left">
          <h1>Find Your New Best Friend</h1>
          <p>
            When you adopt, you're not just saving a life — you're gaining a
            companion <br />
            who will fill your home with love and loyalty. Let's make more
            <br /> tails wag and hearts smile.
          </p>
          <button className="adopt" onClick={() => navigate("/pets")}>
            Adopt Now!
          </button>
        </div>
        <img src={imageUrl.homeImage} alt="HomeImage" className="mainpic" />
      </div>

      <div className="section-heading">
        <h1>What you can do?</h1>
      </div>

      <div className="works">
        <div className="doings">
          <div className="dos">
            <img src={imageUrl.doingsFirst} alt="PetImage" className="pic" />
            <h3 className="des">Adopt</h3>
            <p>
              Add a new member <br />
              to your family.
            </p>
          </div>
          <div className="dos">
            <img src={imageUrl.doingsSecond} alt="PetImage" className="pic" />
            <h3 className="des">Donate</h3>
            <p>
              Change lives one <br />
              penny at a time.
            </p>
          </div>
          <div className="dos">
            <img src={imageUrl.doingsThird} alt="PetImage" className="pic" />
            <h3 className="des">Foster</h3>
            <p>
              Shelter until you <br /> can with our help.
            </p>
          </div>
          <div className="dos">
            <img src={imageUrl.doingsFour} alt="PetImage" className="pic" />
            <h3 className="des">Volunteer</h3>
            <p>
              Help out with events <br /> and fundraisers.
            </p>
          </div>
        </div>
      </div>

      <div className="section-heading">
        <h1>Adopt a pet Don't Shop!</h1>
      </div>

      <div className="shop">
        <p>
          If you are an animal lover and looking to get a pet <br />
          for your home, consider adopting one. There are many wonderful pets{" "}
          <br />
          waiting for you to take them home.
          <br />
          <button className="adopt" onClick={() => navigate("/pets")}>
            Adopt Now!
          </button>
        </p>
        <img src={imageUrl.shopPet} alt="PetImage" className="secondpic" />
      </div>
    </>
  );
};

export default Home;
