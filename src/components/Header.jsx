'use client';
import React, { useEffect, useState } from "react";
import { headerText } from "@/constants";

const Header = () => {
  /* 공통 코드 */
    /* 현재 스크린 사이즈를 알려주는 코드 */
      useEffect(() => {
        function checkWindowSize() {
          if (window.innerWidth <= 768) {
            setMobileScreen(true);
          } else {
            setMobileScreen(false);
          }
        }

        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);

        return () => {
          window.removeEventListener('resize', checkWindowSize);
        }
      }, []);


    /* 현재 스크린 사이즈를 알기 위한 변수 */
    const [mobileScreen, setMobileScreen] = useState(null);

    /* modal창 상태 변수 */
    const [isModal, setIsModal] = useState(['hide_modal', false , false]);

  /* 공통 코드 END */

  /*---- pc 화면 ---- */
    /* 마우스 오버시 밑줄 주기위한 상태 변수 */
    const [isOnLine, setIsOnLine] = useState(null);

    /* pc에서 메뉴 오버시 서브메뉴 나타나기 */
    const [showSubMenu, setShowSubMenu] = useState(false);
  /*---- pc 화면 END ---- */
  

  /*---- 모바일 화면 ---- */
    /* 모바일에서 메뉴버튼 클릭시 서브메뉴 나타나기 */
    const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);

    /* 모바일 버튼 클릭 */
    const [isMobile, setIsMobile] = useState(false);

    /* 모바일 서브메뉴 열기 */
    const [activeMenu, setActiveMenu] = useState(null);

    /* 링크 클릭 핸들러 */
    const handleLinkClick = (index) => {
      setActiveMenu(index);
    };

    /* 모바일 서브메뉴 닫기  */
    const [mobileSubMenuOn, setMobileSubMenuOn] = useState(false);
  /*---- 모바일 화면 END ---- */

  return (
    <header id="headerType" className="header__wrap nexon">
      <div 
        className={`header__inner 
          ${mobileScreen == true ? (isMobile == true ? "on__mobile" : "") : ""}
          ${mobileScreen == true ? "" : (showSubMenu == true ? "on__sub__menu" : "")}
          ${showMobileSubMenu == true ? "show__mobile__sub__menu" : ""}
        `}
        onMouseOver={()=> {
          mobileScreen == true ? "" : setShowSubMenu(true);
        }}
        onMouseLeave={()=> {
          mobileScreen == true ? "" : setShowSubMenu(false);
        }}
      
      >
        <nav className="main__menu">
          <div className="logo">
            <a href="/">tech <span>hub</span></a>
          </div>

          <button
            type="button"
            className="btn__menu"
            aria-controls="primary-menu"
            aria-expanded={mobileScreen ? "true" : "false"} 
            role="button"
            tabIndex="0"
            onClick={()=> {
              setIsMobile(!isMobile);
              setShowMobileSubMenu(!showMobileSubMenu);
            }}
          >
            <span className="icon__menu"></span>
          </button>

          <button type="button" className="btn__close">
            <span className="icon__close"></span>
          </button>

          <div className="menu">
          <ul className="list__menu">
              {headerText.map((headerTextItem, headerTextNum) => {
                return (
                  <li
                    className="item__menu"
                    key={headerTextNum}
                    onMouseOver={() => {
                      mobileScreen == true ? "" : (setIsOnLine(headerTextNum));
                    }}
                    onMouseLeave={() => {
                      mobileScreen == true ? "" : (setIsOnLine(null));
                    }}
                  >
                    <a
                      href="/"
                      className="link__menu"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(headerTextNum);
                        setMobileSubMenuOn(!mobileSubMenuOn);
                      }}
                    >
                      <span
                        className={`txt__menu ${
                          mobileScreen ? "" : (isOnLine === headerTextNum ? "on__line" : "")
                        }`}
                      >
                        {headerTextItem.title}
                      </span>
                    </a>
                    <ul
                      className={`list__sub ${
                        mobileSubMenuOn == true ? 
                          (activeMenu === headerTextNum ? "list__sub__on" : "") 
                        : ""
                        
                      }`}
                    >
                      {headerTextItem.desc.map((descItem, descNum) => {
                        return (
                          <li key={descNum}>
                            <a href="/" role="button" >
                              <span>{descItem}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="member">
            <p onClick={ () => {
              let copy = [...isModal];
              copy[0] = 'show_modal';
              setIsModal(copy);
            }}>
              <span>로그인</span>
            </p>
          </div>          

        </nav>
      </div>

      <div className={`modal ${isModal[0] == 'show_modal' ? 'modal__on' : ''}`}>
        <div className="modal__inner">
          <h3 className="modal__title">tech <em>hub</em></h3>
          <div 
            className="cloes"
            onClick={ (e) => {
              let copy = [...isModal];
              copy[0] = 'hide_modal';
              setIsModal(copy);
              e.preventDefault();
            }}
          >
              <a className="link__cloes" href="/"><span className="cloes__cross"></span></a>
          </div>
          <form action="#" className="login__form">
                <input type="text" className="login login__id" placeholder="아이디 "/>
                <input type="text" className="login login__pw" placeholder="비밀번호 "/>

                <div className="choice__sign__wrap">
                    <input type="checkbox" className="check__inp" id="saveSignIn" />

                    <label 
                      htmlFor="saveSignIn"
                      className="check__label"
                      onClick={(e)=>{
                        let copy = [...isModal];
                        copy[1] = !copy[1];
                        setIsModal(copy);
                        e.preventDefault();
                      }}
                    >
                        <span className= {`check__icon ${isModal[1] == true ? 'show_check__icon' : ''}`}></span>
                        간편로그인 정보 저장
                    </label>

                    <div 
                      className="btn__help"
                      onClick={ (e) => {
                        let copy = [...isModal];
                        copy[2] = !copy[2];
                        setIsModal(copy);
                        e.preventDefault();
                      }}
                    >
                        <span className="help__icon"></span>
                    </div>

                    <div className={`help__sub ${isModal[2] == true ? 'help__sub__on' : ''}`}>
                        <p>로그인한 계정의 정보가 저장됩니다. 개인정보 보호를 위해 개인 기기에서만 사용해 주세요.</p>
                        <a href="/">도움말 보기</a>
                    </div>
                </div>

                <div className="big__login__wrap">
                    <a className="big__login__link" href="/"><span>로그인</span></a>
                    <p className="line__or">
                        <span className="txt__or">또는</span>
                    </p>
                    <a className="big__login__link" href="/"><span>QR코드 로그인</span></a>
                </div>
            </form>
        </div>
      </div>
    </header>


  )
}

export default Header