import "./Headlines.css";
import React from "react";

function Headlines() {
  return (
    <>
      <swiper-container
        className="mySwiper"
        space-between="30"
        centered-slides="true"
        autoplay-delay="2500"
        autoplay-disable-on-interaction="false"
      >
        <swiper-slide>
          <div className="img-text-details">
            <h1>Stay Up-to-Date with the Latest News</h1>
            <p>
              Daily Fix: Stay informed with the latest news. Our website
              provides reliable and accurate news stories as they happen,
              keeping you up-to-date with current events from around the world.
              Visit us today to explore our categories and never miss a beat.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="img-text-details">
            <h1>Breaking News at Your Fingertips</h1>
            <p>
              Daily Fix: Reliable breaking news at your fingertips. Stay
              informed with our quick and convenient website that provides the
              latest news stories from around the world. Visit us for reliable
              and accurate news updates as they happen.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="img-text-details">
            <h1>The Fastest Way to Get the Latest News Updates</h1>
            <p>
              Daily Fix: Fast and reliable news updates. Stay informed with the
              latest news stories from around the world on our website. Visit us
              now for accurate and efficient news updates as they happen.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="img-text-details">
            <h1>News That Matters, Anytime, Anywhere</h1>
            <p>
              Daily Fix: News that matters, anytime, anywhere. Our website
              provides access to reliable news stories that matter from around
              the world, on-the-go or at home. Get up-to-date with breaking news
              and visit us now for the latest and most relevant news updates.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="img-text-details">
            <h1>Your Personal News Concierge</h1>
            <p>
              Daily Fix: Your personal news concierge. Our website provides a
              curated selection of reliable news stories from around the world,
              tailored to your preferences. Stay informed with breaking news and
              visit us now for a personalized news experience.
            </p>
          </div>
        </swiper-slide>
      </swiper-container>
    </>
  );
}

export default Headlines;
