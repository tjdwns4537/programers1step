function solution(n,m){
    var answer = [];
    let cal = n/m;
    let cal2 = m/n;
    if(Number.isInteger(cal)){
        answer.push(n,m)
    }else if(Number.isInteger(cal)){
        answer.push(m,n)
    }
    return answer;
}
console.log(solution(3,12))