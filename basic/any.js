"use strict";
//? any 어떤 것이든 된다 => 전체적 type 시스템에 문제가될수 있기때문에 사용시 주의
//최대한 쓰지 않기
//any를 써야하는데 쓰지않으면 오류가나오는 옵션 noImplicitAny
//any는 개체를 통해 계속 전파됨
function any(message) {
    console.log(message);
}
//any 전파 예시
let error = {};
const bcd = error.a.b.c.d;
function change(params) {
    let a = params;
    let b = a + 1;
    return b;
}
function change2(params) {
    let a = params;
    let b = a + 1;
    return b;
}
