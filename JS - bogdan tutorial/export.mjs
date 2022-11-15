//!1
//console.log(myName); //!ReferenceError: myName is not defined

//!2
// let myName
// console.log(myName); //!undefined


//!3
// let myName
// console.log(myName);//!undefined
// myName = 'Bereke'
// console.log(myName);//!Bereke


//!4
// let myName
// myName = 'Bereke'
// console.log(myName); //!Bereke


//!5
// let myName
// myName = 'Bereke'
// myName = 'Test'
// console.log(myName); //!Test

//!6
//let myName = 'Bereke'
//console.log(console.log(10)); //!undefined //!10

//! ===================================================================


//!1
// const myName
// console.log(myName); //!Missing initializer in const declaration - Отсутствует инициализатор в объявлении константы


//!2
//const myName = 'Bereke'
//console.log(myName); //!Bereke

//!3
// const myName = 'Bereke'
// myName = 'Mereke'
// console.log(myName); //!Assignment to constant variable. - Присвоение постоянной переменной.


//!4
// const myName = ''
// console.log(myName);//! пустая строка

//! ==================================================================


//!1
// const objectA = {
//     a: 10,
//     b: true
// }
// const copyOfA = objectA;
// console.log(copyOfA); //!{ a: 10, b: true }


//!2
//!Для того, чтобы изменять свойства нужно использовать точеную запись
// const objectA = {
//     a: 25,
//     b: true
// }
// const copyOfA = objectA;
// copyOfA.a = 30;
// copyOfA.b = null;
// console.log(objectA); //!{ a: 30, b: null }
// console.log(copyOfA); //!{ a: 30, b: null }
//т.е результат //!ИДЕНТИЧЕН ДЛЯ ОБЕИХ ПЕРЕМЕННЫХ


//!3
//!ТАКЖЕ МОЖНО ДОБАВЛЯТЬ НОВЫЕ СВОЙСТВА ОБЪЕКТУ
// const objectA = {
//     a: 25,
//     b: true
// }
// const copyOfA = objectA
// copyOfA.a = 30;
// copyOfA.b = null;
// copyOfA.c = false;
// copyOfA.d = true;
// console.log(copyOfA);//!{ a: 30, b: null, c: false, d: true }
// console.log(objectA);//!{ a: 30, b: null, c: false, d: true }
//т.е результат //!ИДЕНТИЧЕН ДЛЯ ОБЕИХ ПЕРЕМЕННЫХ... ТАКЖЖЕ МЫ ДОБАВИЛИ НОВЫЕ СВОЙСТВА = с и d .


//! =================================================================


//!1
// function a() {
//     console.log('Hello there');
// }
// a() //! 'Hello there'
// a = 10 //Здесь мы функции присваевем переменной. И мы может так сделать, потому что JS - динамический язык. И переменная может менять свой значение. После чего, могут возникнуть некоторые ошибки.
// a(); //!TypeError: a is not a function
//!РЕШЕНИЯ = const - позволяет предотвратить возможные проблемы, связанные с динамической типизацией.


//!2
// function a() {
//     console.log('Hey there');
// }
// a()
// const a = 10;
// a() //!SyntaxError: Identifier 'a' has already been declared


//!3
// const a = () => {
//     console.log('Hello there');
// }
// a() //!Hello there
// a = 10; //!TypeError: Assignment to constant Variable <- Переменной "a" нельзя присвоить новое значение
// a() // - не дойдет до туда





//! =========================================================
//!ОБЪЕКТЫ

//!1
// const myCity = {
//     city: 'Priozersk',
//     popular: true,
//     country: 'Kazakshatan'
// }
// console.log(myCity); //{ city: 'Priozersk', popular: true, country: 'Kazakshatan' }
// console.log(myCity.city); //Priozersk
// console.log(myCity.popular); //true
// console.log(myCity.country); //Kazakshatan


//!2 ИЗМЕНЕНИЕ И ДОБАВЛЕНИЕ СВОЙСТВ ОБЪЕКТА

// const myCity = {
//     city: 'Do not know',
//     popular: false,
//     country: 'Russia'
// }
// myCity.city = 'Priozersk'; //!ВЫРАЖЕНИЯ
// myCity.popular = true; //!ВЫРАЖЕНИЯ
// myCity.country = 'Kazakhstan'; //!ВЫРАЖЕНИЯ
// myCity.writed = 'Bereke'; //!ВЫРАЖЕНИЯ
// console.log(myCity); // city: 'Priozersk', popular: true, country: 'Kazakhstan', writed: 'Bereke'}
// console.log(myCity.writed); // Bereke //!<---его я добавил вручную через Dot notation
//!ВАЖНЫЙ МОМЕНТ - МЫ НЕ МЕНЯЕМ ЗНАЧЕНИЯ, МЫ МЕНЯЕМ ОБЪЕКТ. А САМА САМА ПЕРЕМЕННАЯ КАК СОДЕРЖИТ ССЫЛКУ, ТАК И СОДЕРЖИТ. 


//!3
//!УДАЛЕНИЕ СВОЙСТВА ОБЪЕКТА

