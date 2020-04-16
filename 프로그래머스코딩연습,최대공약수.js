function solution(n,m){
    var answer = [];
    function u(n, m) { return m % n ? u(m % n, n) : n; }
    u(12,13)
    return answer;
}
console.log(solution())
function u(n, m) { return m % n ? u(m % n, n) : n; }
    console.log(u(12,13))