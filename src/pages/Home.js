import React from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";
const Home = () => {

    const handleReTweet = () => {
      alert("We can not retweet your message");
    }; 
    
    const handleLike = () => {
      alert("You liked this tweet");
      console.log(123);
    };
     
    const handleShare = () => {
       alert("Accept all the cookies to share this tweet");
     };
  return (
    <>
      <div className="left-header">
        <ul>
            <Link to="/">
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
            </Link>
            <Link to="/">
          <li>
            <i className="fa-solid fa-house"></i>
          </li>
            </Link>
            <Link to="profile">
          <li>
            <i className="fa-solid fa-hashtag"></i>
          </li>
            </Link>
            <Link to="profile">
          <li>
            <i className="fa-solid fa-bell"></i>
          </li>
            </Link>
            <Link to="/profile">
          <li>
            <i className="fa-solid fa-envelope"></i>
          </li>
            </Link>
            <Link to="profile">
          <li>
            <i className="fa-solid fa-bookmark"></i>
          </li>
            </Link>
          <Link to="profile"> 
            <li>
              <i className="fa-solid fa-user"></i>
            </li>
          </Link>
        </ul>
      </div>
      <div className="all">
        <div className="tweets">
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
                Voluptate eaque nobis eius laborum. Ex, aliquam a perferendis
                nulla incidunt iusto maxime possimus tenetur tempora, magnam
                repellendus est praesentium cumque animi magni expedita deleniti
                hic quasi. Porro quod dignissimos vero accusamus nam amet error
                enim aut provident sequi consectetur fugiat, placeat nulla
                tempore quo perferendis voluptates praesentium distinctio harum
                dolore? Officia reiciendis facere, perferendis vitae tempora
                omnis consequuntur dignissimos accusamus id laboriosam optio
                blanditiis delectus quia incidunt ducimus sed adipisci maiores
                labore ut consectetur. Adipisci quo, aliquid, cupiditate illo
                impedit dolor velit modi assumenda inventore praesentium
                veritatis, est consectetur sunt maiores?
              </p>
              <small>Todays time</small>
            </div>
          </div>
          <footer>
            <div className="last">
              Retweet <i className="fa-solid fa-retweet"></i>
            </div>
            <div className="last">
              Like <i className="fa-solid fa-thumbs-up"></i>
            </div>
            <div className="last">
              Share <i className="fa-solid fa-share"></i>
            </div>
          </footer>
        </div>
        <div className="tweets">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias adipisci architecto dolores, accusantium fuga aut
                ullam reprehenderit quia corporis, unde eveniet autem quis
                voluptatem soluta?
              </p>
              <small>Todays time</small>
            </div>
          </div>
          <footer>
            <span onClick={handleReTweet} className="last">
              Retweet <i className="fa-solid fa-retweet"></i>
            </span>
            <span onClick={handleLike} className="last">
              Like <i className="fa-solid fa-thumbs-up"></i>
            </span>
            <span onClick={handleShare} className="last">
              Share <i className="fa-solid fa-share"></i>
            </span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home;
