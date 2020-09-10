//bitwise operators (&, |, ^, ~, <<, >>, >>>)
//AND(&)
// 1 1 = 1
// 1 0 = 0
// 0 1 = 0
// 0 0 = 0
//OR(|)
// 1 1 = 1
// 1 0 = 1
// 0 1 = 1
// 0 0 = 0
//XOR(^)
// 1 1 = 0
// 1 0 = 1
// 0 1 = 1
// 0 0 = 0

console.log(5 & 6); //0101 & 0110 = 4
console.log( 6 | 7); //0110 | 0111 =7
console.log(8 ^ 9); //1000 ^ 1001 =1
console.log(~6); // -7
console.log(5 << 1); //10
console.log(5 << 2); //20
console.log(6 << 2); //24
console.log(8 << 2); //32
console.log(9 << 2); //36
console.log(10 << 2); //40
console.log(4 << 3); //32
console.log(5 >>> 2); //1
console.log(6 >>> 2); //1
console.log(12 >>> 2); //3
console.log(8 >>> 1); //4
console.log(9 >>> 1); //4
console.log(12 >>> 1); //6 
console.log(5 >>> 1); //2
console.log(-5 >> 1); //-3
console.log(-8 >> 2);

