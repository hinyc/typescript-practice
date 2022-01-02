'use strict';
//undefined type, null type
let un = undefined;
let nu = null;
// 다른 값 사용이 불가능
//! undefined, null은 다른 primitive에서 사용 가능.
// tsconfig.json file 에서 strictNullChecks 옵션(strict옵션의 하위옵션) true설정시에만 undefind와 null은 자기자신에게만 할당 가능, 예외적으로 void에는 undefind 할당가능.
//* null은 js에서 object type으로 나옴
// let name: string = undefined;
// let u: undefined = undefined;
let v = undefined;
//? union type
let firstName = null;
