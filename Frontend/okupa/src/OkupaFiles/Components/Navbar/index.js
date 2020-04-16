import React from 'react';

//Img
import Logo from '../../../Images/Logo/logo-nuevo-transparente-chico.png';

//CSS
import './css/Navbar.css';

export default function Perfil() {

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function(){
        var currentScrollPos = window.pageYOffset;
        const navbar = document.getElementById('navbar');
        const container = document.getElementById('navbarContainer');

        if (prevScrollpos > currentScrollPos) {
            navbar.style.transform = "translateY(0)";
        } else {
            navbar.style.transform = "translateY(-50px)";
        }
        prevScrollpos = currentScrollPos;
      }

    return (
        
        <div className="navbarContainer">
            <nav className="navbar" id="navbar">
                <section className="navBarLeft">
                    <button className="backButton" type="button">
                        <i className="far fa-chevron-left"></i>
                    </button>
                </section>
                <section className="logo">
                    <img src={Logo} alt="OKUPA" title="Okupa" />
                </section>
                <section className="navbarRight">
                    <button type="button">
                        <i class="fal fa-search"></i>
                    </button>
                    <button type="button">
                        <i className="fal fa-cog"></i>
                    </button>
                </section>
            </nav>
        </div>
    );
  }