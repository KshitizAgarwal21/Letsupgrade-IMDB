import React from "react";
import "./tp.css";
export default function TopPicks() {
  const arr = [0, 2, 1, 2, 3232, 324];
  return (
    <div>
      <h3 className="tp">Top Picks </h3>

      <div className="cards-container">
        <div className="cards">
          {arr.map((elem) => {
            return (
              <div className="tp-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZnBqhFzrzZP7qpttbYfWmNlBl8sk70M5mt7a3SR8Y7g&usqp=CAU&ec=48665701"></img>
                <p>⭐️ 7.6 </p>
                <br></br>
                <p className="title">The Pirates</p>
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
