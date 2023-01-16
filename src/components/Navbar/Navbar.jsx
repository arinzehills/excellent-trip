import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const headerRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  window.addEventListener("scroll", function () {
    headerRef.current.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <header ref={headerRef}>
      <h3>EXCELLENT TRIP</h3>
      <nav ref={navRef}>
        <Link>Home</Link>
        <ScrollLink
          to={"about"}
          smooth={true}
          spy={true}
          offset={160}
          duration={1500}
        >
          About
        </ScrollLink>
        <Link className="nav-links">Contact</Link>
        <FaTimes className="nav-btn nav-close-btn" onClick={showNavbar} />
      </nav>
      <div style={{ gap: "10rem" }}>
        <Button buttonColor={"btn--green"} rounded={true}>
          Book cab
        </Button>
        <Button
          buttonStyle={"btn--outline"}
          // buttonColor={"btn--orange"}
          rounded={true}
        >
          Login
        </Button>
      </div>
      <FaBars className="nav-btn" onClick={showNavbar} />
    </header>
  );
};

export default Navbar;
