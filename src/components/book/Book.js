import React, { useRef, useEffect } from "react";
import "./book.scss";
import avatar from "../../assets/nhi.png";
import "boxicons";
import video1 from "../../assets/video1.mp4"
import video2 from "../../assets/video2.mp4"

function Book() {
  useEffect(() => {
    let turnPageBtn = document.querySelectorAll(".book-page-item");
    turnPageBtn.forEach((el, index) => {
      el.style.zIndex = 20 - index;
      console.log("el", el, index);
      el.onclick = (e) => {
        let videos = document.querySelectorAll('video')

        videos.forEach((el_1) => {
            el_1.pause()
        })
        if (el.classList.contains("turn")) {
          el.classList.remove("turn");
          setTimeout(() => {
            el.style.zIndex = "unset";
          }, 600);
        } else {
          el.classList.add("turn");
          el.style.zIndex = 20 - index;
        }
      };
    });
    let videos = document.querySelectorAll('video')

    videos.forEach((el) => {
        el.onplay = () => {
            videos.forEach((el_1) => {
                if (el === el_1) {
                    el.play()
                } else {
                    el_1.pause()
                }
            })
        }
    })
    
    //open book

  },[]);

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
                HTML,
                CSS, 
                JavaScript, 
                ReactJS.
              </h3>
              <br />
              <p> Worked with:</p>
              <h3>
                Ant-Design, 
                Material-UI,
               MongoDB, 
                Github, 
                Linux.
              </h3>
              <br /> <br/>
              <h1>Experiences</h1>
              <br />
              <p>Worked as a trainee</p>
              <h3>
                AI.SOFT
                <span class="time">10/2018 - 4/2020</span>
              </h3>
              <br />
              <br />
              <p>Worked as a trainee</p>
              <h3>
                VNPT Technology
                <span class="time">07/2021 - 08/2021</span>
              </h3>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="book-page-item turn" id="2">
          <div className="book-page-item-font">
            <div className="demo-wrapper">
              <video width="100%" height="auto" controls>
                <source src={video2} type="video/mp4" />
              </video>
              <h1>Food Order Website 1</h1>
              <h2>
                This is a simple project I write in HTML, CSS, React JS. This
                project helps me practice layout, animation, and especially
                Responsive.
              </h2>
              <div>
                <i class="bx bx-link"></i>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blooming-woodland-27991.herokuapp.com/"
                >
                  https://blooming-woodland-27991.herokuapp.com/
                </a>
              </div>
            </div>
          </div>
          <div className="book-page-item-back">
            <div className="demo-wrapper">
              <video width="100%" height="auto" controls>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1>Food Order Website2</h1>
              <h2>
                This is a simple project I write in HTML, CSS, React JS. This
                project helps me practice layout, animation, and especially
                Responsive.
              </h2>
              <div>
                <i class="bx bx-link"></i>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blooming-woodland-27991.herokuapp.com/"
                >
                  https://blooming-woodland-27991.herokuapp.com/
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="book-page-item turn" id="3">
          <div className="book-page-item-font">
            <div className="demo-wrapper">
              <video width="100%" height="auto" controls>
                <source src={video2} type="video/mp4" />
              </video>
              <h1>Food Order Website3</h1>
              <h2>
                This is a simple project I write in HTML, CSS, React JS. This
                project helps me practice layout, animation, and especially
                Responsive.
              </h2>
              <div>
                <i class="bx bx-link"></i>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blooming-woodland-27991.herokuapp.com/"
                >
                  https://blooming-woodland-27991.herokuapp.com/
                </a>
              </div>
            </div>
          </div>
          <div className="book-page-item-back">
            <div className="demo-wrapper">
              <video width="100%" height="auto" controls>
                <source src={video1} type="video/mp4" />
              </video>
              <h1>Food Order Website4</h1>
              <h2>
                This is a simple project I write in HTML, CSS, React JS. This
                project helps me practice layout, animation, and especially
                Responsive.
              </h2>
              <div>
                <i class="bx bx-link"></i>
                <a
                  target="_blank"
                  cursor="alias"
                  rel="noreferrer"
                  href="https://blooming-woodland-27991.herokuapp.com/"
                >
                  https://blooming-woodland-27991.herokuapp.com/
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="book-page-item turn" id="4">
          <div className="book-page-item-font">
            <div className="demo-wrapper">
              <video width="100%" height="auto" controls>
                <source src={video2} type="video/mp4" />
              </video>
              <h1>Food Order Website5</h1>
              <h2>
                This is a simple project I write in HTML, CSS, React JS. This
                project helps me practice layout, animation, and especially
                Responsive.
              </h2>
              <div>
                <i class="bx bx-link"></i>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blooming-woodland-27991.herokuapp.com/"
                >
                  https://blooming-woodland-27991.herokuapp.com/
                </a>
              </div>
            </div>
          </div>
          <div className="book-page-item-back">
            <div className="demo-wrapper">
              <video width="100%" height="auto" controls>
                <source src={video1} type="video/mp4" />
              </video>
              <h1>Food Order Website6</h1>
              <h2>
                This is a simple project I write in HTML, CSS, React JS. This
                project helps me practice layout, animation, and especially
                Responsive.
              </h2>
              <div>
                <i class="bx bx-link"></i>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blooming-woodland-27991.herokuapp.com/"
                >
                  https://blooming-woodland-27991.herokuapp.com/
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="book-page-last">
          <div className="contacts-wrapper">
            <h1>Contact me</h1>
            <p>Get in touch, if you have any work or questions.</p>
            <div className="form-group">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message" />
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="book-cover right"></div>
    </div>
  );
}

export default Book;
