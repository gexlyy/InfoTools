import React from 'react';
import { IoIosPartlySunny } from 'react-icons/io';
import { FaCalculator } from 'react-icons/fa6';
import { LiaStickyNoteSolid } from 'react-icons/lia';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BsCash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-main">
      <ul className="home-list">
        <li className="home-list-item">
          <Link to="/weather">
            <IoIosPartlySunny size={60} color="white" />
            <span>Weather</span>
          </Link>
        </li>
        <li className="home-list-item">
          <Link to="/calculator">
            <FaCalculator size={60} color="white" />
            <span>Calculator</span>
          </Link>
        </li>
        <li className="home-list-item">
          <Link to="/notes">
            <LiaStickyNoteSolid size={60} color="white" />
            <span>Notes</span>
          </Link>
        </li>
        <li className="home-list-item">
          <Link to="/currency-converter">
            <BsCash size={60} color="white" />
            <span>Currency Converter</span>
          </Link>
        </li>
        <li className="home-list-item">
          <Link to="/news">
            <IoNewspaperOutline size={60} color="white" />
            <span>News</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
