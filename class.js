// class Product {
//     constructor(itemName,price,discount,productCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
// }
// let pencil = new Product ('pencil', 20 , 2, '10');

// const Product1 = class Product {
//     constructor(itemName,price,discount,productCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
//     get getDiscountValue(){
//         return this.discount;
//     }
//     set setDiscountValue(value){
//         this.discount=value;
//     }
//     getDiscountValue(){
//         return this.discount*this.price/100;
//     }
// }
// let chair = new Product1 ('chair', 499, 15, 'c10');

class Product {
    constructor(itemName){
        console.log("called by super");
        this.itemName = itemName;
    }
    getItemName(){
        return ` ${this.itemName} is a product `;
    }
}
class furniture extends Product {
    constructor(itemName){
        super(itemName);
    }
    getItemName(){
        return `${this.itemName} is a furniture`;
    }
}
let pencil = new Product ('pencil');
let chair = new furniture ('chair');

