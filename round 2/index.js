let N = 10, K = 3
let Arr = [1,2,3,4,5,6,7,8,9,10]
// after K rotations
// Arr = [4,5,6,7,8,9,10,1,2,3]

let na = [];
for (let i = K; i < N; i++){
  na.push(Arr[i])
}
for (let i = 0; i < K; i++){
 na.push(Arr[i])
}
Arr = na;
console.log(Arr)