// const myCity = {
//     city: 'Priozersk',
//     popular: true,
//     country: 'Kazaksthan'
// }
// delete myCity.popular
// console.log(myCity); //{ city: 'Priozersk', country: 'Kazaksthan' }
// console.log(myCity.popular); //!UNDEFINED


//!4 МОЖНО ИСПОЛЬЗОВАТЬ КВАДРАТНЫЕ СКОБКИ
// const myCity = {
//     city: 'Priozersk'
// }
// myCity['country'] = 'Kazakshtan' //!!! ОДНО И ТОЖЕ, ЧТОБ НАПИСАТЬ myCity.country = 'Kazakhstan'
// console.log(myCity);
// console.log(myCity.country);


//!КВАДРАТНЫЕ СКОБКИ ТРЕБУЮЕТСЯ, ЕСЛИ МЫ ОБЪЯВЛЯЕМ ПЕРЕМЕННУЮ, И В ПЕРЕМЕННУЮ ВСТАВЛЯЕМ СВОЙСТВО
//!5
// const myCity = {
//     city: 'Priozersk'
// }
// const countryPropertyName = 'country';
// myCity[countryPropertyName] = 'Kazakhstan';
// console.log(myCity); //!{ city: 'Priozersk', country: 'Kazakhstan' }



//!ВЛОЖЕННЫЕ СВОЙСТВА
//!1
// const myCity = {
//     city: 'Priozersk',
//     info: {
//         isPopular: true,
//         country: 'Kazakhstan'
//     }
// }
// const worldPropertyName = 'planeta'
// myCity.info[worldPropertyName] = 'Earth' //!МОЖНО ТАКИМ СПОСОБОМ
// myCity['planeta'] = 'Earth' //!МОЖНО ТАКИМ СПОСОБОМ
// console.log(myCity);




//!ИСПОЛЬЗОВАНИЕ ПЕРЕМЕННЫХ
//!1
// const name = 'Bereke';
// const postQty = 23;
// const userProfile = {
//     name: name,
//     postQty: postQty,
//     hasSignedAgreement: false
// }
// console.log(userProfile); //!{ name: 'Bereke', postQty: 23, hasSignedAgreement: false }
// console.log(userProfile['name']); //!Bereke


// //!2МОЖНО ТАКЖЕ КРАТКО НАПИСАТЬ
// const name = 'Bereke';
// const postQty = 23;
// const userProfile = {
//     name, //!КРАТКО
//     postQty, //!КРАТКО
//     hasSignedAgreement: false
// }
// console.log(userProfile); //!{ name: 'Bereke', postQty: 23, hasSignedAgreement: false }
// console.log(userProfile['name']); //!Bereke


//?МЕТОДЫ

//!1
// const myCity = {
//     me: 'Bereke',
//     city: function() { //!city - это уже метод потому что является методом. А любой метод - это функция. - ОН НЕ ЯВЛЯЕТСЯ СВОЙСТВОМ.
//         console.log('Priozersk');
//     },
//     country: 'Kazakhstan'
// }
// console.log(myCity); //! {me: 'Bereke', city: [Function: city], country: 'Kazakhstan'}
// myCity.city()//!Priozersk



//!2
//!МОЖНО ТАКЖЕ КРАТКО НАПИСАТЬ
// const myCity = {
//     me: 'Bereke',
//     city() {
//         console.log('Priozersk');
//     },
//     country: 'Kazakhstan'
// }
// console.log(myCity); //!{ me: 'Bereke', city: [Function: city], country: 'Kazakhstan' }
// console.log(myCity.city()); //!SyntaxError: Unexpected end of input

// //!3
// const myCity = {
//     me: 'Bereke',
//     city() {
//         console.log('Hello');
//     },
//     country: 'Kazakshtan'
// }
// delete myCity['city']
// console.log(myCity);


//? =====================================================================

// ? JSON - JavaScript Object Notation

//!1 Чтоб конвертировать объект в JSON нужно использовать метод JSON-a , JSON.stringify
// const myCity = {
//     city: 'Priozersk',
//     country: 'Kazakhstan'
// }
// JSON.stringify(myCity) //!'{"city":"Priozersk","country":"Kazakhstan"}'


//!2 ЧТОБ КОНВЕРТИРОВАТЬ JSON в объект нужно использовать JSON.parse()

// const cityStringified = {
//     'title': 'Test title',
//     'city': 'myCity',
//     'country': {
//         'name': 'Kazakhstan',
//         'president': 'Tokaev'
//     }
// }
// JSON.parse(cityStringified);

//!3
// const myCity = {
//     city: 'Priozersk',
//     country: 'Kazakhstan'
// }
// JSON.stringify(myCity)

// const myCityStringified = JSON.stringify(myCity)
// JSON.parse(myCityStringified)



// =======================================================
//?МУТАЦИЯ В JAVASCRIPT

//!1
// const myCity = {
//     city: 'Priozersk',
//     country: 'Kazakhstan',
//     population: 17
// }
// console.log(myCity);//!{ city: 'Priozersk', country: 'Kazakhstan', population: 17 }
// const myCityMutatuion = myCity
// myCityMutatuion.city = 'Karaganda';
// console.log(myCity); //!{ city: 'Karaganda', country: 'Kazakhstan', population: 17 }

