//setTimeout()
//setTimeout(code, delay): delay동안 기다리다가 code를 실해
//setInterval도 비슷, 간격마다 실행 

/*
console.log(1);
setTimeout(() => {
    console.log(2)
}, 2000); //2초
console.log(3);
*/

//마트에 갔을 때
function goMart(){
    console.log('마트에 가서 어떤 음료를 살지 고민.');
}

function pickDrink(callback){
    setTimeout(() => {
        console.log('고민끝!')
        product = '제로콜라';
        price = 2000;
        callback(product,price);
    }, 3000);
} 

function pay(pro, price){
    console.log(`상품명: ${pro}, 가격: ${price}`)
}

let product;
let price;
goMart();
pickDrink(function pay(product, price){
    console.log(`상품명: ${product}, 가격: ${price}`)
});
//pay(product, price)
//실행하면 상품명과 가격이 undefined임. 왜냐면 비동기라 3초뒤 시행이라서! 정의되기 전에 실행해버림
//이것이 비동기의 문제점. 그래서 콜백함수를 사용해서 해결하는것..! 


/*
function mainFunc(para1, para2, callback){
    // console.log(para1, para2);
    callback();
}

function callbackFunc(para){
    console.log('콜백함수 입니다');
}

mainFunc(1, 2, callbackFunc);
*/