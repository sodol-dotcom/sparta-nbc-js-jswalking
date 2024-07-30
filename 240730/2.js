// # 문제 2. 배열 메서드 활용하기: **forEach()**
// `2.js` 파일을 만들어 '걷기반 튜터님'만 출력되도록 해주세요.*
// 배열 메서드인 forEach 와 조건문을 활용하여 완성해주세요.

let tutorNames = ['최원장', '김르탄', '윤창식', '박가현', '김병연', '내배캠'];

// 여기에 코드를 작성하세요.
// forEach 메서드를 사용해 배열을 순회하세요.
tutorNames.forEach(function (tutor) {
    if (tutor === '최원장' || tutor === '윤창식' || tutor === '박가현' || tutor === '김병연')
        console.log("걷기반 튜터님 => " + tutor)
});
// '걷기반 튜터님'만 콘솔에 출력되도록 조건문을 사용하세요. -> 논리합연산자(||)를 활용해보세요.
// '걷기반 튜터님'이 누군지는 다 알고 계시죠? 🥹