// !2 КАК ИЗБЕЖАТЬ МУТАЦИЮ? ПЕРВЫЙ ВАРИАНТ ИСПОЛЬЗОВАТЬ Object.assign({}, variable) <<<---только для корневых элементов, без вложенных объектов в свойств.
// const person = {
//     name: 'Bereke',
//     age: '23',
//     city: 'Astana',
// }
// const myFriend = Object.assign({}, person);
// myFriend.name = 'Asu';
// myFriend.age = '20';
// myFriend.city = 'Karaganda';
// console.log(person); //!{ name: 'Bereke', age: '23', city: 'Astana' }
// console.log(myFriend); //!{ name: 'Asu', age: '20', city: 'Karaganda' }



//!3 ВАРИАНТ - ИСПОЛЬЗОВАТЬ ОПЕРАТОР РАЗДЕЛЕНИЯ ОБЪЕКТА НА СВОЙСТВА {...object} <<<---также не работает для вложенных объектов
// const profile = {
//     name: 'Bereke',
//     age: 23
// }
// const otherProfile = {...profile };
// otherProfile.name = 'Asu';
// otherProfile.age = 20;
// console.log(profile); //!{ name: 'Bereke', age: 23 }
// console.log(otherProfile); //!{ name: 'Asu', age: 20 }



//!4 ВАРИАНТ - СНАЧАЛА ОБЪЕКТ ПРЕВРАТИТЬ В JSON строку, затем его превратить в объект - const variable = JSON.parse(JSON.stringify(object)) <<<---идеальный вариант для вложенных объектов
// const profile = {
//     name: 'Bereke',
//     age: 23,
//     info: {
//         sex: 'male',
//         city: 'Priozersk'
//     }
// }
// const otherProfile = JSON.parse(JSON.stringify(profile))
// otherProfile.name = 'Asu';
// otherProfile.age = 20;
// otherProfile.info.sex = 'female';
// otherProfile.info.city = 'Almata';
// console.log(profile); //!{ name: 'Bereke', age: 23, info: { sex: 'male', city: 'Priozersk' } }
// console.log(otherProfile);//!{ name: 'Asu', age: 20, info: { sex: 'female', city: 'Almata' } }


//! ============================================================
//!?ФУНКЦИИ

// //!1 - НЕ ОПТИМИЗИРУЕМЫЙ КОД
// let a = 5;
// let b = 3;
// let c
// c = a + b;
// console.log(c);//!8 ПРИСУТСТВУЮТ ДВА ОДИНАКОВЫХ БЛОКА
// a = 12;
// b = 8;
// c = a + b;
// console.log(c); //!20 ПРИСУТСТВУЮТ ДВА ОДИНАКОВЫХ БЛОКА

//!2 ДЛЯ ОПТИМИЗАЦИИ ДЕЛАЕМ ТАК создаем функци function sum(a, b)
// let a = 5;
// let b = 3;
// function sum(a, b) {
//     const c = a + b;
//     console.log(c);
// }
// sum(a, b)
// a = 12;
// b = 8;
// sum(a, b)


//!3
// function sum(a, b) {
//     const c = a + b;
//     console.log(c);
// }
// sum(2, 5);
// sum(5, 5);


//!?ФУНКЦИЯ - ЭТО ОБЪЕКТ - ДОКАЗЫВАЕМ
//!1
// function myFn(a, b) {
//     let c;
//     a = a + 1
//     c = a + b
//     return c
// }
// console.dir(myFn) //!<<<---доказывает что любая функция - это ОБЪЕКТ
// myFn(14, 1) //!16

//!2 САМАЯ КОРОТКАЯ ФУНКЦИЯ,КОТОРАЯ ВОЗВРАЩАЕТ undefined
// function myFn() {}
// myFn() //!undefined



//!ПЕРЕДАЧА ЗНАЧЕНИЯ ПО ССЫЛКЕ
//!3
// const personOne = {
//     name: 'Bob',
//     age: 21
// }
// function increasePersonAge(a) {
//     a.age += 9
//     return a
// }
// increasePersonAge(personOne)
// console.log(personOne.age);//!30


//!4Object.assign({}, -)
// const myCity = {
//     city: 'Priozersk',
//     country: 'Kazakhstan'
// }

// function fnMyCity(a) {
//     const otherCity = Object.assign({}, a)
//     otherCity.city = 'Moscow';
//     otherCity.country = 'Russia';
//     return otherCity
// }
// const updated = fnMyCity(myCity)
// console.log(updated);
// console.log(myCity);


//!5
// const myProfile = {
//     name: 'Bereke',
//     city: 'Prizersk',
//     age: 23
// }
// function myFn(a) {
//     const updatedProfile = Object.assign({}, a)
//     updatedProfile.name = 'Asu';
//     updatedProfile.city = 'Almaty';
//     updatedProfile.age = 20;
//     return updatedProfile
// }
// const otherProfile = myFn(myProfile);
// console.log(otherProfile); //!{ name: 'Asu', city: 'Almaty', age: 20 }
// console.log(myProfile); //!{ name: 'Bereke', city: 'Prizersk', age: 23 }


