import React from "react";

export default function Cards(props) {
  return (
    <div>
      <div className="cards-container">
        <div className="cards">
          {props.arr.map((elem) => {
            return (
              <div className="tp-card">
                <img src={elem.thumbnail}></img>
                <p>⭐️ {elem.rating}</p>
                <br></br>
                <p className="title">{elem.title}</p>
                <br></br>
                <button className="mixed">+ Watchlist</button>
                <br></br>
                <button className="mixed">Trailer</button>
                <button className="info">i</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
