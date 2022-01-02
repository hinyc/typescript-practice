"use strict";
//? never
//모든 type의 subtype,
// 어떤것도 할당할 수 없음. any도 불가
// 잘못된 타입을 넣는 실수를 막고자할때 사용
function errors(message) {
    throw new Error(message);
}
function fail() {
    return errors('failed');
}
function infiniteLoop() {
    while (true) { }
}
if (typeof aa !== 'string') {
    aa; //aa:never
}
//type guard
if (typeof bb !== 'string') {
    bb; //bb:number
}