// //!6 {...person}
// const myProfile = {
//     name: 'Bereke',
//     city: 'Priozersk',
//     age: 23
// }


//!7 {... a}
// function myFn(a) {
//     const updatedProfile = {...a };
//     updatedProfile.name = 'Asu';
//     updatedProfile.city = 'Priozersk';
//     updatedProfile.age = 20;
// }
// const otherProfile = myFn(myProfile);
// console.log(otherProfile); //!undefined
// console.log(myProfile); //!{ name: 'Bereke', city: 'Priozersk', age: 23 }


//!7 JSON.parse(JSON.strigify())
// const myProfile = {
//     name: 'Bereke',
//     info: {
//         city: 'Priozerk',
//         age: 23
//     }
// }

// function myFn(a) {
//     const updatedProfile = JSON.parse(JSON.stringify(a))
//     updatedProfile.name = 'Asu';
//     updatedProfile.info.city = 'Almaty';
//     updatedProfile.info.age = 20;
// }

// const otherProfile = myFn(myProfile);
// console.log(otherProfile); //!undefined
// console.log(myProfile); //!{ name: 'Bereke', city: 'Priozersk', age: 23 }

//!8
// const myProfile = {
//     name: 'Bereke',
//     city: 'Priozersk'
// }

// function myFn(a) {
//     a.name = 'Asu';
//     a.city = 'Almaty';
//     return a //!ОБЯЗАТЕЛЬНО НУЖНО ВОЗВРАЩАТЬ РЕЗУЛЬТАТ
// }

// const updatedProfile = myFn(myProfile);
// console.log(updatedProfile);


//!? CALLBACK FUNCTION
//!1
// function callBack() {
//     console.log('Hello');
// }
// console.log('through 2 seconds');
// setTimeout(callBack, 2000); //!ВНУТРИ ФУНКЦИИ ВСТАВЛЯЕМ ФУНКЦИЮ, И ФУНКЦИЯ ВЫЗЫВАЕТСЯ...



//!ОБЛАСТЬ ВИДИМОСТИ
//!1
// let a
// let b

// function myFn() {
//     a = true
//     b = 10

//     return
// }

// myFn()
// console.log(a); //!true ИЗ ЗА ТОГО, ЧТО ВНУТРИ ФУНКЦИ НЕ НАПИСАЛИ КЛЮЧЕВОЕ СЛОВО let
// console.log(b); //!10 ИЗ ЗА ТОГО, ЧТО ВНУТРИ ФУНКЦИ НЕ НАПИСАЛИ КЛЮЧЕВОЕ СЛОВО let


//!2
// let a
// let b

// function myFn() {
//     let a = true
//     let b = 10

//     return
// }

// myFn()
// console.log(a);//!undefined ИЗ ЗА ТОГО, ЧТО В ГЛОБАЛЬНОЙ ОБЛАСТИ ВИДИМОСТИ НИЧЕГО НЕ НАЗНАЧЕНО
// console.log(b);//!undefined ИЗ ЗА ТОГО, ЧТО В ГЛОБАЛЬНОЙ ОБЛАСТИ ВИДИМОСТИ НИЧЕГО НЕ НАЗНАЧЕНО


//!6 ПРОВЕРЯЕМ
// let a = false
// let b = 20

// function myFn() {
//     a = true
//     b = 10

//     return
// }

// console.log(a); //!false ИЗ ЗА ТОГО, ЧТО МЫ ЕЩЕ НЕ ВЫЗВАЛИ ЛОКАЛЬНУЮ ОБЛАСТИ ВИДИМОСТИ
// console.log(b); //!20 ИЗ ЗА ТОГО, ЧТО МЫ ЕЩЕ НЕ ВЫЗВАЛИ ЛОКАЛЬНУЮ ОБЛАСТИ ВИДИМОСТИ

// myFn()
// console.log(a); //!10 ИЗ ЗА ТОГО, ЧТО ПОСЛЕ ВЫЗОВА ФУНКЦИИ МЫ УЖЕ ОБРАЩАЕМСЯ К ЛОКАЛЬНОЙ ОБЛАСТИ ВИДИМОСТИ
// console.log(b); //!true ИЗ ЗА ТОГО, ЧТО ПОСЛЕ ВЫЗОВА ФУНКЦИИ МЫ УЖЕ ОБРАЩАЕМСЯ К ЛОКАЛЬНОЙ ОБЛАСТИ ВИДИМОСТИ



//!7 НЕСКОЛЬКО СТАДИИ ОБЛАСТИ ВИДИМОСТИ
// const a = 5;

// function myFn() {
//     let a = 8;

//     function innerFn() {
//         let a = 7
//         console.log(a);
//     }
//     innerFn()
// }
// console.log(a);
// myFn()


//!8test

// function newObject() {
//     const oneObject = {
//         name: 'Bereke',
//         city: 'Priozersk'
//     }
//     return oneObject
// }

// newObject()


