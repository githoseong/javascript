<<<<<<< HEAD
'use strict'
const fruits = ["사과","배","바나나","딸기","수박"];  

fruits.forEach((fruit)=>console.log(fruit));
console.log("========================");

//배열에 값 추가
fruits.push("참외","오렌지","키위");   //배열에 값을 뒤에 추가하는것 .push
console.log(fruits);

console.log("============================"); 
fruits.unshift("앵두","자두");//배열에 값을 앞에 추가하는것  .unshift
console.log(fruits);

//배열값 삭제
console.log("=============================");
fruits.pop();  //배열 뒤부터 삭제  .pop
fruits.pop();
console.log(fruits);


console.log("=============================");
fruits.shift();   //배열 앞부터 삭제  .shift
fruits.shift();
console.log(fruits);

//특정요소위치부터 지정개수만큼 제거(splice(인덱스번호,개수))
console.log("==============================");
fruits.splice(2,1);   
console.log(fruits);

console.log("============================");
fruits.splice(2);   //뒤에 개수를 안적으면 뒤에 다 삭제되니 주의
console.log(fruits);

fruits.splice(1,1,"옥수수","자몽","터미터");  //1번위치에 1번지우고 세개 추가
console.log(fruits);

fruits.splice(1,0,"감자");   //1번위치에 지우지않고 감자만 추가
console.log(fruits);

// console.clear();
console.log("=========================");
let imsifruits = fruits.slice(2);  //2번부터 자료를 보여줌 .slice
console.log(imsifruits);
console.log(fruits);   //슬라이스로 했다고 지워지는건 아니라서 전체 보기하면 다 나옴

imsifruits = fruits.slice(2,4);  //인덱스 2번과 4번의 앞까지(3번)를 보여줌  
console.log(imsifruits);

console.log("===========================");
//결합 concat()
const concatFrutis = fruits.concat(imsifruits);
console.log(concatFrutis);

//자료검색 : includes()  있으면 true 없으면 false
console.log(concatFrutis.includes("옥수수"));
console.log(concatFrutis.includes("옥사사"));

//indexOf() : 있으면 위치값, 없으면 -1
console.log(concatFrutis.indexOf("옥수수"));
console.log(concatFrutis.indexOf("옥사사"));

//lastIndexOf() : 뒤에서부터 검색 : 있으면 위치값, 없으면 -1
console.log(concatFrutis.lastIndexOf("옥수수"));
console.log(concatFrutis.lastIndexOf("옥사사"));
=======
'use strict';

const fruits = ["사과","배","바나나","딸기","수박"];

fruits.forEach(fruit => console.log(fruit));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~");

// 배열에 값 추가(push(), unshift())
fruits.push("참외","오렌지","키위");
console.log(fruits);

console.log("!!!!!!!!!!!!!!!!!!!!!!!");
fruits.unshift("앵두","자두");
console.log(fruits);

console.log("@@@@@@@@@@@@@@@@@@@@@@");
// 배열값 삭제(pop(), shift())
fruits.pop();
fruits.pop();
console.log(fruits);

console.log("########################");
fruits.shift();
fruits.shift();
console.log(fruits);

console.log("$$$$$$$$$$$$$$$$$$$$$$$$");
// 특정요소위치부터 지정개수만큼 제거(splice(인덱스번호, 개수))
fruits.splice(2, 1);
console.log(fruits);

fruits.splice(3);   // splice()에 인덱스번호만 적으면 그 위치부터 모두 제거한다.
console.log(fruits);
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%");

fruits.splice(1,1,"옥수수","자몽","토마토");
console.log(fruits);

fruits.splice(1,0,"감자");
console.log(fruits);

console.clear();
console.log("^^^^^^^^^^^^^^^^^^^^^^^");
// 배열의 지정된 위치부터 자료를 가져온다. : slice()
let imsiFruits = fruits.slice(2);
console.log(imsiFruits);
console.log(fruits);

// fruits배열의 인덱스번지 2번째부터 4번째 앞까지 가져오시오.
imsiFruits = fruits.slice(2,4);
console.log(imsiFruits);
console.log(fruits);

console.log("&&&&&&&&&&&&&&&&&");
// 결합(붙이기) : concat()
const concatFruits = fruits.concat(imsiFruits);
console.log(concatFruits);

// 배열의 자료 검색 : includes() - 있으며 true, 없으면 false
console.log(concatFruits.includes("옥수수"));
console.log(concatFruits.includes("옥소수"));

// indexOf() : 있으면 위치값, 없으면 -1
console.log(concatFruits.indexOf("옥수수"));
console.log(concatFruits.indexOf("옥소수"));

// lastIndexOf() : 뒤에서부터 검색 : 있으면 위치값, 없으면 -1
console.log(concatFruits.lastIndexOf("옥수수"));
console.log(concatFruits.lastIndexOf("옥소수"));

>>>>>>> 04a5bac (220413)
