import React, { useEffect, useState, useContext } from "react";
import NewsCards from "./NewsCards";
import Loading from "./Loading";
import LoadingBar from "react-top-loading-bar";
import { contextCategory } from "../../App";

import "./NewsContainer.css";

function NewsContainer() {
  const Category = useContext(contextCategory);

  const [progress, setProgress] = useState(0);
  const [dataValues, setDataValues] = useState();

  useEffect(() => {
    setProgress(10);
    let newsData = fetch(
      `https://inshorts.deta.dev/news?category=${Category.category}`
    );
    newsData
      .then((textData) => {
        setProgress(50);
        return textData.json();
      })
      .then((textValue) => {
        setDataValues(textValue.data);
        setProgress(100);
      });
  }, [Category.category]);

  return (
    <>
      <LoadingBar
        color="#3bb979"
        style={{ height: "3px" }}
        progress={progress}
      />
      <div className="news-container">
        <h1 className="head-line-text">Top Head lines</h1>
        <div className="news-card-container">
          {dataValues ? (
            dataValues.map((value, index) => {
              return <NewsCards key={index} newsValues={value} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}

export default NewsContainer;
