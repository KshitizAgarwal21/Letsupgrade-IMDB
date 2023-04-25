import React from "react";
import "./mc.css";
export default function MainCarousel() {
  const arr = [1, 3, 2, 13, 4, 5];
  return (
    <div>
      <div className="main-container">
        <div className="sub-container">
          <div className="banner">
            <img src="https://cdn.theatlantic.com/thumbor/Ul7vW5rVSFDzl7rgKTDHYSaKQkY=/0x105:2000x1230/1952x1098/media/img/mt/2015/04/Ex_Machina/original.jpg"></img>
          </div>
          <div className="overlay-button-left">left </div>
          <div className="overlay-button-right">right </div>
          <div className="overlay-title">Title</div>
        </div>
        <div className="upnext">
          <h4>up next</h4>

          <div className="horizontal-card">
            <div className="horizontal-cards">
              {arr.map((elem) => {
                return (
                  <>
                    <div className="hori-card">
                      <img
                        src="https://cdn.theatlantic.com/thumbor/Ul7vW5rVSFDzl7rgKTDHYSaKQkY=/0x105:2000x1230/1952x1098/media/img/mt/2015/04/Ex_Machina/original.jpg"
                        className="upnextimg"
                      ></img>
                      <div>
                        {" "}
                        <p>{elem}</p>
                        <br></br>
                        <br></br>
                        <p>Watch</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
