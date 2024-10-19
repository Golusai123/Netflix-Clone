import React, { useEffect, useState } from "react";
import "./Nav.css";
import avatar from "./images/Netflixavatar.png";
function Nav() {
  // const[show , sethandleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll" , () => {
  //     if(window.scrollY > 100){
  //       sethandleShow(true);
  //     } else sethandleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    <div className="nav">
      {/* <img src={transparent} alt="" className='logo' /> */}
      <div className="logo_block">
      <h2 className="logo">Bing</h2>
      </div>
      <img src={avatar} alt="" className="avatar" />
    </div>
  );
}

export default Nav;
