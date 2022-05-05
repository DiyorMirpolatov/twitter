import React from "react";
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
          <div className="header-bottom container">
            <div className="first">
              <img
                src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                alt=""
              />
            </div>
            <div className="second">
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
    </>
  );
};

export default Profile;
