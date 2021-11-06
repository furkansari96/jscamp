function findFriendlyNumber(number1,number2) {
    let total1=0
    let total2=0
    if(number1<1 || number2<1)
    {
        console.log(number1+"ve"+number2+" sayıları arasında kontrol yapılamaz.")
        return
    }
    for (let i = 1; i < number1; i++) {   

        if(number1%i==0) total1+=i
    }
    for (let j = 1; j < number2; j++) {

        if(number2%j==0) total2+=j  
    }
    if(total1==number2 && total2==number1) 
        console.log(number1+" ve "+number2+" sayıları arkadaş sayılardır.")
    else
    console.log(number1+" ve "+number2+" sayıları arkadaş sayılar değildir.")
}

findFriendlyNumber(220,284)
findFriendlyNumber(14,22)
findFriendlyNumber(17296 ,18416)
findFriendlyNumber(1850,4568)
findFriendlyNumber(1184 ,1210)