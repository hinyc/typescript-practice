"use strict";
//? Array는 같은 타입의 값을 모아 놓은것
let list = [1, 2, 3]; // 추론을 하지만.. 명확히 하는게 좋음
let listtwo = [1, 2, 3]; // 추론을 하지만.. 명확히 하는게 좋음
let listthree = [1, 2, 3]; // jsx, tsx에서 충돌가능성이 있어 지양
let listfour = [1, 2, 3, '4'];
// 배열의 순서에 일정한 타입이 들어올때
//? Tuple type
let info; //length도 지정됨
info = ['hinyc', 100];
// info = [100, 'he']  // error
let person = ['a', 'b', 5, 's'];
const [a, b, c, d] = person;
