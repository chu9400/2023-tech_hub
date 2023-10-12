import React from "react";
import Image from "next/image";
import {cardTextArry} from "@/constants/";

const Card = () => {
  return (
    <section id="cardType" className="card__wrap nexon section">
      <h2>기술 강의 및 자료</h2>
      <p>
        웹 디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 사이트입니다. <br />
        NEXON Lv1 Tothic TTF 22px 150% #666
      </p>

      <div className="card__inner container">

        {cardTextArry.map( (cardText, cardNum) => {
          return(
            <article className="card" key={cardNum}>
              <figure className="card__header">
                <Image src={cardText.img} alt={cardText.title} width={315} height={226} />
              </figure>
              <div className="card__body">
                <h3 className="title">{cardText.title}</h3>
                <p className="desc expandable-text">{cardText.desc}</p>
                <a className="btn" href="/">더 자세히 보기
                  <span aria-hidden="true">
                    <svg width="51" height="8" viewBox="0 0 51 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z" fill="black" />
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          )
        })}        


      </div>



    </section>
  )
}

export default Card