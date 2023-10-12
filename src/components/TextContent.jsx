import React from "react";
import {textContentArray} from "@/constants";

const TextContent = () => {
  return (
    <section id="textType" className="text__wrap nexon section">
      <p className="small">스킬 향상</p>
      <h2 className="title">프로그래밍 스킬 향상</h2>

      <div className="text__inner container">
        
        {
          textContentArray.map( (textContentText, textContentNum) => {
            return (
              <article
                className={`text__box box${textContentNum + 1}`} 
                key={textContentNum}
              >
                <h3 className="title">{textContentText.title}</h3>
                <p className="desc">{textContentText.desc}</p>
                <a className="btn__txt" href="/">{textContentText.link}</a>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default TextContent