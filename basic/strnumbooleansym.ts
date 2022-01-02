'use strict';

// JavaScript => Dynamic Types : 개발중 확인불가, 런타임에서만 잘못된 부분 확인
// TypeScript => Static Types : 개발도중 타입 체크

//!type Anotation
//? 기본자료형 : Boolean, Number, String, Null, Undefined, symbol, Array:object 형
//? 추가 타입 : Any, Void, Never, Unknown, Enum, Tuple:object 형
//! 타입을 표시할땐 소문자사용

//todo 기본자료형 Primitive Type 연습
//?boolean type
let isDone: boolean = false;
isDone = true;
console.log(typeof isDone);

//?string type
let typeString: string = 'hellow';
typeString = 'world';
typeString = `${isDone}`;

//?number type
//10진수 16진수(ex. 0xf00d) 8진수(ex. 0o744) 2진수(ex. 0b1010) NaN
//underscoreNum사용가능
let typeNumber: number = 1;
typeNumber = 99;
let underscoreNum: number = 1_000_000;
console.log(underscoreNum);

function test(para: number): string {
  // para는 number type, 함수 return은  string type
  return String(para + 1);
}

test(3);

//symbol
let sym: symbol = Symbol('aa');
sym = Symbol('as');

const key: string = 'apple';

const obj: any = {
  [key]: 'red',
  [sym]: 'abc',
};

console.log(obj['apple']);
console.log(obj[key]);
console.log(obj[sym]);
