import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      {/* mian-content */}
      <div className="main-banner inner" id="home">
        {/* header */}
        <header className="header">
          <div className="container-fluid px-lg-5">
            {/* nav */}
            <nav className="py-4">
              <div id="logo">
                <h1>
                  {" "}
                  <a href="index.html">
                    <span className="fa fa-bold" aria-hidden="true" />
                    SMART COMMERCE
                  </a>
                </h1>
              </div>
              <label htmlFor="drop" className="toggle">
                Menu
              </label>
              <input type="checkbox" id="drop" />
              <ul className="menu mt-2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  {/* First Tier Drop Down */}
                  <label htmlFor="drop-2" className="toggle">
                    Drop Down{" "}
                    <span className="fa fa-angle-down" aria-hidden="true" />{" "}
                  </label>
                  <a href="#">
                    Drop Down{" "}
                    <span className="fa fa-angle-down" aria-hidden="true" />
                  </a>
                  <input type="checkbox" id="drop-2" />
                  <ul>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="shop.html">Shop Now</a>
                    </li>
                    <li>
                      <a href="single.html">Single Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
            {/* //nav */}
          </div>
        </header>
        {/* //header */}
      </div>
      {/*//main-content*/}
      {/**/}
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item active">About Us</li>
      </ol>
      {/**/}
      {/*// mian-content */}
      {/*/ab */}
      <section className="hand-crafted py-5">
        <div className="container">
          <div className="inner-sec py-md-5 px-lg-5">
            <h3 className="tittle text-center">
              <span className="sub-tittle">About.</span> Welcome To Our Website
            </h3>
            <p className="mb-4 text-center px-lg-4">
              {" "}
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam, sit amet
              ultricies velit. Praesent ullamcorper dui turpis.Integer sit amet
              mattis quam, sit amet ultricies velit. Praesent ullamcorper dui
              turpis.
            </p>
          </div>
        </div>
      </section>
      {/* //ab */}
      {/*/ab */}
      <section className="about py-md-5 py-5">
        <div className="container py-md-3">
          <h3 className="tittle text-center">What We Offer</h3>
          <div className="feature-grids row">
            <div className="col-md-4 gd-bottom mt-lg-4">
              <div className="bottom-gd p-lg-5 p-4">
                <span className="fa fa-truck" aria-hidden="true" />
                <h3 className="my-3">FREE SHIPPING</h3>
                <p>
                  Integer sit amet mattis quam, sit amet ultricies velit.
                  Praesent ullamcorper dui turpis.
                </p>
              </div>
            </div>
            <div className="col-md-4 gd-bottom mt-lg-4">
              <div className="bottom-gd2-active p-lg-5 p-4">
                <span className="fa fa-bullhorn" aria-hidden="true" />
                <h3 className="my-3">FREE RETURN</h3>
                <p>
                  Integer sit amet mattis quam, sit amet ultricies velit.
                  Praesent ullamcorper dui turpis.
                </p>
              </div>
            </div>
            <div className="col-md-4 gd-bottom mt-lg-4">
              <div className="bottom-gd p-lg-5 p-4">
                <span className="fa fa-gift" aria-hidden="true" />
                <h3 className="my-3">MEMBER DISCOUNT</h3>
                <p>
                  Integer sit amet mattis quam, sit amet ultricies velit.
                  Praesent ullamcorper dui turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //ab */}
      {/* /hand-crafted */}
      <section className="hand-crafted py-5">
        <div className="container py-md-3">
          <div className="row banner-grids">
            <div className="col-md-6 banner-image">
              <div className="effect-w3">
                <img src="images/about.jpg" alt className="img-fluid image1" />
              </div>
            </div>
            <div className="col-md-6 last-img pl-lg-5 p-3">
              <h3 className="tittle mb-lg-5 mb-3">
                <span className="sub-tittle">THE SEASON BEGINGS </span>PROMOTION
                SALE OFF 50%
              </h3>
              <p className="mb-4">
                {" "}
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam, sit amet
                ultricies velit. Praesent ullamcorper dui turpis.
              </p>
              <ul className="tic-info list-unstyled">
                <li>
                  <span className="fa fa-check mr-2" /> Integer sit amet mattis
                  quam
                </li>
                <li>
                  <span className="fa fa-check mr-2" /> Praesent ullamcorper dui
                  turpis
                </li>
                <li>
                  <span className="fa fa-check mr-2" /> Integer sit amet mattis
                  quam
                </li>
                <li>
                  <span className="fa fa-check mr-2" /> Integer sit amet mattis
                  quam
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* //hand-crafted */}
      {/* stats */}
      <section className="stats py-5" id="stats">
        <div className="container py-md-3">
          <div className="row stat-grids">
            <div className="col-lg-6 ser-lt">
              <div className="d-flex services-box">
                <div className="icon">
                  <span className="fa fa-line-chart" />
                </div>
                {/* .Icon ends here */}
                <div className="service-content">
                  <h4>Inagittis Lacg</h4>
                  <p className="serp">
                    Quisque sagittis lacus eu lorem sodalesd vulputate
                    velitdipisc inagittis lacg enean adipiscing.
                  </p>
                </div>
                {/* .Service-content ends here */}
              </div>
              {/* .Services-box ends here */}
              <div className="d-flex services-box ser-midd">
                <div className="icon">
                  <span className="fa fa-bell-o" />
                </div>
                {/* .Icon ends here */}
                <div className="service-content">
                  <h4>Velitdipisc Inagittis</h4>
                  <p className="serp">
                    Quisque sagittis lacus eu lorem sodalesd vulputate
                    velitdipisc inagittis lacg enean adipiscing.
                  </p>
                </div>
                {/* .Service-content ends here */}
              </div>
              {/* .Services-box ends here */}
              {/* .Services-box ends here */}
              <div className="d-flex services-box bx-4">
                <div className="icon">
                  <span className="fa fa-line-chart" />
                </div>
                {/* .Icon ends here */}
                <div className="service-content">
                  <h4>Sagittis Lacus</h4>
                  <p className="serp">
                    Quisque sagittis lacus eu lorem sodalesd vulputate
                    velitdipisc inagittis lacg enean adipiscing.
                  </p>
                </div>
                {/* .Service-content ends here */}
              </div>
              {/* .Services-box ends here */}
            </div>
            <div className="col-lg-6 ser-lt ser-right">
              <div className="d-flex services-box">
                <div className="icon">
                  <span className="fa fa-line-chart" />
                </div>
                {/* .Icon ends here */}
                <div className="service-content">
                  <h4>Inagittis Lacg</h4>
                  <p className="serp">
                    Quisque sagittis lacus eu lorem sodalesd vulputate
                    velitdipisc inagittis lacg enean adipiscing.
                  </p>
                </div>
                {/* .Service-content ends here */}
              </div>
              {/* .Services-box ends here */}
              <div className="d-flex services-box ser-midd">
                <div className="icon">
                  <span className="fa fa-bell-o" />
                </div>
                {/* .Icon ends here */}
                <div className="service-content">
                  <h4>Velitdipisc Inagittis</h4>
                  <p className="serp">
                    Quisque sagittis lacus eu lorem sodalesd vulputate
                    velitdipisc inagittis lacg enean adipiscing.
                  </p>
                </div>
                {/* .Service-content ends here */}
              </div>
              {/* .Services-box ends here */}
              {/* .Services-box ends here */}
              <div className="d-flex services-box bx-4">
                <div className="icon">
                  <span className="fa fa-line-chart" />
                </div>
                {/* .Icon ends here */}
                <div className="service-content">
                  <h4>Sagittis Lacus</h4>
                  <p className="serp">
                    Quisque sagittis lacus eu lorem sodalesd vulputate
                    velitdipisc inagittis lacg enean adipiscing.
                  </p>
                </div>
                {/* .Service-content ends here */}
              </div>
              {/* .Services-box ends here */}
            </div>
          </div>
        </div>
      </section>
      {/* //stats */}
      {/*/testimonials*/}
      <section className="testimonials py-5">
        <div className="container">
          <div className="test-info text-center">
            <h3 className="my-md-2 my-3">Jenifer Burns</h3>
            <ul className="list-unstyled w3layouts-icons clients">
              <li>
                <a href="#">
                  <span className="fa fa-star" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-star" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-star" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fa fa-star-half-o" />
                </a>
              </li>
            </ul>
            <p>
              <span className="fa fa-quote-left" /> Lorem Ipsum has been the
              industry's standard since the 1500s. Praesent ullamcorper dui
              turpis.Nulla pellentesque mi non laoreet eleifend. Integer
              porttitor mollisar lorem, at molestie arcu pulvinar ut.{" "}
              <span className="fa fa-quote-right" />
            </p>
          </div>
        </div>
      </section>
      {/*//testimonials*/}
      {/*/ab */}
      <section className="about py-5">
        <div className="container pb-lg-3">
          <h3 className="tittle text-center">Popular Products</h3>
          <div className="row">
            <div className="col-md-6 latest-left">
              <div className="product-shoe-info shoe text-center">
                <img src="images/img1.jpg" className="img-fluid" alt />
                <div className="shop-now">
                  <a href="shop.html" className="btn">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 latest-right">
              <div className="row latest-grids">
                <div className="latest-grid1 product-men col-12">
                  <div className="product-shoe-info shoe text-center">
                    <div className="men-thumb-item">
                      <img src="images/img2.jpg" className="img-fluid" alt />
                      <div className="shop-now">
                        <a href="shop.html" className="btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="latest-grid2 product-men col-12 mt-lg-4">
                  <div className="product-shoe-info shoe text-center">
                    <div className="men-thumb-item">
                      <img src="images/img3.jpg" className="img-fluid" alt />
                      <div className="shop-now">
                        <a href="shop.html" className="btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //ab */}
      {/* brands */}
      <section className="brands py-5" id="brands">
        <div className="container py-lg-0">
          <div className="row text-center brand-items">
            <div className="col-sm-2 col-3">
              <a href="#">
                <span className="fa fa-connectdevelop" aria-hidden="true" />
              </a>
            </div>
            <div className="col-sm-2 col-3">
              <a href="#">
                <span className="fa fa-empire" aria-hidden="true" />
              </a>
            </div>
            <div className="col-sm-2 col-3">
              <a href="#">
                <span className="fa fa-ioxhost" aria-hidden="true" />
              </a>
            </div>
            <div className="col-sm-2 col-3">
              <a href="#">
                <span className="fa fa-first-order" aria-hidden="true" />
              </a>
            </div>
            <div className="col-sm-2 col-3 mt-sm-0 mt-4">
              <a href="#">
                <span className="fa fa-joomla" aria-hidden="true" />
              </a>
            </div>
            <div className="col-sm-2 col-3 mt-sm-0 mt-4">
              <a href="#">
                <span className="fa fa-dropbox" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* brands */}
      {/* footer */}
      <footer>
        <div className="container">
          <div className="row footer-top">
            <div className="col-lg-4 footer-grid_section_w3layouts">
              <h2 className="logo-2 mb-lg-4 mb-3">
                <a href="index.html">
                  <span className="fa fa-bold" aria-hidden="true" />
                  ootie
                </a>
              </h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h4 className="sub-con-fo ad-info my-4">Catch on Social</h4>
              <ul className="w3layouts_social_list list-unstyled">
                <li>
                  <a href="#" className="w3pvt_facebook">
                    <span className="fa fa-facebook-f" />
                  </a>
                </li>
                <li className="mx-2">
                  <a href="#" className="w3pvt_twitter">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="w3pvt_dribble">
                    <span className="fa fa-dribbble" />
                  </a>
                </li>
                <li className="ml-2">
                  <a href="#" className="w3pvt_google">
                    <span className="fa fa-google-plus" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 footer-right">
              <div className="w3layouts-news-letter">
                <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                  Newsletter
                </h3>
                <p>
                  By subscribing to our mailing list you will always get latest
                  news and updates from us.
                </p>
                <form action="#" method="post" className="w3layouts-newsletter">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Enter your email..."
                    required
                  />
                  <button className="btn1">
                    <span className="fa fa-paper-plane-o" aria-hidden="true" />
                  </button>
                </form>
              </div>
              <div className="row mt-lg-4 bottom-w3layouts-sec-nav mx-0">
                <div className="col-md-4 footer-grid_section_w3layouts">
                  <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                    Information
                  </h3>
                  <ul className="list-unstyled w3layouts-icons">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="mt-3">
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="mt-3">
                      <a href="#">Gallery</a>
                    </li>
                    <li className="mt-3">
                      <a href="#">Services</a>
                    </li>
                    <li className="mt-3">
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 footer-grid_section_w3layouts">
                  {/* social icons */}
                  <div className="agileinfo_social_icons">
                    <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                      Customer Service
                    </h3>
                    <ul className="list-unstyled w3layouts-icons">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li className="mt-3">
                        <a href="#">Delivery &amp; Returns</a>
                      </li>
                      <li className="mt-3">
                        <a href="#">Waranty</a>
                      </li>
                      <li className="mt-3">
                        <a href="#">Terms &amp; Condition</a>
                      </li>
                      <li className="mt-3">
                        <a href="#">Privacy Plolicy</a>
                      </li>
                    </ul>
                  </div>
                  {/* social icons */}
                </div>
                <div className="col-md-4 footer-grid_section_w3layouts my-md-0 my-5">
                  <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                    Contact Info
                  </h3>
                  <div className="contact-info">
                    <div className="footer-address-inf">
                      <h4 className="ad-info mb-2">Phone</h4>
                      <p>+121 098 8907 9987</p>
                    </div>
                    <div className="footer-address-inf my-4">
                      <h4 className="ad-info mb-2">Email </h4>
                      <p>
                        <a href="mailto:info@example.com">info@example.com</a>
                      </p>
                    </div>
                    <div className="footer-address-inf">
                      <h4 className="ad-info mb-2">Location</h4>
                      <p>Honey Avenue, New York City</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cpy-right text-left row">
                <p className="col-md-10">
                  © 2019 Bootie. All rights reserved | Design by
                  <a href="http://w3layouts.com"> W3layouts.</a>
                </p>
                {/* move top icon */}
                <a href="#home" className="move-top text-right col-md-2">
                  <span className="fa fa-long-arrow-up" aria-hidden="true" />
                </a>
                {/* //move top icon */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* //footer */}
    </div>
  );
}

export default About;
