import React from "react";
import Header from "./Header";
import "./Home.css";
import pride from "./../../assets/11.jpg";
import ingredients from "./../../assets/2.png";
import Data from "../../Data";
import { useState } from "react";
import item1 from "./../../assets/item1.png";
import item2 from "./../../assets/item2.jpg";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const blogitems = Data.map((item) => {
    return (
      <div className="col-md-4">
        <div className="box">
          <img src={item.img} />
          <h5>{item.title}</h5>
          <span>Time: {item.time}</span>
          <h6>{item.price}</h6>
        </div>
        <button>
          <a href="#">Order Now</a>
        </button>
      </div>
    );
  });
  return (
    <>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2>5786+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>1440+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>7110+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={pride} alt={"pride"} title="prideimage" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Ensuring our clients' comfort is our top priority. Welcome to a
                dining experience like no other, where your satisfaction is our
                greatest achievement.
              </p>
              <button>
                <a href="#">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="ingredients">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                We source the finest, locally sourced ingredients to ensure that
                each bite is a burst of flavor and a caress for your taste buds.
                Our commitment to quality is unwavering, and it's our way of
                showing you how much we care about your dining experience.
              </p>
              <ul>
                <li>Craftsmanship Beyond Compare </li>
                <li>Taking care of quality </li>
                <li>A Dining Experience Like No Other </li>
              </ul>
              <button>
                <a href="#">Learn More</a>
              </button>
            </div>
            <div className="col-md-6">
              <img src={ingredients} alt="ingredients" />
            </div>
          </div>
        </div>
      </section>
      <section className="paralex">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                When a man's stomach is full it makes no
                <br /> difference whether he is rich or poor.
              </h2>
              <p>
                Together, we've created a tapestry of memories and friendships
                that enrich our story.
              </p>
              <a href="#">Watch our story</a>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h2>Explore Our Foods</h2>
              <p>
                Our journey wouldn't be complete without the incredible
                individuals who have supported us along the way.
                <br /> our staff, our patrons, and the vibrant community that
                surrounds us.
              </p>
            </div>
          </div>
          <div className="row">{blogitems}</div>
        </div>
      </section>
      <section className="sliders">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img src={item1} />
                  <br />
                  <Carousel.Caption>
                  <br />
                    <p className="caption-text-black">
                    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."
                    </p>
                    <span className="caption-text-black">Web Developer</span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={item2} />
                  <br />
                  <Carousel.Caption>
                  <br />
                    <p className="caption-text-black">
                    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."
                    </p>
                    <span className="caption-text-black">UI/UX designer</span>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
