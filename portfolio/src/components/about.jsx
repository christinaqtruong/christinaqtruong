import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-scroll";
import "../styles/logo.css";

const aboutStyle = {
  marginBottom: 0
};

const scrollBar = {
  display: "flex",
  justifyContent: "center"
};

const wrapperStyle = {
  height: "100vh"
};

function About() {
  return (
    <div className="about-wrapper" style={wrapperStyle}>
      <Jumbotron fluid style={aboutStyle} id="about">
        <svg
          id="logo"
          width="564"
          height="393"
          viewBox="0 0 564 393"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="screen"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 330.18V0C80.3793 13.9416 177.458 22.0898 282 22.0898C386.542 22.0898 483.621 13.9416 564 0V330.18C483.621 316.238 386.542 308.09 282 308.09C177.458 308.09 80.3793 316.238 0 330.18Z"
            fill="#409DD1"
          />
          <path
            id="mouse"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M413.998 360C413.999 359.884 414 359.768 414 359.651C414 345.202 405.27 333.488 394.5 333.488C383.73 333.488 375 345.202 375 359.651C375 359.768 375.001 359.884 375.002 360H413.998Z"
            fill="#C4C4C4"
          />
          <path
            id="scroller"
            d="M399.064 336.628C399.064 340.288 397.206 343.256 394.915 343.256C392.623 343.256 390.766 340.288 390.766 336.628C390.766 332.967 392.623 330 394.915 330C397.206 330 399.064 332.967 399.064 336.628Z"
            fill="#4FDB2C"
          />
          <path
            id="headset"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M282.762 165C252.184 165 225.532 186.852 211.545 219.196V227.273C202.777 229.381 196 243.454 196 260.5C196 279.002 203.983 294 213.832 294C223.68 294 231.663 279.002 231.663 260.5C231.663 246.553 227.126 234.596 220.674 229.555C233.671 201.93 256.942 183.522 283.488 183.522C309.447 183.522 332.275 201.126 345.426 227.739C337.375 230.97 331.337 244.41 331.337 260.5C331.337 279.002 339.32 294 349.168 294C359.017 294 367 279.002 367 260.5C367 244.659 361.148 231.386 353.283 227.896V217.621C339.121 186.144 312.841 165 282.762 165Z"
            fill="#FFFDFD"
          />
          <path
            id="head"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M342.885 336.575L342.895 336.575L342.893 335.509L342.709 238.543C342.709 238.534 342.709 238.524 342.709 238.515C342.709 238.505 342.709 238.495 342.709 238.486L342.701 234.251L342.532 234.251C340.146 205.048 314.024 182.078 282.195 182.138C250.367 182.198 224.332 205.267 222.056 234.48L221.887 234.48L222.079 335.731C222.079 335.733 222.079 335.735 222.079 335.738C222.079 335.74 222.079 335.742 222.079 335.745L222.081 336.803L222.091 336.803C222.757 367.51 249.612 392.177 282.593 392.114C315.574 392.052 342.335 367.283 342.885 336.575Z"
            fill="#0D0C0C"
          />
        </svg>

        <h1>christina q. truong</h1>
        <p>Full stack web developer specialized in React and Javascript.</p>
      </Jumbotron>
      <Link
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={scrollBar}
      >
        View my Work
      </Link>
    </div>
  );
}

export default About;
