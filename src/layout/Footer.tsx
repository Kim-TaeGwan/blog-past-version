import React from 'react';
// import { Link } from 'react-router-dom';

import post_img_01 from 'assets/image/blog_post_img_01.jpg';
import post_img_02 from 'assets/image/blog_post_img_02.jpg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_box">
        <div className="content_box left">
          <span className="title">FOOTER</span>
          <div className="content">
            <span>
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue
              gravida diam non fringilla.
            </span>
            <span>
              Powered by
              <a href="https://www.w3schools.com/w3css/default.asp" target="black">
                w3.css
              </a>
            </span>
          </div>
        </div>
        <div className="content_box center">
          <span className="title">BLOG POSTS</span>
          <div className="content">
            <div className="post_container">
              <div className="post_img">
                <img src={post_img_01} alt="post_img" width="100%" height="100%" />
              </div>
              <div className="post_info">
                <span>Lorem</span>
                <span>Sed mattis nunc</span>
              </div>
            </div>
            <div className="post_container">
              <div className="post_img">
                <img src={post_img_02} alt="post_img" width="100%" height="100%" />
              </div>
              <div className="post_info">
                <span>Lorem</span>
                <span>Sed mattis nunc</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content_box right">
          <span className="title">POPULAR TAGS</span>
          <div className="content">
            <span className="tag insert">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">ES6</span>
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">MySQL</span>
          </div>
        </div>
      </div>
      <div className="footer_end">
        <span>Powered by</span>
        <a href="https://www.w3schools.com/w3css/default.asp" target="black">
          w3.css
        </a>
      </div>
    </div>
  );
};

export default Footer;