//!9 test
// const userProfile = {
//     name: 'Bereke',
//     city: 'Karaganda'
// }

// function newObject(a) {
//     const updated = JSON.parse(JSON.stringify(a))
//     updated.name = 'Asu';
//     updated.city = 'Almaty';
//     return updated
// }

// const otherProfile = newObject(userProfile)
// console.log(otherProfile);

//!'use strict'
// function myFn() {
//     a = 5;
//     console.log(a);
// }
// myFn()


//!TYPEOF
//!1
// let a = null
// console.log(typeof a === 'object')


// !1
// let userName = prompt("Кто там?", '');

// if (userName === 'Админ') {

//     let pass = prompt('Пароль?', '');

//     if (pass === 'Я главный') {
//         alert('Здравствуйте!');
//     } else if (pass === '' || pass === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }

// } else if (userName === '' || userName === null) {
//     alert('Отменено');
// } else {
//     alert("Я вас не знаю");
// }


// !ОПЕРАТОР РАЗДЕЛЕНИЯ НА СВОЙСТВА ОБЪЕКТА

// const button = {
//     width: 200,
//     text: 'but'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// const newProperty = 'height';
// redButton[newProperty] = 500;
// console.log(redButton);

// !1
// const myProfile = {
//     city: 'Priozerks',
//     country: 'Kazakhstan'
// }
// const otherProfile = {

//     ...myProfile,
//     country: 'Russia',

// }
// console.log(otherProfile);

// !2
// const main = {
//     name: 'Bereke',
//     city: 'Priozerks'
// }

// const myAge = {
//     age: 23
// }

// const allMy = {
//     ...main,
//     ...myAge,
// }

// console.log(allMy);

// !ОПЕРАТОР "+" КАК КОНКАТЕНАЦИЯ СТРОК
//! 1
// const hello = 'hello';
// const world = 'world';
// const greetingFalse = hello + world; //!helloworld
// const greetingTrue = hello + ' ' + world; //!hello world = В ПУСТОЙ СТРОКЕ ТРЕБУЕТСЯ ПРОБЕЛ.
// console.log(greetingFalse);
// console.log(greetingTrue);


//!ШАБЛОННЫЕ СТРОКИ - TEMPLATE STRING
// const hello = 'Hello';
// const world = 'world';
// const greeting = `${hello} ${world}`
// console.log(greeting);

// !2
// const name = 'Bereke';
// const city = 'Priozersk';
// const sentence = `Меня зовут ${name}, и я живу в городе ${city}`
// console.log(sentence);

// !3

// function sentence(name, city) {
//     const oneSentence = `Меня зовут ${name}, и я живу в городе ${city}`
//     console.log(oneSentence);
// }

// sentence('Bereke', 'Priozerks')

// !ИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИУУУУУУ 1
// function sentence() {
//     const info = {
//         name: 'Bereke',
//         city: 'Priozeris'
//     }

//     const myName = `Меня зовут ${info.name}, и я живу в городе ${info.city}`

//     console.log(myName);
// }

// sentence() //!Меня зовут Bereke, и я живу в городе Priozeris

// !ИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИИУУУУУУ 2
// const info = {
//     name: 'Bereke',
//     city: 'Priozeris'
// }

// function sentence(a, b) {


//     const myName = `Меня зовут ${a}, и я живу в городе ${b}`

//     console.log(myName);
// }

// sentence(info.name, info.city) //!Меня зовут Bereke, и я живу в городе Priozeris


// !ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
// const myFn = function(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     console.log(c);
//}

// myFn(2, 2)

//!2
// const myInfo = {
//     name: 'Bereke',
//     city: 'Priozersk'
// }

// setTimeout(function() {
//     const allSentence = `Меня зовут ${myInfo.name}, и я живу в городе ${myInfo.city}`
//     console.log(allSentence);
// }, 2000)


//!3
// const main = (a, b) => {
//     let c
//     a = a + 1
//     c = b + a
//     console.log(c);
// }

// main(2, 2);


//! ЗНАЧЕНИЯ ПАРАМЕТРОВ ФУНКЦИИ ПО УМОЛЧАНИЮ

// function(a, b = 5) {
//     console.log(a * b);
// }

//!1
// function myFn(a = 2, b = 5) {
//     const c = a * b
//     console.log(c);
// }

// myFn(3)

// //!2
// const info = {
//     name: 'Bereke',
//     age: 23
// }

// const info2 = {
//     name: 'Asu',
//     age: 20
// }

// setTimeout(function(a, b) {
//     const result = info.age + info2.age
//     const plus = `lets plus it: ${result}`
//     console.log(plus);
// }, 2000)


// !2
// const myAge = {
//     age: 23
// }

// const otherAge = {
//     age: 40
// }

// const plusAge = function(a = 2, b) {
//     const result = a * b
//     console.log(result);
// }
// plusAge(otherAge.age, myAge.age)


//!3
// const myAge = function(a, b = 5) {
//     console.log(a * b);
// }
// myAge(2, 2)


//!4
// const myAge = (a, b = 5) => {
//     const result = a + b
//     console.log(result);
// }

// myAge(1, 1)

