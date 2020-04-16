function solution(s){
    var answer="";
    answer += s
    answer=answer.split('')
    if(answer.length>=1){
    answer.sort()
    return answer;
    }
}
console.log(solution(''))