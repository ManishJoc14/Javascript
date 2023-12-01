const product = {
    itemName : 'Flower',
    price : 50,
    discount : 20, 
    itmecode : 'F40'
}

function createProduct (name, price, discount , code){
    return {
        itemName:name,
        price : price,
        discount: discount,
        itmecode : code
    }
}
const football = createProduct('football', 400, 10, 'f30') ;

function Product1(name, price, discount, code){
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itmecode = code;
    this.discountValue = function(){
   return price * discount / 1000 ;
    } 
}
const laptop = new Product1('Hp',10000,1000,'f14');

class Product {
    constructor(name, price, discount, code) {
            this.itemName = name,
            this.price = price,
            this.discount = discount,
            this.itmecode = code;
    }
}
const mbl = new Product('iphone',100000,1000,'i10');