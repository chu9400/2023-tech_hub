import React, { useState } from "react"
import { sliderText } from "@/constants";

const Slider = () => {

  /* 현재 배너위치 */
  const [bannerPosition, setBannerPosition] = useState(0);

  /* 밑에 버튼 눌렀을 때 배너이미지 바뀌고 점이미지도 바뀌게 */

  /* 배너 이동 함수 */
  const moveSlider = (방향) => {
    if (방향 === 'left') {
      if (bannerPosition === 0) {
        setBannerPosition(sliderText.length - 1);
      } else {
        setBannerPosition(bannerPosition - 1);
      }
    } else if (방향 === 'right') {
      if (bannerPosition === sliderText.length - 1) {
        setBannerPosition(0);
      } else {
        setBannerPosition(bannerPosition + 1);
      }
    }
  };

  return (
    <section id="sliderType" className="slider__wrap nexon">
            <h2 className="blind">슬라이드 영역</h2>
            <div className="slider__inner">

                <div 
                  className="slider"
                  style={{
                    transform: `translateX(-${bannerPosition * 100}vw)`,
                  }}
                >
                    {
                      sliderText.map( (sliderText, sliderNum )=> {
                        return (
                          <div className={`slider__img slider__img__0${sliderNum + 1}`} key={sliderNum}>
                            <div className="desc">
                                <span>{sliderText.small}</span>
                                <h3>{sliderText.title}</h3>
                                <p>{sliderText.desc}</p>

                                <div className="link__slider">
                                    <a href="#">{sliderText.link_left}</a>
                                    <a href="#">{sliderText.link_right}</a>
                                </div>
                            </div>
                        </div>
                        )
                      }) 
                    }
                </div>

                <div className="slider__arrow">
                    <a href="#" className="left" onClick={() => moveSlider('left')}>
                      <span className="ir">이전 이미지</span>
                    </a>
                    <a href="#" className="right" onClick={() => moveSlider('right')}>
                      <span className="ir">다음 이미지</span>
                    </a>
                </div>

                <div className="slider__dot">
                  {sliderText.map((a, index) => (
                    <a
                      href="/"
                      className={`dot ${bannerPosition === index ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setBannerPosition(index);
                      }}
                      key={index}
                    >
                      <span className="ir">{index + 1}</span>
                    </a>
                  ))}
                </div>
                
            </div>
        </section>
  )
}

export default Slider