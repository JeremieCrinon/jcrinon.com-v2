import './Header.css';

import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import logo from '../../img/logo_sans_text.png';

function Header({ routes }){    
    const { t, i18n } = useTranslation();

    const underlineRef = useRef(null);

      const handleBurgerClick = () => {
        const inside_burger = document.getElementById('header_inside_burger');
        inside_burger.classList.toggle('visible')
      }

      const handleChangeLanguage = async () => {
        if(i18n.language === "fr"){
          await i18n.changeLanguage("en");
        } else {
          await i18n.changeLanguage("fr");
        }
        
      };

    return(
        <>
        <header>
            <div className='header--container'>
                <a href='#home' className='header--logo'>
                    <img src={logo} alt='logo' />
                </a>

                <div className='header--burger' onClick={handleBurgerClick}>
                    <div className='burger--bar'></div>
                    <div className='burger--bar'></div>
                    <div className='burger--bar'></div>
                </div>
                
                <section className='header--links'>
                    <nav>
                        <a href='#'>{t("header.home")}</a>
                        <a href='#portfolio'>{t("header.portfolio")}</a>
                        <a href='#contact'>{t("header.contact")}</a>
                        <a href='#' onClick={handleChangeLanguage}>{t("header.language")}</a>
                        <span className="underline" ref={underlineRef}></span>
                    </nav>
                </section>
            </div>
        </header>
        <section className='header--inside_burger' id='header_inside_burger' >
            <nav>
              <a href='#'>{t("header.home")}</a>
              <a href='#portfolio'>{t("header.portfolio")}</a>
              <a href='#contact'>{t("header.contact")}</a>
              <a href='#' onClick={handleChangeLanguage}>{t("header.language")}</a>
            </nav>
        </section>
        </>
    )
}

export default Header