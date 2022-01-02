function hello(name?: string) {
  return `Hello, ${name || 'world'}`;
}

const result = hello();
console.log(result);

function hello2(name: string = 'world') {
  // 매개변수 default value 설정
  return `Hello, ${name}`;
}

const result2 = hello2('Tiger');
console.log(result2);

function add(name: string, ...nums: number[]): string {
  return `${name}의 점수는 ${nums.reduce((acc, cur) => acc + cur, 0)}`;
}

console.log(add('cat', 1, 2, 3));
console.log(add('monkey', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

interface User {
  name: string;
}

const Sam: User = { name: 'Sam' };

function showName(this: User, age: number, gender: 'm' | 'f') {
  console.log(this.name, age, gender);
}
const thisBind = showName.bind(Sam);
thisBind(30, 'm');
showName.call(Sam, 30, 'f');
showName.apply(Sam, [30, 'm']);

//overload

interface Label {
  name: string;
  phone: number;
}
//TypeScript는 함수 오버로딩의 개념을 제공한다. 이름은 같지만 매개 변수 유형 및 반환 유형이 다른 함수를 여러 개 가질 수 있습니다. 그러나 매개 변수의 수는 같아야 합니다.
function makeLabel(name: string, phone: number): Label;
function makeLabel(name: string, phone: string): string;
function makeLabel(name: string, phone: number | string): Label | string {
  if (typeof phone === 'number') {
    return {
      name,
      phone,
    };
  }
  return `번호는 숫자로 입력해주세요`;
}
