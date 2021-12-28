import React from 'react';
import logo from '../Home/img/InnovTeam-logos.jpeg';

function Footer() {
    return (
        <div className='footer d__flex align__items__center justify__content__space__between pz-10' style={{ padding: "10px 20px", zIndex: "100" }}>
            <img className='footer__img' src={logo} alt=''></img>
            <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
      >
        Copyright © 2021 programmer Shubham Agarwal @ InnovTeam. All Rights Reserved.
      </span>
        </div>
    )
}

export default Footer
