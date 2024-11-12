참고 코드

1. 객체 속성값 가져오기

   ```
   const dog = {
       name: '흰둥이',
       owner: '신짱구',
       age: 1,
       family: ['신짱구', '신짱아', '봉미선', '신형만'],
       walk: function () {
       console.log(this.name + '는 산책중 입니다.')
       },
   }['owner']


    console.log(dog) // 출력 : 신짱구
    // 원리 : dog.owner말고 dog['owner']방법으로도 속성값을 불러올 수 있어
    // 객체 뒤에 바로 ['owner']를 붙여 dog는 항상 신짱구만 출력함
   ```
