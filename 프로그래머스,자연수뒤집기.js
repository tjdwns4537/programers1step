function solution(n) {
    var answer = String(n).split("").reverse().map(n=>n)
    return answer;
}
console.log(solution(12345))