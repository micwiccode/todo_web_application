import React from "react";
import '../header.css'

export function Header(){
    return (
      <div className='header'>
        <h1 className="header__title">Try not to forget</h1>
        <h4 className="header__subtitle">
          With this app you will never forget about the most important things
        </h4>
      </div>
    );
}