// !5 ЗНАЧЕНИЯ ПАРАМЕТРОВ ФУНКЦИИ ПО УМОЛЧАНИЮ
// const firstPost = {
//     id: 1,
//     name: 'Bereke'
// }

// const post = (post, addAt = Date()) => ({
//     ...post,
//     addAt
// })

// post(firstPost);

// !6
// const infoOfPost = {
//     id: 1,
//     name: 'Bereke',
// }

// const newPost = (post, addAt = Date()) => ({
//     ...post,
//     addAt,
// })

// const published = newPost(infoOfPost)
// console.log(published);


// !7

// const myPost = {
//     id: 1,
//     name: 'Bereke'
// }

// const onePost = function(post, addedAt = Date()) {
//     const posted = ({

//         ...post,
//         addedAt,
//     })

//     return posted
// }

// const result = onePost(myPost)

// console.log(result);


// !9
// const me = {
//     name: 'Bereke',
//     age: 23
// }

// const she = {
//     name: 'Asel',
//     age: 19
// }

// function our(we, date = Date()) {
//     const we =
//         ({
//                 ...we,
//                 date
//             },

//             {
//                 ...we,
//                 date,
//             })

//     return we

// }

// const result = our(me)
// const result2 = our(she)


// !10 ОБРАБОТКИ ОШИБОК
// const error = () => {
//     throw new Error('Somer error')
// }

// error()

// console.log('Continue');

// !11
// const myFn = () => {
//     throw new Error('BEREKE ERROR')
// }

// try {
//     myFn()
// } catch (berekeError) {
//     console.error(berekeError)
//     console.log(berekeError.message)
// }


// !12

// let c = 5;

// function my(a) {
//     console.log(a);
// }

// my(c = c + c + 5 + 15 + 55 + 555 - 555)



// ! ARRAY - ЭТО ОБЪЕКТ С ЦИФРОВЫМИ ИМЕНАМИ СВОЙСТВАМИ
// !1 - первый способ создания массива
// const me = ['Bereke', 23, 'Karaganda', false]
// console.log(me[2]);

// !2 = второй способ создания массива
// const secondArray = new Array('Bereke', true, 23, undefined)
// console.log(secondArray);

// console.log(me == secondArray); //!false


// !1
// const newArray = new Array('true', 'Bereke', 123)
// newArray[1] = 'Asu'
// console.log(newArray);

// !ИСПОЛЬЗОВАНИЕ МЕТОДОВ МАССИВОВ
// !1PUSH
// const newArray = new Array('true', 123, 4, 5)

// newArray.push('bereke', 'Mereke')
// console.log(newArray);

// ! !POP - УДАЛЕНИЕ ПОСЛЕДНЕГО МАССИВА
// const me = ['Bereke', 'Mereke']
// const deletedMe = me.pop()
// console.log(deletedMe); //!Mereke


// !forEach - это выполнение действия с каждым массивом
// !1
// const newArray = new Array(5, 10, 15)
// const result = (e) => forEach(e * 2) //!НЕЛЬЯЗ ТАК ПИСАТЬ



// !2
// const newArray = new Array(5, 10, 15)
// const result = newArray.forEach(function myFn(e) {
//     console.log(e * 5);
// })



// !3
// const newArray = new Array(2, 4, 6)
// newArray.forEach(e => console.log(e * 2))


// !4 MAP - возращает новый массив
// const newArray = [1, 2, 3]
// const oneArray = newArray.map((e) => { return e * 2 })
// console.log(oneArray); //![ 2, 4, 6 ]


//!Деструктуризация
// !1
// const myProfile = {
//     name: 'Bereke',
//     city: 'Karaganda',
//     age: 23,
//     info: {
//         country: 'Kazakhstan',
//         people: 'Kazakh'
//     }
// }

// const { name } = myProfile
// const { city } = myProfile
// const { age } = myProfile
// const { country } = myProfile.info
// const { people } = myProfile.info

// console.log(city);
// console.log(country);
// console.log(myProfile.name);


// !МАССИВЫ
// !1 моя личная попытка
// const oneArray = new Array('Bereke', 23)
// const [0] = oneArray
// console.log();


// !2
// const aboutMe = new Array('Bereke', 23, true)
// const [name, age, truth] = aboutMe
// console.log(name);//!Bereke

// !3
// const city = ['Moscow', 'Astana']
// const [kazakshtan, russia] = city
// console.log(kazakshtan);

// !ДЕСТРУКТУРИЗАЦИЯ В ФУНКЦИЯХ
// !1
// const profile = {
//     name: 'Bereke',
//     age: 23,
//     city: 'Karaganda'
// }

// const resultProfile = ({ name, age }) => {
//     if (!age) {
//         console.log(`It's false`);
//     } else {
//         console.log(`My name is ${name}, I am ${age} years`)
//     }
// }

// resultProfile(profile)

// !2
// const me = {
//     name: 'Bereke',
//     age: 23,
// }

// const myFn = (myProfie) => {
//     const { name, age } = myProfie
//     if (!age) {
//         console.log('It is false');
//     } else {
//         console.log(`My name is ${name}, I am ${age} years old`);
//     }
// }

