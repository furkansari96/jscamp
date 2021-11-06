function  findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let number=numbers[i]
        if(number<2)
        {
            console.log("Hatalı Giriş. "+ number+" sayısı için asal sayı kontrolü yapılamaz.")
            return
        }
        let checkVal=false
        for (let j = 2; j < number; j++) {     
            if(number%j==0)
            {
                checkVal=true
            }
        } 
        if(!checkVal) console.log(number+" Sayısı Asaldır")
        
        else console.log(number+" Sayısı Asal Değildir")
    }
}
//findPrime(2, 3, 5, 7, 11, 13, 17, 19,20)
findPrime(2,5,8,21, 13) 
findPrime(3,5)