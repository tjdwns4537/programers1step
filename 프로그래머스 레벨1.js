function solution(x){
    let answer = true;
    if(x<=10000 && x>=1){
        if(!Number.isInteger(x/(Math.floor(x/10)+(x%10)))){
            answer = false;
        }
    return answer;
    }
}
console.log(solution(14))