'use strict';
const memo = new Map();
//n=0とn=1は決まっているものなので最初から入れておく
memo.set(0,0);
memo.set(1,1);
function fib(n){
    if (memo.has(n)){ //memoにデータがあればそれを使う
        return memo.get(n);
    }
    //memoにデータがないので計算する
    const value = fib(n-1) + fib(n-2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <=40; i++){
    console.log(fib(i));
}
