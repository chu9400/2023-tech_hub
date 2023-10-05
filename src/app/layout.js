import "@/assets/scss/style.scss";

export const metadata = {
  title: "Tech Hub",
  description: "나만의 학습 사이트를 컨셉으로 만든 페이지입니다.",
  keywords: ["포트폴리오, 공부, 학습, 넥스트, next.js"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
