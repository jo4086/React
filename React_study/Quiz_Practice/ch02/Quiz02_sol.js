function Quiz02_sol() {
   const rain = 0

   return (
      <div>
         <p>오늘의 날씨는 맑음입니다.</p>
         <p>오늘의 강수확률은 {rain === 0 ? '없음' : rain}입니다.</p>
      </div>
   )
}

export default Quiz02_sol
