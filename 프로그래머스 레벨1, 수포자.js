function solution(){
    let answer = [1,2,4,2,3,3,4,2,5,3,2,2,5,6,1,4,5,3];
    let jum=[];
    let p1 =[1,2,3,4,5,1,2,3,4,2,3,4,5,1,2,3,4,5];
    let p2 =[2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,3,4,3];
    let p3 =[2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,1,1];
    for(let i=0; i<answer.length; i++){        
        if(answer[i]===p1[i]){
            jum.push(answer[i]===p1[i])
        }else if(answer[i]===p2[i]){
            jum.push(answer[i]===p2[i])
        }else if(answer[i]===p3[i]){
            jum.push(answer[i]===p3[i])
        console.log(answer[i]===p3[i])
        }
    }
    return answer
}
console.log(solution())