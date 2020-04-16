function solution(x){
    let answer = true;
    if(x>=1 && x<=10000){
//    let park = Math.floor(x/10);
//    let mos = x%10;
//    let calculator = x/(park+mos);
    if(!Number.isInteger(x/(Math.floor(x/10)+(x%10)))){
        answer=false
    }
    return answer
}
}
console.log(solution(18))