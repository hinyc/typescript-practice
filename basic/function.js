"use strict";
function hello(name) {
    return `Hello, ${name || 'world'}`;
}
const result = hello();
console.log(result);
function hello2(name = 'world') {
    // 매개변수 default value 설정
    return `Hello, ${name}`;
}
const result2 = hello2('Tiger');
console.log(result2);
function add(name, ...nums) {
    return `${name}의 점수는 ${nums.reduce((acc, cur) => acc + cur, 0)}`;
}
console.log(add('cat', 1, 2, 3));
console.log(add('monkey', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
const Sam = { name: 'Sam' };
function showName(age, gender) {
    console.log(this.name, age, gender);
}
const thisBind = showName.bind(Sam);
thisBind(30, 'm');
showName.call(Sam, 30, 'f');
showName.apply(Sam, [30, 'm']);
function makeLabel(name, phone) {
    if (typeof phone === 'number') {
        return {
            name,
            phone,
        };
    }
    return `번호는 숫자로 입력해주세요`;
}