// myFn(me)

// !IF УСЛОВНЫЙ ОПЕРАТОР
// !1
// const name = {
//     name: 'Bereke'
// }

// if (!name.age) {
//     console.log(`Возраст не указан. Но вас зовут ${name.name}`);
// }

// !2
// const nameAndAge = {
//     name: 'Bereke'
// }

// if (!nameAndAge.age) {
//     nameAndAge.age = 23
//     console.log(nameAndAge)
// }


// ! IF...ELSE
// !1
// let val = 10
// if (val < 5) {
//     val += 20
// } else {
//     val -= 20
// }

// console.log(val);

// !2
// const profile = {
//     name: 'Bereke'
// }

// if (profile.age) {
//     console.log('Он уже существует');
// } else {
//     profile.age = 23
//     console.log(profile);
// }


// !3
// const num = 25

// if (num > 18) {
//     console.log('Adult');
// } else if (num >= 12) {
//     console.log('Teengers');
// } else {
//     console.log('child');
// }

// !3

// const num = 25
// if (num > 18) {
//     console.log('Adult');
// }

// if (num > 12 && num <= 18) {
//     console.log('Teenagers');
// }

// if (num < 12) {
//     console.log('child');
// }


// !SWITCH
// !1

// const month = 12

// switch (month) {
//     case 1:
//         console.log('January');
//         break
//     case 2:
//         console.log('February');
//         break
//     case 12:
//         console.log('December');
//         break
//     default:
//         console.log('abc');
// }


// !2

// const name = 'Bereke'

// switch (name) {
//     case 'Mereke':
//         console.log('False');
//         break
//     case 'Bereke':
//         console.log("it is true");
//         break
//     default:
//         console.log('Khe khe ke');
// }


// !ТЕРНАРНЫЙ ОПЕРАТОР
// const value = 11
// value ? console.log('истинно') : console.log('ложь');;

// !2
// const value = 12
// const result = value ?
//     console.log('истинно') :
//     console.log('ложь')

// console.log(result);//!undefined - потому что он ничего не возвращает, а только выполняет определнные действия

// !3
// const value = 11
// console.log(value >= 0 ? value : -value); //!11


// !4
// const value = -11
// console.log(value < 0 ? value : -value);

//! ЦИКЛЫ
// !1
// let i = 1
// console.log(i);
// i++
// console.log(i);


// !for
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// ! for для массивов
// const myProfile = ['Bereke', 23, true]
// myProfile.forEach(e => {
//     console.log(e);
// })


// ! 1
// const myProfile = ['Bereke', 'Priozersk', 23, true]

// for (let i = 0; i < myProfile.length; i++) {
//     console.log(myProfile[i]);
// }

// !2

// const hisProfile = ['soldier', 20, true]

// for (let i = 0; i < hisProfile.length; i++) {
//     console.log(hisProfile[i]);
// }

// !3
// const myProfie = {
//     name: 'Bereke',
//     city: 'Karaganda'
// }

// for (let i = 0; i < myProfie)

// !4forEach Для массивов
// const main = ['Bereke', true, 23, 'abc']

// main.forEach((element, index, oneArray) => {
//     console.log(element, index, oneArray);
// }) //! Bereke 0 [ 'Bereke', true, 23, 'abc' ]
//! true 1 [ 'Bereke', true, 23, 'abc' ]
//! 23 2 [ 'Bereke', true, 23, 'abc' ]
//! abc 3 [ 'Bereke', true, 23, 'abc' ]



// ! WHILE

// let i = 0;
// while (i < 12) {
//     console.log(i);
//i++ //!ЕСЛИ ЭТОГО НЕ БУДЕТ, ЦИКЛ БУДЕТ БЕСКОНЕЧНЫЙ ТАК КАК ЭТО ПРАВДА
// }

// ! do ... while
// !1
// let i = 0
// do {

//     i++
//     console.log(i);
// } while (i < 5)

// !2
// let i = 10
// do {

//     i++
//     console.log(i);
// } while (i < 4)


// !for ... in
// !1
// const myProfile = {
//     name: 'Bereke',
//     age: 23,
//     truth: true,
//     info: {
//         city: 'Karaganda',
//         country: 'Kazakhstan'
//     }
// }
// for (key in myProfile) {
// console.log(key)
// console.log(':');
// console.log(myProfile[key]);

// console.log(key, ':', myProfile[key]);
// }

// !forEach - Для объектов
// !1
// const myProfile = {
//     name: 'bereke',
//     age: 23,
//     truth: true
// }

// Object.keys(myProfile).forEach(k => {
//     console.log(k, ':', myProfile[k]);
// })

// const hisProfile = {
//     name: 'Asu',
//     age: 20,
//     speacialist: 'Soldier'
// }

// Object.values(hisProfile).forEach(v => {
//     console.log(v);
// })


// !FOR IN Для массивов
// const aboutMe = ['Bereke', true, 23]
// aboutMe.forEach(e => {
//     console.log(e);
// })

// !2
// const me = ['man', 'Bereke', 23, true]
// const newMe = me.map(e => {
//     return e * 2
// })
// console.log(newMe);

