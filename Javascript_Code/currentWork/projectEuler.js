function multiplesOf3Or5(number) {
    let sum = 0
    for (let i=1; i<number; i++){
      if (i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum
}
multiplesOf3Or5(1000);

//-------------

function fiboEvenSum(n) {
  let a = 1
  let b = 2
  let sum = 2
  let c = 0
  while (c <= n){
    c = a + b
    if(c % 2 === 0){
      sum += c
    }
    a = b
    b = c
  }
  return sum;
}
fiboEvenSum(10)

//---------------

