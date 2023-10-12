import React from "react";

import {footerArry} from "@/constants";

function Footer() {
  return (
    <footer id="footerType" className="footer__wrap nexon section">
        <h2 className="blind">푸터 영역</h2>
        <div className="footer__inner container">

            <div className="footer__menu">
                
              {footerArry.map((footerText, footerNum) => {
                return (
                  <div className="footer__box" key={footerNum} aria-label={footerText.title}>
                      <h3>{footerText.title}</h3>
                      <ul>
                        {footerText.descItem.map((descItem, descNum) => (
                          <li key={descNum}>
                            <a href="/">{descItem}</a>
                          </li>
                        ))}
                      </ul>
                  </div>
                )
              })}
                
                

            </div>

            <div className="footer__copy__rigth">
                <p>
                    TechHub. <br />
                    All rights reserved.
                </p>
            </div>


        </div>

    </footer>
  )
}

export default Footer