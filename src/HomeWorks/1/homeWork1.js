let sayi1=10
let student={id:1, name:"Furkan"}
/* console.log(student) */

function save(puan=10,ogrenci) {
    console.log(ogrenci.name +" "+ puan)
}

//save(undefined,student)

let students=["Engin","Halit","Furkan","Büşra"]
//console.log(students)

let students2=[student,15,students]
//console.log(students2)

//rest (c# params)
let showProducts=function (id,...products) {
    console.log(id)
    console.log(products)
}
//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])

//spread
 let points=[1,2,3,4,50,4,60,14]

 console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//destructure
let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,max]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(max)

function someFunc([small1],number) {
    console.log(small1)

}

someFunc(populations)

let category={id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id,name)
