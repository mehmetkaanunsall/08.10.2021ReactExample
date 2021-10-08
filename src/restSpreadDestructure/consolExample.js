
//rest --Geriye kalan parametreler
let showProducts = function (id,...products)
{
    console.log(id)
    console.log(products[0])
}


console.log( typeof showProducts())
showProducts(10,"Elma","Muz","Karpuz")

//spread -ayrıştırmak (split gibi)
let points =[1,2,3,4,8,5,9,5,1]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//destructuring (önemli) (Arrayde bulunan değerleri değişkene atamak için kullanılır)
let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)


function somefunction([small1],number)
{
    console.log(small1)
}
somefunction(populations)

let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)


