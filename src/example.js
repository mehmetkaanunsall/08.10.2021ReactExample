
//export public görevi görür
export class Customer
{
    constructor(id,customerNumber){
        this.id =id;
        this.customerNumber = customerNumber;
    }
} 
let customer = new Customer(1,"12345");
//prototyping bir nesneye bambaşka bir özellik ekleme
customer.name = "Kaan ÜNSAL"
console.log(customer.name)
console.log(customer.id)
console.log(customer.customerNumber)


Customer.bisey = "Bisey"
console.log(Customer.bisey)
console.log(customer.bisey)//Bu okumaz

console.log(customer.customerNumber)
console.log(customer.id)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber)
    {
        super(id,customerNumber);
        this.firstName = firstName;
    }
}
class CorporateCustomer extends Customer{
     constructor(companyName,id,customerNumber)
    {
        super(id,customerNumber);
        this.companyName = companyName;
    }
}