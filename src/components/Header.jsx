'use client';
import React, { useState } from "react";
import { headerText } from "@/constants";
/* 
  1. 글자 스타일 수정
  2. 호버시 밑 줄 뜨는 효과 해야함.
  3. 로그인 클릭시 modal창 제작.
  4. 반응형
*/
const Header = () => {

  const [isOnLine, setIsOnLine] = useState(false);

  return (
    <header id="headerType" className="header__wrap nexon">
      <div className="header__inner">
        <nav className="main__menu">
          <div className="logo">
            <a href="/">tech <span>hub</span></a>
          </div>
          <button
            type="button"
            className="btn__menu"
            aria-controls="primary-menu"
            aria-expanded="false"
            role="button"
            tabIndex="0"
          >
            <span className="icon__menu"></span>
          </button>

          <button type="button" className="btn__close">
            <span className="icon__close"></span>
          </button>

          <div className="menu">
            <ul className="list__menu">
              {
                headerText.map((headerTextItem, headerTextNum) => {
                  return (
                    <li className="item__menu" key={headerTextNum}>
                      <a 
                        href="/"
                        className={`link__menu ${isOnLine ? "on__line" : ""}`}
                        onMouseOver={()=> {
                          setIsOnLine(true);
                          console.log('test');
                          /* 이부분 밑에 txt__menu에 밑 줄 그어져야해! */
                        }}
                      >
                        <span className="txt__menu">{headerTextItem.title}</span>
                      </a>
                      <ul className="list__sub">
                      {
                        headerTextItem.desc.map((descItem, descNum) => {  
                          return (  
                            <li key={descNum}>
                              <a href="/"><span>{descItem}</span></a>
                            </li>
                          );
                        })
                      }
                      </ul>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="member">
            <p>
              <span>로그인</span>
            </p>
          </div>

          {/* <div className="sub__bg"></div> */}

        </nav>

        <div className="modal">

        </div>

      </div>
    </header>


  )
}

export default Header