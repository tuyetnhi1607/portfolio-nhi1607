import React, { useRef, useEffect } from "react";
import "./book.scss";
import avatar from "../../assets/nhi.png";
import "boxicons";
import {TagCloud} from "react-tagcloud";

const data = [
    { value: 'MongoDB', count: 18 },
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'HTML5', count: 10 },
    { value: 'CSS3', count: 30 },
    { value: 'MongoDB', count: 22 },
    { value: 'Ant Design', count: 7 },
    { value: 'Material-UI', count: 25 },
    { value: 'Github', count: 32 },
    { value: 'Linux', count: 17 },
    { value: 'MongoDB', count: 10},
    { value: 'JavaScript', count: 18 },
    { value: 'React', count: 40 },
    { value: 'HTML5', count: 30 },
    { value: 'CSS3', count: 14 },
    { value: 'MongoDB', count: 40 },
    { value: 'Ant Design', count: 20 },
    { value: 'Material-UI', count: 12 },
    { value: 'Github', count: 7 },
    { value: 'Linux', count:30 },
]

function Book() {
  useEffect(() => {
    let turnPageBtn = document.querySelectorAll(".book-page-item");
    turnPageBtn.forEach((el, index) => {
      console.log("el", el);
      el.onclick = (e) => {
        if (el.classList.contains("turn")) {
          el.classList.remove("turn");
          setTimeout(() => {
            el.style.zIndex = "unset";
          }, 600);
        } else {
          el.classList.add("turn");
          el.style.zIndex = 200 - index;
        }
      };
    });
  }, []);

  return (
    <div className="book">
      <div className="book-cover"></div>
      <div className="book-page">
        <div className="book-page-first">
          <div className="content-info">
            <img src={avatar} alt="" />
            <h1>Dinh Thi Tuyet Nhi</h1>
            <div className="list-icon">
              <i class="bx bxl-facebook-circle"></i>
              <i class="bx bxl-github"></i>
              <i class="bx bx-home-heart"></i>
            </div>
            <h2>
              Hello, I'm Nhi. Currently, I'm a student and live in Hanoi,
              Vietnam. I want to be a web developer. My goal is to become a
              master html, css, js like the authors on codepen.io. It's a
              bullshit goal but I'm thoroughly enjoying and loving it.{" "}
            </h2>
          </div>
        </div>
        <div className="book-page-item turn" id="1">
          <div className="book-page-item-font">
            <div className="content-2">
              <h1>Educations</h1>
              <br />
              <h3>
                Posts and Telecommunications Institute of Technology
                <span class="time">2017 - 2022</span>
              </h3>
              <p>Major: Telecommunication</p>
              <br />
              <br />
              <h1>My Achievements</h1>
              <br />
              <h3>
                Third Prize (non-IT)
                <span class="time">2018</span>
              </h3>
              <p>
                The 2018 ICPC Asia Southeast and Pacific - Hanoi Regional
                Contest
              </p>
              <br />
              <h3>
                Third Prize (non-IT)
                <span class="time">2018</span>
              </h3>
              <p>The 2018 Vietnam National Programming Contest</p>
              <br />
              <h3>
                Third Prize
                <span class="time">2020</span>
              </h3>
              <p>ACM/ICPC PTIT</p>
              <br />
            </div>
          </div>
          <div className="book-page-item-back">
            <div className="content-3">
              <h1>Skills</h1>
              <br />
              <p> Have basic knowledge of front end:</p>
              <h3>
                HTML/CSS, <br />
                JavaScript, <br />
                ReactJS.
              </h3>
              <br />
              <p> Worked with:</p>
              <h3>
                Ant-Design, <br />
                Material-UI,
                <br /> MongoDB, <br />
                Github, <br />
                Linux.
              </h3>
              <div className="cloud">
                <TagCloud
                    minSize={12}
                    maxSize={40}
                    tags={data}
                    className="simple-cloud"
                />
            </div>
            </div>
            
          </div>
        </div>
        <div className="book-page-item turn" id="2">
          <div className="book-page-item-font">
                
          </div>
          <div className="book-page-item-back">
            <h1>Back2</h1>
          </div>
        </div>
        <div className="book-page-item turn" id="3">
          <div className="book-page-item-font">
            <h1>Font3</h1>
          </div>
          <div className="book-page-item-back">
            <h1>Back3</h1>
          </div>
        </div>
      </div>
      <div className="book-cover right"></div>
    </div>
  );
}

export default Book;
