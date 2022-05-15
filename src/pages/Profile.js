import React from "react";
import { Link } from "react-router-dom";
import "../styles/profile.scss";

const Profile = () => {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
            alt=""
          />
        </div>
        <div className="father">
          <div className="header-bottom  container">
            <div className="first">
              <img
                src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                alt=""
              />
            </div>
            <div className="second ">
              <ul>
                <li>
                  Tweets <br />
                  <h2>13.5K</h2>
                </li>
                <li>
                  Following <br />
                  <h2>54</h2>
                </li>
                <li>
                  Followers <br />
                  <h2>16.8K</h2>
                </li>
                <li>
                  Likes <br />
                  <h2>10.9K</h2>
                </li>
                <li>
                  List <br />
                  <h2>1</h2>
                </li>
              </ul>
            </div>
            <div className="third">
              <button>Follow</button>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
        </div>
      </header>
      <section className="main-profile father">
        <div className="container">
          <div className="left">
            <h2>Diyor Mirpolatov</h2>
            <div>
              <p className="p1">
                <a href="#diyormirpolatov">@diyormirpolatov</a>{" "}
                <small>
                  {" "}
                  <i className="fas fa-location-dot"></i> Tashkent, Uzbekistan
                </small>
              </p>
            </div>
            <p className="p2">
              <i className="fas fa-briefcase"></i> Albison{" "}
              <small>Front-End developer</small>
            </p>
            <div className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              fugiat error doloribus porro blanditiis cumque recusandae,
              architecto repellendus fugit itaque unde esse consectetur magni
              quae?
            </div>
            <div className="ul1">
              <ul>
                <li>Creating Websites</li>
                <li>React JS, Next JS</li>
                <li>Playing Football</li>
              </ul>
            </div>

            <p className="p3">
              {" "}
              <i className="fas fa-school"></i> School №9{" "}
              <small>Grade 10</small>
            </p>

            <div className="ul2">
              <ul>
                <li>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://youtube.com"
                  >
                    <i className="fab fa-youtube"></i> MentorMode.com
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://facebook.com"
                  >
                    <i className="fab fa-facebook"></i> DiyorMirpolatov
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://linkedin.com"
                  >
                    <i className="fab fa-linkedin"></i> MentorMode.com
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://instagram.com"
                  >
                    <i className="fab fa-instagram"></i> MirpolatovDiyor
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="tweets">
              <Link to={"/posts/1"}>
                <div className="top-tweet">
                  <div className="left-tweet">
                    <img
                      src="https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg"
                      alt=""
                    />
                  </div>
                  <div className="right-tweet">
                    <h2>Mirpolatov Diyor</h2>
                    <small>@MirpolatovDiyor</small>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptate eaque nobis eius laborum. Ex, aliquam a
                      perferendis nulla incidunt iusto maxime possimus tenetur
                      tempora, magnam repellendus est praesentium cumque animi
                      magni expedita deleniti hic quasi. Porro quod dignissimos
                      vero accusamus nam amet error enim aut provident sequi
                      consectetur fugiat, placeat nulla tempore quo perferendis
                      voluptates praesentium distinctio harum dolore? Officia
                      reiciendis facere, perferendis vitae tempora omnis
                      consequuntur dignissimos accusamus id laboriosam optio
                      blanditiis delectus quia incidunt ducimus sed adipisci
                      maiores labore ut consectetur. Adipisci quo, aliquid,
                      cupiditate illo impedit dolor velit modi assumenda
                      inventore praesentium veritatis, est consectetur sunt
                      maiores?
                    </p>
                    <small>Todays time</small>
                  </div>
                </div>
                <footer>
                  <span className="last">
                    Retweet <i className="fa-solid fa-retweet"></i>
                  </span>
                  <span className="last">
                    Like <i className="fa-solid fa-thumbs-up"></i>
                  </span>
                  <span className="last">
                    Share <i className="fa-solid fa-share"></i>
                  </span>
                </footer>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
