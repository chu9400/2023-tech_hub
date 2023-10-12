import React from "react"

const Banner = () => {
  return (
    <section id="bannerType" className="banner__wrap nexon">
        <h2 className="blind">배너 유형</h2>

        <div className="banner__inner">
            <h3 className="title">기술 강의와 더 많은 콘텐츠</h3>
            <p className="desc">
                더 다양한 강의는 유튜브를 통해 제공하고 있습니다.
                <a href="https://www.youtube.com/" title="유튜브 사이트 이동" target="_blank">www.youtube.com</a>
            </p>
            <span className="small">배너 유형01</span>
        </div>
    </section>
  )
}

export default Banner