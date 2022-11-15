// !IMPORT
// !1
// import myName from './export.mjs'

// myName()

// !2
// import myObj from './export.mjs'

// console.log(myObj);



// !3 строка 1471
// import {
//     myProfile as testProfile,
//     otherProfile as otherTestProfile
// } from './export.mjs'

// console.log(testProfile); //!{ name: 'Bereke', age: 23 }
// console.log(myProfile); //!ReferenceError: myProfile is not defined <<<- ОШИБКА


// !4
// import {
//     a,
//     b
// } from './export.mjs'

// console.log(a);
// console.log(b);