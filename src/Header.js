import React from "react";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";
function Header() {
  return (
    <>
      <header>
        <div className="headerTop">
          <div className="left">
            <div className="logo">
              <Link>
                <img src="./images/logo.png" alt="" />
              </Link>
            </div>
          </div>

          <div className="middle">
            <form action="" className="form">
              <div className="location form-containers">
                <span>
                  <PlaceIcon className="icons" />
                </span>
                <input
                  type="text"
                  name=""
                  id=""
                  className="locationInput"
                  placeholder="Where do you want to travel?"
                />
              </div>

              <span className="verticaleLine"></span>

              <div className="calendar form-containers">
                <span>
                  <CalendarTodayIcon className="icons" />
                </span>
                <input type="text" placeholder="Month" />
              </div>

              <span className="verticaleLine"></span>

              <div className="budget form-containers">
                <span>
                  <CurrencyRupeeIcon className="icons" />
                </span>
                <input type="text" placeholder="Budget" />
              </div>
            </form>

            <button className="searchBtn">
              <SearchIcon className="searchIcon" />
            </button>
          </div>

          <div className="right">
            <div className="rightSideIcons">
              <Link>
                <CallIcon className="sideIcons" />
              </Link>
              <Link>
                <PersonIcon className="sideIcons" />
              </Link>
              <Link>
                <MenuIcon className="sideIcons" />
              </Link>
            </div>
          </div>
        </div>

        <div className="headerBottom">
          <nav>
            <ul>
              <li>
                <Link>Destinations</Link>
              </li>
              <li>
                <Link>Speciality Tours</Link>
              </li>
              <li>
                <Link>Customized Holidays</Link>
              </li>
              <li>
                <Link>Corporate Travels</Link>
              </li>
              <li>
                <Link>Forex</Link>
              </li>
              <li>
                <Link>Inbound</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <span className="horizontalLine"></span>
    </>
  );
}

export default Header;
