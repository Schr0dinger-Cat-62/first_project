export default function Home() {
  return (
    <main>
    <section id="user-profile">
      <h2 className="title">내 프로필</h2>
      <div className="description">
        <figure>
          <figcaption>미래융합학부 26학번 김민철</figcaption>
        </figure>
      </div>
    </section>
    <section id="progress-stats">
      <h2 className="title">학습 진도율</h2>
      <div className="description">
        <figure>
          <figcaption>
            이번 주 온라인 강의 출석률: <strong>100%</strong> 달성
            실습 과제 제출 현황: 2개 완료 / 1개 진행 중
          </figcaption>
      </figure>
      </div>
    </section>
    </main>
  );
}