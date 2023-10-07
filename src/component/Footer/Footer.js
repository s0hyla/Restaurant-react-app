import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12">
              <h2 className="name-res">S<span>H</span>i<span>n</span>y</h2>
              <p className="dis">
                {" "}
                Hi dear, Please feel free to contact our restaurant anytime.{" "}
              </p>
              <div className="footer-icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <h5>Contact info</h5>
              <p>
                <i class="fa-solid fa-phone"></i> +20 01282346435
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> sohila.elbably@gmail.com
              </p>
              <p>
                <i class="fa-solid fa-paper-plane"></i> Egypt
              </p>
            </div>
          </div>
        </div>
        <div className="Last-footer">
          
          <span>© 2021. Shiny. All rights reserved.</span>
          </div>
        </div>
    </>
  );
}

export default Footer;
