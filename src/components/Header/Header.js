import './Header.css';

import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from '../../img/logo_sans_text.png';

function Header({ routes }){    
    const { t } = useTranslation();
    const location = useLocation();

    const [activeLink, setActiveLink] = useState(null);
    const underlineRef = useRef(null);

    useEffect(() => {
        const activeRoute = routes.find(route => route.path === location.pathname);
        if (activeRoute) {
          const activeElement = document.querySelector(`.header--link--desktop[href='${activeRoute.path}']`);
          setActiveLink(activeElement);
        }
      }, [location.pathnamej, routes, location]);
    
      useEffect(() => {
        if (activeLink && underlineRef.current) {
          const { offsetLeft, offsetWidth } = activeLink;
          underlineRef.current.style.left = `${offsetLeft}px`;
          underlineRef.current.style.width = `${offsetWidth}px`;
        }
      }, [activeLink]);

      useEffect(() => {
        if (activeLink) {
            const { offsetWidth } = activeLink;
            underlineRef.current.style.width = `calc(${offsetWidth}px - 3rem)`;
        }
      }, [activeLink]);
    
      const handleMouseOver = (e) => {
        if (underlineRef.current) {
          const { offsetLeft, offsetWidth } = e.target;
          underlineRef.current.style.left = `${offsetLeft}px`;
          underlineRef.current.style.width = `calc(${offsetWidth}px - 3rem)`;
        }
      };
    
      const handleMouseOut = () => {
        if (activeLink && underlineRef.current) {
          const { offsetLeft, offsetWidth } = activeLink;
          underlineRef.current.style.left = `${offsetLeft}px`;
          underlineRef.current.style.width = `calc(${offsetWidth}px - 3rem)`;
        }
      };

      const handleBurgerClick = () => {
        const inside_burger = document.getElementById('header_inside_burger');
        // inside_burger.classList.toggle('d-none');
        inside_burger.classList.toggle('visible')
      }

    return(
        <>
        <header>
            <div className='header--container'>
                <section className='header--logo'>
                    <img src={logo} alt='logo' />
                </section>

                <div className='header--burger' onClick={handleBurgerClick}>
                    <div className='burger--bar'></div>
                    <div className='burger--bar'></div>
                    <div className='burger--bar'></div>
                </div>
                
                <section className='header--links'>
                    <nav>
                        {routes.map((route, index) => (
                            <Link
                            key={index}
                            to={route.path}
                            className={location.pathname === route.path ? 'active header--link--desktop' : 'header--link--desktop'}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            >
                                {t(`header.${route.name}`)}
                            </Link>
                        ))}
                        <span className="underline" ref={underlineRef}></span>
                    </nav>
                </section>
            </div>
        </header>
        <section className='header--inside_burger' id='header_inside_burger' >
            <nav>
                {routes.map((route, index) => (
                    <Link
                    key={index}
                    to={route.path}
                    className={location.pathname === route.path ? 'active' : ''}
                    >
                        {t(`header.${route.name}`)}
                    </Link>
                ))}
            </nav>
        </section>
        </>
    )
}

export default Header