// !3
// const aboutMe = ['Bereke', 23]

// for (const ke in aboutMe) {
//     console.log(aboutMe[ke]);
// }


// !4
// const word = 'Hello world'
// for (const letter of word) {
//     console.log(letter);
// }


// !5
// const myProfile = {
//     name: 'Bereke',
//     age: 23,
//     truth: true
// }

// for (const key in myProfile) {
//     console.log(key);
// }


// ! for ... of дял массивов
// const newArray = ['Bereke', true, 23]

// for (const element of newArray) {
//     console.log(element);
// }
//! Bereke true 23 <<<--- результат 


// !0
// const myProfile = {
//     name: 'Bereke',
//     age: 23,
//     truth: true
// }

// const result = Object.keys(myProfile).forEach(key => {
//     console.log(key, myProfile[key]);
// })


// !1
// !Правильная конвертация объект в массив
// const profile = {
//     name: 'Bereke',
//     age: 23
// }

// const resultOfMap = Object.keys(profile).map(e => {
//     return e, profile[e]
// })

// resultOfMap.forEach(e => {
//     console.log(e);
// })

// !EXPORT
// !1
// const myName = () => {
//     console.log('My name is Bereke');
// }
// export default myName



// !2
// const profile = {
//     name: 'Bereke',
//     age: 23,
//     truth: true
// }
// const hisProfile = JSON.parse(JSON.stringify(profile))
// hisProfile.name = 'Asu'
// export default hisProfile


// !3

// const myProfile = {
//     name: 'Bereke',
//     age: 23
// }

// const otherProfile = {
//     name: 'Asu',
//     age: 25
// }

// export {
//     myProfile,
//     otherProfile
// }

// !4
// const a = 'Hello'
// const b = 'Bye'

// export {
//     a,
//     b
// }


// !КЛАССЫ И ПРОТОТИПЫ

// class Comment {
//     constructor(text, age) {
//         this.text = text
//         this.voice = 0
//         this.age = age
//     }

//     upvote() {
//         this.voice += 1
//     }
// }

// const newClass = new Comment('First comment for bereke', 23)

// const num = 1
// const result = num.newClass.upvote()
// console.log(result);


// !1
// class Comment {
//     constructor(text) {
//         this.text = text
//         this.voice = 0
//     }


//     ourVoice() {
//         this.voice += 5
//     }
// }

// const newClass = new Comment('This will be text')

// console.log(newClass instanceof Comment);
// console.log(newClass instanceof Object);

// newClass.ourVoice()
// console.log(newClass.voice);
// newClass.ourVoice()
// console.log(newClass.voice);


// !2

// class Test {
//     constructor(text) {
//         this.text = text
//         this.voice = 0
//     }

//     dovoice() {
//         this.voice += 12
//     }
// }

// const newVar = new Test('It will be text')

// console.log(newVar instanceof Test); //!true
// console.log(newVar instanceof Object); //!true

// console.log(newVar.hasOwnProperty('text')); //!true
// console.log(newVar.hasOwnProperty('voice')); //!true
// console.log(newVar.hasOwnProperty('dovoice')); //!false
// console.log(Object.hasOwnProperty('assign'));


// !3

// class OneTest {
//     constructor(text) {
//         this.text = text
//         this.num = 4
//     }

//     sum() {
//         this.num *= 5
//     }
// }

// const oneVar = new OneTest('the first sentence')
// const secondVar = new OneTest('the second sentence')
// const thirdVar = new OneTest('the third sentence ')

// oneVar.sum()
// console.log(oneVar.num);

// secondVar.sum()
// console.log(secondVar);

// !СТАТИЧЕСКИЕ МЕТОДЫ  <<<--- Метод доступен как свойство класса и не наследуется экзеплярами класса

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.num = 0
//     }

//     dovoice() {
//         this.num += 5
//     }

//     static ourMessage(oneMessage, secondMessage) {
//         return `This will be ${oneMessage}. It is not ${secondMessage}`
//     }
// }

// console.log(Comment.ourMessage('my future', 'py past'));

// !1
// class TestObject {
//     constructor(text) {
//         this.text = text
//         this.num = 0
//     }

//     dovoice() {
//         this.num += 5
//     }
// }

// const oneTest = new TestObject('fire sentence')

// console.log(oneTest instanceof TestObject);
// console.log(oneTest.hasOwnProperty('num'));

// oneTest.dovoice()
// console.log(oneTest);


// !2

// class oneArray extends Array {
//     sum() {
//         return this.reduce((el, acc) => el += acc, 0)
//     }
// }

// const testArray = new oneArray(5, 5, 5)

// console.log(testArray);
// console.log(testArray.sum());

// !3

class NowWeExtendsFromArray extends Array {
    sum() {
        return this.reduce((el, acc) => el += acc, 0)
    }
}

const newVarWhichWillBeCreatingLikeArray = new NowWeExtendsFromArray(4, 5, 6, 7)
console.log(newVarWhichWillBeCreatingLikeArray.sum());

console.log(Array.prototype === NowWeExtendsFromArray.__proto__);