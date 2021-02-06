import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../sts.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const LogoLink = styled.a.attrs({
  className:
    "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white",
  href: "#",
})``;

const ListLink = styled.a.attrs({
  className:
    "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer",
})``;

const logoStyle = {
  height: "60px",
  width: "60px",
};

const el = <FontAwesomeIcon icon={faBars} />;

export default function NavBar() {
  const [navBarOpen, setNavBarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap ites-center justify-between px-2 py-3 navbar-expand-lg bg-red-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <LogoLink>
              <img src={logo} alt="Logo" style={logoStyle} />
            </LogoLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                setNavBarOpen(!navBarOpen);
              }}
            >
              {el}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navBarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
                  to="/orders/create"
                >
                  Order
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
                  to="/orders/list"
                >
                  See Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
