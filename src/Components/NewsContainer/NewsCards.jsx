import React from "react";

function NewsCards({ newsValues }) {
  return (
    <>
      <div
        className="card"
        style={{ backgroundImage: `url(${newsValues.imageUrl})` }}
      >
        <a target="_blank" href={newsValues.url}>
          <div className="card-text-details">
            <h1>{newsValues.title}</h1>
            <p>Date: {newsValues.date}</p>
            <p>Time: {newsValues.time}</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default NewsCards;
