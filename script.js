// const pi=3.14;
// const r1=5;
// const r2=10;
// const r3=15;
//
// s1=square(r1);
// function square(r) {
//   return 4*pi*r*r;
// }
// console.log(s1);
// const a=1.4142;
// v1=a/12*5*5*5;
// =====================
//объем тетраэдра
// const x = Math.sqrt(2);
// console.log(x);
// v1=x/12*5*5*5;
// v2=x/12*10*10*10;
// console.log(v1);
// console.log(v2);
// ===========================
// объем тетраэдра через ф-ю
// const x = Math.sqrt(2);
// const a1=5;
// const a2=10;
// v2=cube(a2);
//   function cube(a){
//     return x/12*a*a*a;
//   }
// console.log(v2);
// ==============================
// площадь треугольника
// const a=5;
// const b=6;
// const c=7;
// const p1=(1/2)*(a+b+c);
// console.log(p1);
// =====================================
const a=5;
const b=6;
const c=7;
let p=fom(5,6,7);
function fom(a,b,c){
  return (1/2)*(a+b+c);
}
console.log(p);
// var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
// console.log(s);

var s=foo(9,5,6,7);
function foo(p,a,b,c){
  return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}
console.log(s);
