// object type => primitive type이 아닌것

// let objtest: object = {};
let objtest = { name: 'sfd', age: 12 };

declare function create(o: object | null): void;
let obj2 = create({ name: 'sd', age: 44 });
console.log(obj2);
