//?unknown type
//? type guard

declare const maybe: unknown;
declare let aNum: number;

// aNum = maybe; // any 였을경우 에러가 없음

//type guard
if (typeof maybe === 'number') {
  aNum = maybe;
}

if (maybe === true) {
  const aBoolean: boolean = maybe;
}

//any와 unknown
// 둘모두 아무 타입이나 할당이가능
// any는 다른곳에도 할당이 가능하지만 unknown은 타입을 확정해주지 않으면 사용불가
// runtime error를 줄일 수 있을것으로 기대할 수 있음.
// any 자리에 unknown을 쓰도록 노력
