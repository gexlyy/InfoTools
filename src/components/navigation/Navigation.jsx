import React, { useState } from 'react';
import { IoIosPartlySunny } from 'react-icons/io';
import { FaCalculator } from 'react-icons/fa6';
import { LiaStickyNoteSolid } from 'react-icons/lia';
import { IoNewspaperOutline } from 'react-icons/io5';
import { BsCash } from 'react-icons/bs';
import { CiMenuBurger } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-main">
      {/* Бургер-кнопка */}
      <button className="menu-burger" onClick={toggleMenu}>
        <CiMenuBurger size={30} color='rgb(48,47,49)' />
      </button>

      {/* Выпадающее меню */}
      {isMenuOpen && (
        <nav className="nav-list">
          <ul>
            <li className="nav-list-item">
              <Link to="/weather" onClick={toggleMenu}>
                <IoIosPartlySunny size={30} color="white" />
                <span>Weather</span>
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/calculator" onClick={toggleMenu}>
                <FaCalculator size={30} color="white" />
                <span>Calculator</span>
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/notes" onClick={toggleMenu}>
                <LiaStickyNoteSolid size={30} color="white" />
                <span>Notes</span>
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/currency-converter" onClick={toggleMenu}>
                <BsCash size={30} color="white" />
                <span>Currency Converter</span>
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/news" onClick={toggleMenu}>
                <IoNewspaperOutline size={30} color="white" />
                <span>News</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
