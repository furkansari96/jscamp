let perfectNumberArray=[]

for (let i = 1; i <= 1000; i++) {
    let total=0;
    for (let j = 1; j <= i; j++) {
        if(i%j==0) total+=j
    }
    if(i*2==total)
    {
        perfectNumberArray.push(i)
    }
}
console.log(perfectNumberArray)

let primeNumberArray=[]
for (let number = 2; number <=1000; number++) {
     let checkVal=false;
     for (let divider = 2; divider <number; divider++) {
         if(number%divider==0) checkVal=true
     }
     if(!checkVal) primeNumberArray.push(number)
}
console.log(primeNumberArray)

