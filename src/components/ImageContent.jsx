import React from 'react'

const ImageContent = () => {
  return (
    <section id="imageContentType" className="image__content__wrap nexon section">
            <h2>포트폴리오를 통해 실력을 증명하세요</h2>
            <p>아래 이미지들을 클릭하면 자세한 정보를 확인할 수 있습니다.</p>

            <div className="image__inner container">
                <article className="image img1">
                    <h3 className="image__title">React와 함께 가치있는 웹 경험을</h3>
                    <p className="image__desc">
                        현업에서 사용되는 React 기술을 이용하여 웹 경험을 
                        더 풍부하게 만들어 보세요. 우리의 프로젝트와 함께 React의 매력을 경험해보세요!
                    </p>
                    <a className="image__btn" href="/"><span>자세히 보기</span></a>
                </article>

                <article className="image img2">
                    <h3 className="image__title">Vue로 간편한 웹 개발을</h3>
                    <p className="image__desc">
                        현업에서 사용되는 Vue 기술을 이용하여 웹 개발을 더욱 효율적으로 진행하세요.
                        우리의 프로젝트로 Vue의 강력함을 체험해보세요!
                    </p>
                    <a className="image__btn green" href="/"><span>자세히 보기</span></a>
                </article>

            </div>
        </section>
  )
}

export default ImageContent