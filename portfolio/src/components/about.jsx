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
          height="404"
          viewBox="0 0 564 404"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
          id="screen"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 330.18V0C80.3793 13.9416 177.458 22.0898 282 22.0898C386.542 22.0898 483.621 13.9416 564 0V330.18C483.621 316.238 386.542 308.09 282 308.09C177.458 308.09 80.3793 316.238 0 330.18Z"
            fill="#409DD1"
          />
          <path
          id="mouse"
            fill-rule="evenodd"
            clip-rule="evenodd"
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M282.88 165C249.441 165 220.295 186.852 205 219.196V227.273C195.411 229.381 188 243.454 188 260.5C188 279.002 196.73 294 207.5 294C218.27 294 227 279.002 227 260.5C227 246.553 222.039 234.596 214.982 229.555C229.196 201.93 254.645 183.522 283.674 183.522C312.062 183.522 337.026 201.126 351.407 227.739C342.603 230.97 336 244.41 336 260.5C336 279.002 344.73 294 355.5 294C366.27 294 375 279.002 375 260.5C375 244.659 368.6 231.386 360 227.896V217.621C344.512 186.144 315.773 165 282.88 165Z"
            fill="#FFFDFD"
          />
          <path
          id="head"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M350.835 344.82L350.847 344.82L350.844 343.698L350.651 241.552C350.651 241.539 350.651 241.525 350.651 241.512C350.651 241.498 350.651 241.485 350.651 241.471L350.642 237.02L350.453 237.021C347.796 206.254 318.663 182.057 283.163 182.125C247.663 182.192 218.622 206.499 216.081 237.275L215.892 237.275L216.094 343.953L216.096 345.076L216.108 345.076C216.847 377.425 246.796 403.409 283.582 403.34C320.368 403.27 350.218 377.173 350.835 344.82Z"
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
