import React from "react"

const ImageText = () => {
  return (
    <section id="imageTextType" className="imageText__wrap section nexon">
            <h2 className="blind">이미지 텍스트 영역</h2>
    
            <div className="imageText__inner container">

                <div className="imageText__text">
                    <span className="small">기술 사이트 탐색</span>
                    <h3 className="title">기술 사이트 탐색</h3>
                    <p className="desc">
                        웹디자이너, 웹퍼블리셔, 프론트앤드 개발자를<br />
                        위한 유용한 사이트입니다.
                    </p>

                    <ul className="list">
                        <li><a className="link__list" href="/"><span>기술 사이트 탐색</span></a></li>
                        <li><a className="link__list" href="/"><span>기술 사이트 둘러보기</span></a></li>
                        <li><a className="link__list" href="/"><span>기술 관련 사이트 검색</span></a></li>
                        <li><a className="link__list" href="/"><span>튜토리얼 사이트 추천</span></a></li>
                        <li><a className="link__list" href="/"><span>튜토리얼 방법 및 설명</span></a></li>
                        <li><a className="link__list" href="/"><span>튜토리얼 및 학습 자료</span></a></li>
                        <li><a className="link__list" href="/"><span>학습을 위한 사이트</span></a></li>
                        
                    </ul>

                </div>

                <div className="imageText__img img1">
                    <a className="link__imgText" href="/"><span>레퍼런스 사이트</span></a>
                </div>
                
                <div className="imageText__img img2">
                    <a className="link__imgText" href="/"><span>튜토리얼 사이트</span></a>
                </div>

            </div>
        </section>
  )
}

export default ImageText